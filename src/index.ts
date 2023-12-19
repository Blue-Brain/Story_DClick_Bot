import { runStart } from './action/start';
import bot from './common/telegram';

bot.on('text', async msg => {
  await runStart(msg.chat.id);
  
  console.log(msg);
});