exports.run = async (message, args, user) => {
  const desc = args.join(' ');
  if(!desc) return message.reply('você precisa enviar uma descrição.')
  if(desc.length > 30) return message.reply('você precisa por uma descrição de até 30 caracteres');

  await user.setDescription(desc);
  message.reply('Descrição alterada com sucesso!').then(msg => msg.delete({ timeout: 30000 }));
}

exports.help = {
  name: "desc",
  description: "Setar uma descrição no !status",
  channels: ['779105654886760477', '777657136435429392'],
}
