import { IChatbot } from "./chatbotSlice";
import { store } from "../../app/store";

export function listenAndAnswer (inputMessage: string) {

  const chatbotState: IChatbot = store.getState().chatbot
  //const chatbotState = useSelector((state: RootState) => state.chatbot);
  if (!chatbotState || !chatbotState.intents || !chatbotState.reactions) {
    console.error('Chatbot state is not ready! @listenAndAnswer');
    return '';
  }
  const pointerToReaction = chatbotState.intents[inputMessage];
  if (!pointerToReaction) {
    //console.log('I do not understand you');
    return `You said: "${inputMessage}"`;
  }
  //console.log(chatbotState.reactions[pointerToReaction]);
  return chatbotState.reactions[pointerToReaction];
}