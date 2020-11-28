const levels = require('../configs/levels.json');

module.exports = async (message, args, user) => {
  // const next_level = levels[user.role+1];
  if(!user) return;
  const msg = `Você está nivel [${levels[user.role].name}] ${user.role} para upar para o nível [${levels[user.role+1].name}] ${user.role+1} ainda faltam ${levels[user.role+1].count - user.messages} mensagens.`

  message.reply(msg).then(msg => msg.delete({ timeout: 30000 }));
}
