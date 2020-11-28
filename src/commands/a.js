module.exports = async (message, args, user) => {
  const msg = args.join(' ');
  if(!msg){
    return message.reply('você precisa enviar alguma mensagem.');
  }

  if(msg.includes('@here') || msg.includes('@everyone')){
    return message.reply('você não pode marcar todos no anonimo');
  }

  console.log({anonymous: {
    username: `${user.username}#${user.discriminator}`,
    content :msg
  }})

  message.channel.send(msg).then(msg => msg.delete({ timeout: 500000 }));;
  message.delete();
}
