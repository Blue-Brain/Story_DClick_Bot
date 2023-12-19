import { runEstimate } from '../../action/estimate';
import bot, { Message } from '../../common/telegram';

export default function listenerEstimate () {
  bot.onText(/\/estimate/, async (msg: Message) => {
    try {
      await runEstimate(msg.chat.id);
    }
    catch (err) {
      console.error(err);
    }
  });
};
