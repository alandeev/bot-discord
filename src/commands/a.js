exports.run = async (message, args, user) => {
  const msg = args.join(' ');
  if(!msg){
    return message.reply('você precisa enviar alguma mensagem.');
  }

  if(msg.includes('@here') || msg.includes('@everyone')){
    return message.reply('você não pode marcar todos no anonimo');
  }

  message.channel.send(msg);
  message.delete();
}

exports.help = {
  name: "a",
  description: "Enviar mensagem anonima",
  channels: ['779105654886760477', '777657136435429392'],
}
