module.exports = async (message, users, user) => {
  if(!users || users.length == 0) return message.reply('você precisa por nomes de usuarios!');
  while(true){
    let user = users[(Math.random() * users.length).toFixed()];
    if(user) return message.reply(`${user} ganhou a aposta!`).then(msg => msg.delete({ timeout: 20000 }));
  }
}
