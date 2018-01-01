const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({game: {name: ("Under Development!"), type: 0}});
  console.log('I am ready!');
});

const prefix = '>'
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  if (message.content === prefix + 'ping') {
    message.channel.send('Pong!')
}};

    
client.login(process.env.BOT_TOKEN);
