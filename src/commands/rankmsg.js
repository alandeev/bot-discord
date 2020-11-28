const userController = require('../controllers/userController');

const { icons } = require('../configs/levels.json');

module.exports = async (message, args, user) => {
  const users = (await userController.getUsersRankMessages()).slice(0, 9);

  const maped = users.map((user, index) => `\n[${icons[index+1]}] <@${user.user_id}> enviou ${user.messages} mensagens`).join('');
  message.reply(`\n ${maped}`).then(msg => msg.delete({ timeout: 20000 }));
}
