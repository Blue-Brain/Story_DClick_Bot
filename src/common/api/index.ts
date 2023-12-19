import bot, { Message, Chat, EditMessageTextOptions } from '../telegram';

export type Text = string;
export type ChatId = Chat['id'];
export type MsgId = Message['message_id'];

export interface ISendMessage {
  text: Text, 
  chatId: ChatId
}

export interface IEditMessage {
  text: Text, 
  chatId: ChatId, 
  msgId: MsgId
}

export const sendMessage = async ({text, chatId}: ISendMessage): Promise<void> => {
  console.log('sendMessage', {text, chatId});
  
  bot.sendMessage(chatId, text);
} 

export const editMessage = async ({text, chatId, msgId}: IEditMessage): Promise<void>=> {
  const option: EditMessageTextOptions = {
    chat_id: chatId,
    message_id: msgId
  }
  bot.editMessageText(text, option);
}

