const Discord = require('discord.js');

const userController = require('../controllers/userController');

const { icons } = require('../configs/levels.json');

module.exports = async (message, args, user) => {
  const users = (await userController.getUsersRankMessages()).slice(0, 9);

  const embed = new Discord.MessageEmbed()

  const maped = users.map((user, index) => `\n[${icons[index+1]}] <@${user.user_id}> enviou ${user.messages} mensagens`).join('');
  embed.description = `\n\n${maped}`;
  embed.setTitle('Top :nine: usuários que mais conversam!');
  embed.setFooter(`requisitado por ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL({dynamic : true}))
  message.channel.send(embed).then(msg => msg.delete({ timeout: 20000 }));
}
