const userController = require('../controllers/userController');

exports.run = async (message, args, user) => {
  const users = (await userController.getUsersRankMessages()).slice(0, 10);

  const maped = users.map(user => `\nUsuario ${user.username}:${user.discriminator} enviou ${user.messages} mensagens`).join('');
  message.reply(`\n ${maped}`).then(msg => msg.delete({ timeout: 20000 }));
}

exports.help = {
  name: "rankmsg",
  description: "Foda-se",
  channels: ['779105654886760477', '777657136435429392'],
}
