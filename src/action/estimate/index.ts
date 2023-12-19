import { ChatId, sendMessage } from '../../common/api';

export const runEstimate = (chatId: ChatId) => {
  sendMessage({chatId, text: 'Что будем оценивать?'})
}