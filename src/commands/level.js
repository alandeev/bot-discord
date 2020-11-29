const levels = require('../configs/levels.json');

module.exports = async (message, args, user) => {
  if(!user) return;
  if(user.role >= 5) return message.reply('você já está no nível máximo sua anta!');

  const msg = 'você está `nível ['+levels[user.role].name+'] '+user.role+'` para upar para o `nível ['+levels[user.role+1].name+'] '+(user.role+1)+'` ainda faltam `'+(levels[user.role+1].count - user.messages)+' mensagens.`';

  message.reply(msg).then(msg => msg.delete({ timeout: 30000 }));
}
