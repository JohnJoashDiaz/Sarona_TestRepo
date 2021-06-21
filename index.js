const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'ping'){
        message.channel.send('pong');
    } else if (message.content == 'pong'){
        message.channel.send('ping');
    } else {
        message.channel.send('not ping or pong!')
        message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    }
});

bot.login('temp');