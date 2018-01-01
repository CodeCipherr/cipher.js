const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot ready to work!');
});

const prefix = '>'
client.on('message', message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith === prefix + 'ping') {
  message.channel.send('Pong!');
  }});
          
  client.login(process.env.BOT_TOKEN);
