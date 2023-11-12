// import * as logger from "firebase-functions/logger";
import {onCall} from "firebase-functions/v2/https";
import {consumeUserCredits, retrieveUser} from "./stores/user";
import {getFfmpegCommand} from "./ai";

export const audioVideo = onCall(
  {cors: true, timeoutSeconds: 60},
  async (request) => {
    // Get user
    let {user, userDoc} = await retrieveUser(request.auth);

    // Consume credits
    user = await consumeUserCredits({user, userDoc, credits: 1});

    // Validate request
    const data = await getFfmpegCommand(request.data, user);

    return {
      user,
      data,
    };
  }
);
