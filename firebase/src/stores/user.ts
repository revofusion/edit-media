import {AuthData} from "firebase-functions/lib/common/providers/tasks";
import {DocumentReference, DocumentData} from "@google-cloud/firestore";
import {firestore} from "../utils/firebase";
import {User} from "../ai.types";
import {HttpsError} from "firebase-functions/v2/https";

export const retrieveUser = async (auth: AuthData | undefined): Promise<{ user: User, userDoc: DocumentReference<DocumentData> }> => {
  if (!auth) {
    throw new Error("Not authenticated");
  }

  if (!auth.token.email_verified) {
    throw new Error("Email not verified");
  }

  const currentTimeMs = +new Date();

  const userDoc = firestore.collection("/users").doc(auth.uid);
  const userDataObj = await userDoc.get();

  let user: User;
  if (!userDataObj.exists) {
    user = {
      user_id: auth.uid,
      tokens_remaining: 100,
      tokens_used: 0,
      tokens_refreshed: currentTimeMs,
    };
    await userDoc.set(user);
  } else {
    user = userDataObj.data() as User;

    // Refresh tokens
    const oneMonthInMilliseconds = 30 * 24 * 60 * 60 * 1000;
    if ((currentTimeMs - user.tokens_refreshed) > oneMonthInMilliseconds) {
      await userDoc.update({
        tokens_remaining: user.tokens_remaining += 100,
        tokens_refreshed: currentTimeMs,
      });
    }
  }

  return {
    user,
    userDoc,
  };
};

export const consumeUserCredits = async ({user, userDoc, credits}: { credits: number, user: User, userDoc: DocumentReference<DocumentData> }): Promise<User> => {
  const newRemainingCredits = user.tokens_remaining - credits;

  if (newRemainingCredits < 0) {
    throw new HttpsError("resource-exhausted", "You do not have enough credits to perform this operation");
  }

  await userDoc.update({
    tokens_remaining: newRemainingCredits,
  });

  return {
    ...user,
    tokens_remaining: newRemainingCredits,
  };
};
