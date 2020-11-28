const fs = require('fs');
module.exports = async (message, args, user) => {
  fs.readFile('./src/utils/messages.txt', (error, data) => {
    if(error) return console.log({error});


    const messages = data.toString().split('\n').filter(message => message.length > 4);
    let randomMessage = false;
    do{
      randomMessage = messages[(Math.random() * messages.length).toFixed()];
    }while(!randomMessage)
    message.reply(randomMessage).then(msg => msg.delete({ timeout: 10000 }));
  })
}
