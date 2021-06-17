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

bot.login('NzI3MTE4ODA5MTk4MTAwNjI4.XvnMPg.lljUOvLKBBNJ7wzxWkTIwj6EfWM');