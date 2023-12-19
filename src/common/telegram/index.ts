import TelegramBot, { Message, Chat, User, EditMessageTextOptions, BotCommand } from 'node-telegram-bot-api';
export { default as initMenu } from './initMenu';
export { Message, Chat, User, EditMessageTextOptions, BotCommand };

const bot = new TelegramBot('6770675356:AAFdE8Yz4PXeyUdwVwmNFxkeSu7D1PR0Xnk' ,{
  polling: true
}); 

export default bot; 