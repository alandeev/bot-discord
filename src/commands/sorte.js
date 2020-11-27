const fs = require('fs');
exports.run = async (message, args, user) => {
  fs.readFile('./src/utils/messages.txt', (error, data) => {
    if(error) return console.log({error});


    const messages = data.toString().split('\n').filter(message => message.length > 4);
    let randomMessage = false;
    do{
      randomMessage = messages[(Math.random() * messages.length).toFixed()];
    }while(!randomMessage)
    message.reply(randomMessage).then(msg => msg.delete({ timeout: 20000 }));
  })
}

exports.help = {
  name: "sorte",
  description: "Gera uma mensagem aleatoria",
  channels: ['779105654886760477', '777657136435429392',''],
}
