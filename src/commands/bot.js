const Discord = require('discord.js');

module.exports = (message, args, user) => {
  const embed = new Discord.MessageEmbed({
    title: "Meu nome é Alan backend developer",
    description: "```Opa membros comuns, sou apxd por tecnologias/desenvolvimento-web```",
    thumbnail: {
      url: 'https://avatars2.githubusercontent.com/u/41262469?s=460&u=759e38d0962cd337926e230f60699284e6247cb5&v=4'
    },
    fields: [
      {
        name: "GitHub",
        value: 'https://github.com/alandev2'
      },
      {
        name: "Discord",
        value: '<@771545919841632346>'
      },
    ],
    footer: {
      text: `requisitado por: ${message.author.username}#${message.author.discriminator}`,
      icon_url: message.author.displayAvatarURL({dynamic : true})
    }
  })

  message.channel.send(embed).then(msg => msg.delete({ timeout: 20000 }));
}
