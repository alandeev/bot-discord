const fs = require('fs');
const userController = require('../controllers/userController');

const automatizeChat = require('../controllers/autoMessages');

const commands = require('../commands');

module.exports = async (message, client) => {
  const { author, content } = message;
  if(author.bot) return;

  let user = await userController.findUser(author.id);
  if(!user){
    user = await userController.createUser(author);
    if(!user) return;
  }
  if(content){
    if(user.last_message == content){ return message.delete(); }
    automatizeChat(message);
    if(message.channel.id == '779105654886760477'){
      await user.addmsg();
      await user.addLastMessage(message.content);
      const upRole = await user.upRole();
      if(upRole){
        return message.channel.send(`${author.username}#${author.discriminator} acabou de upar para o nivel ${upRole}`);
      }
    }

    if(content[0] == '!'){
      if(message.channel.id == '779105654886760477'){
        await user.addcmd();
      }

      if(content == '!comandos' || content == '!cmds'){
        let msg_commands = '`comandos abaixo`\n\n'
        msg_commands += commands.sort((a, b) => a.role > b.role ? 1 : -1).map(command => {
          return '`!'+command.names[0]+'` - '+command.description+' | `nível: '+command.role+'`';
        }).join('\n')
        return message.reply(msg_commands);
      }

      const args = message.content.slice(1).trim().split(' ');
      const cmdName = args.shift().toLowerCase();

      const command = commands.find(command => command.names.find(name => name == cmdName ));
      if(command){
        if(user.role < command.role){
          return message.reply('`!'+command.names[0]+'` apenas pessoas `nível '+command.role+'` podem usar este comando. Você está `nivel '+user.role+'`');
        }
        if(!command.channels.find(channel => channel == message.channel.id)){
          return message.reply('Você não pode utilizar este comando nesse canal')
        }
        command.run(message, args, user, client);
      }
    }
  }
}
