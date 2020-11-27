const fs = require('fs');
const userController = require('../controllers/userController');

const commands = [];

(function addCommands(){
  fs.readdir("./src/commands/", (error, files) => {
    if(error) return console.error(error);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0){
      return console.log("No commands to load");
    }

    jsfiles.forEach(command => commands.push(command.replace('.js', '')));
  });
})()

module.exports = async (message) => {
  const { author, content } = message;
  if(author.bot) return;

  let user = await userController.findUser(author.id);
  if(!user){
    user = await userController.createUser(author);
    if(!user) return;
  }

  if(content){
    if(message.channel.id == '779105654886760477'){
      await user.addmsg();
      const upRole = await user.upRole();
      if(upRole){
        return message.channel.send(`${author.username}#${author.discriminator} acabou de upar para o nivel ${upRole}`);
      }
    }

    if(content[0] == '!'){
      if(message.channel.id == '779105654886760477'){
        await user.addcmd();
      }

      if(content == '/comandos' || content == '/cmds'){
        return message.channel.send(`Comandos ainda estão em desenvolvimento.`);
      }

      const args = message.content.slice(1).trim().split(' ');
      const cmdName = args.shift().toLowerCase();

      const command = commands.find(command => command === cmdName);
      if(command){
        const cmd = require(`../commands/${command}`);
        const { run, help } = cmd;
        if(!help.channels.find(channel => channel ==message.channel.id)){
          return message.reply('Você não pode utilizar este comando nesse canal')
        }
        run(message, args, user);
      }
    }
  }
}
