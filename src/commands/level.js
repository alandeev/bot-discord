const levels = require('../configs/levels.json');

exports.run = async (message, args, user) => {
  // const next_level = levels[user.role+1];
  if(!user) return;
  const msg = `Você está nivel [${levels[user.role].name}] ${user.role} para upar para o nível [${levels[user.role+1].name}] ${user.role+1} ainda faltam ${levels[user.role+1].count - user.messages} mensagens.`

  message.reply(msg).then(msg => msg.delete({ timeout: 30000 }));
}

exports.help = {
  name: "level",
  description: "Verificar sistema de Nivel",
  channels: ['779105654886760477', '777657136435429392'],
}
