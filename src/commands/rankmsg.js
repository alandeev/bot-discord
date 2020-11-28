const Discord = require('discord.js');

const userController = require('../controllers/userController');

const { icons } = require('../configs/levels.json');

module.exports = async (message, args, user) => {
  const users = (await userController.getUsersRankMessages()).slice(0, 9);

  const embed = new Discord.MessageEmbed({
    "embed": {
      "title": "Rank de Mensagens",
      "description": "",
      "footer": {
        "text": "requisitado por alandev2#1231"
      }
    }
  })

  const maped = users.map((user, index) => `\n[${icons[index+1]}] <@${user.user_id}> enviou ${user.messages} mensagens`).join('');
  embed.description = `\n\n${maped}`;
  embed.setTitle('Top :nine: usuários que mais conversam!');
  message.reply(embed).then(msg => msg.delete({ timeout: 20000 }));
}
