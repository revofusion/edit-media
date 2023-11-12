import {AiResponse, AiVideoRequest, User} from "../ai.types";
import {firestore} from "../utils/firebase";

export const storeAudioVideo = async (aiResponse: AiResponse, user: User, input: AiVideoRequest) => {
  await firestore.collection("/audiovideo").doc(aiResponse.id).create({
    id: aiResponse.id,
    created: aiResponse.created,
    choices: aiResponse.choices,
    model: aiResponse.model,
    user_id: user.user_id,
    input,
  });
};
