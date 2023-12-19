import bot, { BotCommand } from '.';

export interface ICommand extends BotCommand {};

const COMMANDS: ICommand[] = [
  {
    command: 'start',
    description: 'Запуск бота'
  },
  {
    command: 'estimate',
    description: 'Запускает опрос и сбрасывает уже запущенный'
  },
];

const initMenu = () => {
  bot.setMyCommands(COMMANDS);
}

export default initMenu;