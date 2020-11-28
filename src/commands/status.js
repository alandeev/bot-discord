const Discord = require('discord.js');

const rankedLucked = [
  ":first_place:",
  ":second_place:",
  ":third_place:"
]

const levels = require('../configs/levels.json');

const userController = require('../controllers/userController');
const User = require('../models/User');
const rankmsg = require('./rankmsg');

module.exports = async (message, args, _user, client) => {
  const { user_id, username, discriminator, avatar, commands, messages, role, desc } = _user;

  let id =  args.length == 1 ? args[0].match(/[\d]/g).join('') : user_id;
  if(!id){ id = user_id; }

  const user = await User.findOne({
    where: { user_id: id }
  })

  if(!user) return message.reply(`<@${id}> não foi encontrado no banco de dados!`);

  const discordUser = client.users.cache.find(user => user.id == id);
  if(!discordUser) return message.reply("Usuario não encontrado no Grupo!");

  const rankMsg = (await userController.getUsersRankMessages()).findIndex(user => user.user_id == id);

  const embed = new Discord.MessageEmbed({
    color: '#0099ff',
    author: {
      name: `${discordUser.username}#${discordUser.discriminator}`,
      icon_url: discordUser.displayAvatarURL({dynamic : true}),
    },
    thumbnail: {
      url: discordUser.displayAvatarURL({dynamic : true}),
    },
    fields: [
      { name: 'Rank :crown:', value: `${rankedLucked[rankMsg] ? rankedLucked[rankMsg] : `#${rankMsg}`}` },
      { name: 'Nível :level_slider:', value: `[${user.role}] ${levels[user.role].name}` },
      { name: 'Mensagens :speech_left:', value: user.messages, inline: true },
      { name: 'Comandos :video_game:', value: user.commands, inline: true},
    ],
    footer: {
      text: `requisitado por: ${message.author.username}#${message.author.discriminator}`,
      icon_url: message.author.displayAvatarURL({dynamic : true}),
    },
  })

  if(desc){ embed.description = '```\n'+desc+'```'; }

  message.reply(embed).then(msg => msg.delete({ timeout: 30000 }));
}
