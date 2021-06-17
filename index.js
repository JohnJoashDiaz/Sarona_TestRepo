const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'ping'){
        message.channel.send('pong');
    } else if (message.content == 'pong'){
        message.channel.send('ping');
    } else {
        message.channel.send('not ping or pong!')
    }

});

bot.login('NzI3MTE4ODA5MTk4MTAwNjI4.XvnMPg.lljUOvLKBBNJ7wzxWkTIwj6EfWM');