module.exports = async (message, args, user) => {
  const desc = args.join(' ');
  if(!desc) return message.reply('você precisa enviar uma descrição.')
  if(desc.length > 50) return message.reply('você precisa por uma descrição de até 50 caracteres');
  if(desc.includes("@")) return message.reply("você não pode utilizar o @ na descrição");

  await user.setDescription(desc);
  message.reply('Descrição alterada com sucesso!').then(msg => msg.delete({ timeout: 30000 }));
}
