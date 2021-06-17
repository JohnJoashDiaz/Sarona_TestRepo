const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'ping'){
        message.channel.send('pong');
    }
    else{
        message.channel.send('not ping >:(');
    }

});

bot.login('temp');
