const Discord = require('discord.js');
const cron = require('cron');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.once('ready', () => {
    console.log('Hisoka has arrived.');

    client.user.setActivity("🍎 r!help 🍎", {type: "WATCHING"})
});


['commandHandler', 'eventHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})



let job1 = new cron.CronJob('00 00 13,18 * * *',() => {
    console.log("reminder sent");
    let channel = client.channels.cache.get('697243394098987089');
    channel.send(`<@&795832386108653608> i co kurwa panienki? 🤦‍♀️ Dzienne przypomnienie rozciągajcie plecy 😂, w szczególności dolną partię  https://youtu.be/QumlJTVhVCc?t=274 \nhttps://www.youtube.com/watch?v=8otTdS5DhE4 \nhttps://www.youtube.com/watch?v=RqcOCBb4arc&t=472s \ni pamiętajcie żeby pić wodę 🥤`);
});

let job2 = new cron.CronJob('00 30 18 * * *',() => {
    console.log("reminder sent");
    let channel = client.channels.cache.get('697243394098987089');
    channel.send(`<@&795832386108653608> i co kurwa panienki? 🙎‍♀️ Trening zrobiony? 💪 Ja już zrobiłem. 😎🤙 Teraz wasza kolej. 👉🤓`);
});

client.on("message", (message) => {
    // this is an utterly retarded way of coding but switch didn't work and I can't be bothered to fix it
    if (message.content.includes('savdol') || message.content.includes('Savdol')) {
        message.channel.send('to chuj')
    }
});
    

job1.start();
job2.start();
//last line
client.login(process.env.TOKEN);