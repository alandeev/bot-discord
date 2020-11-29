const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.on('ready', () => {
  // client.user.setUsername("集 CDL 🍭");
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', (msg) => require('./events/message')(msg, client));

client.login(process.env.TOKEN_BOT);
