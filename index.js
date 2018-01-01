const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

const prefix = '>'
client.on('message', (message, roles) => {
  if (message.author.bot) return;
  if (!command.startsWith(prefix)) return;

  if (command === prefix + 'ping') {
    message.channel.send('Pong!')
}
});
    
client.login(process.env.BOT_TOKEN);
