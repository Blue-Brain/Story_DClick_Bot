import { ChatId, sendMessage } from '../../common/api';

export const runStart = (chatId: ChatId) => {
  sendMessage({chatId, text: 'Какую задачу оценим?'})
}