import { runStart } from '../../action/start';
import bot, { Message } from '../../common/telegram';

export default function listenerStart () {
  bot.onText(/\/start/, async (msg: Message) => {
    try {
      await runStart(msg.chat.id);
    }
    catch (err) {
      console.error(err);
    }
  });
};
