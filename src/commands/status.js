const Discord = require('discord.js');

const userController = require('../controllers/userController');

exports.run = async (message, args, user) => {
  const { user_id, username, discriminator, avatar, commands, messages, role } = user;

  const rankMsg = (await userController.getUsersRankMessages()).findIndex(user => user.user_id == user_id);

  const embed = new Discord.MessageEmbed({
    color: '#0099ff',
    title: `${username}#${discriminator}`,
    author: {
      name: `${username}#${discriminator}`,
      icon_url: message.author.avatarURL(),
    },
    description: 'Puxar status',
    thumbnail: {
      url: 'https://cdn.discordapp.com/avatars/771545919841632346/89e8ed299772d93c3706292a2104f22d.webp'
    },
    fields: [
      { name: 'Mensagens', value: messages },
      { name: 'Comandos', value: commands },
      { name: 'Rank de Mensagens', value: rankMsg+1 }
    ],
    footer: `${message.author.username}`
  })

  message.reply(embed);
}

exports.help = {
  name: "status",
  description: "Foda-se",
  channels: ['779105654886760477', '777657136435429392'],
}
