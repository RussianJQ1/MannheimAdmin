const { memory } = require('console');
var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {

    var sender = message.author;
    var msg = message.content.toUpperCase();
    var prefix = '-'

    if (sender.id === '758080135743275089'){
        return;
    }

    if(msg === prefix + 'PING') {
        message.channel.send('Pong!')
    }

    if (msg.includes('HURENSOHN')){
        message.delete();
        message.author.send("**Das Wort Hurensohn darf nicht auf den Server verwendet werden**\nLG Das Team")
    }
    if (msg.includes('HURE')){
        message.delete();
        message.author.send("**Das Wort Hure darf nicht auf den Server verwendet werden**\nLG Das Team")
    }
});

bot.on('ready', () => {
    console.log('Bot Launched...')
    
    bot.user.setActivity('Mannheim V1')
});

bot.login('NzYxMjc0MDAyODE5Nzc2NTM0.X3YNqg.QK_E_iEyS26bX0P33ltfRc3C_Qg')