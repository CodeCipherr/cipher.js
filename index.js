const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

const prefix = '>'
client.on('message', (message, roles) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  if (message.content === prefix + 'ping') {
    message.channel.send('Pong!')
}
  if(command === prefix + 'eval') {
    if(message.author.id !== "133867153890869248") return;
    const args3 = message.content.split(' ').slice(1);
    function clean(text) {
        if (typeof (text) === 'string')
            return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
        else
            return text;

    }
    const code = args.join(' ');
    try {
        let evaled = eval(code);
        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
        if (evaled.includes(client.token)) evaled = evaled.replace(client.token, `NANI!`);
        if (code.startsWith("//")) evaled = evaled.replace("undefined", "Umm...is that just supposed to be 2 backslashes?!!")
        if (code.includes("rm")) return;
        const embed = new Discord.RichEmbed()
            .setTitle(`\`Evaled Code\``)
            .setAuthor('Worked!')
            .setColor(0x00ff00)
            .addField(':inbox_tray: INPUT', "**```js\n" + code + "```**")
            .addField(':outbox_tray: OUTPUT', "**```js\n" + clean(evaled) + "```**")
        message.channel.send({ embed });
    } catch (err) {
        const embed = new Discord.RichEmbed()
            .setTitle('`Evaled Code`')
            .setColor(0xff0000)
            .setAuthor("Oops! Looks like there's an error!")
            .addField(':x:', "**```js\n" + code + "```**")
            .addField(':x:', "**```js\n" + clean(err) + "```**")
        message.channel.send({ embed });
 }
}
});
    
client.login(process.env.BOT_TOKEN);
