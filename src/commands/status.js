const Discord = require('discord.js');

const levels = require('../configs/levels.json');

const userController = require('../controllers/userController');

exports.run = async (message, args, user) => {
  const { user_id, username, discriminator, avatar, commands, messages, role, desc } = user;

  const rankMsg = (await userController.getUsersRankMessages()).findIndex(user => user.user_id == user_id);

  const embed = new Discord.MessageEmbed({
    color: '#0099ff',
    author: {
      name: `${username}#${discriminator}`,
      icon_url: message.author.avatarURL(),
    },
    thumbnail: {
      url: message.author.avatarURL(),
    },
    fields: [
      { name: ':speech_left: Mensagens', value: messages },
      { name: ':video_game:  Comandos', value: commands },
      { name: ':crown: Rank', value: `#${rankMsg+1}` },
      { name: ':level_slider: Nível', value: `[${role}] ${levels[role].name}` }
    ],
    footer: `${message.author.username}`
  })

  if(desc){ embed.description = desc; }

  message.reply(embed).then(msg => msg.delete({ timeout: 30000 }));
}

exports.help = {
  name: "status",
  description: "Foda-se",
  channels: ['779105654886760477', '777657136435429392'],
}
