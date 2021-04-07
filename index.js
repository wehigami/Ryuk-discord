const Discord = require('discord.js');
const cron = require('cron');
const mongoose = require('mongoose');
const ms = require('ms');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.commands = new Discord.Collection();
client.events = new Discord.Collection();


client.once('ready', (message) => {
    console.log('Hisoka has arrived.');

    client.user.setActivity("🍎 r!help 🍎", {type: "WATCHING"})
});


['commandHandler', 'eventHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})



let job1 = new cron.CronJob('00 00 13,18 * * *',() => {
    console.log("reminder sent");
    let channel = client.channels.cache.get('697243394098987089');
    channel.send(`msg`);
});

let job2 = new cron.CronJob('00 30 18 * * *',() => {
    console.log("reminder sent");
    let channel = client.channels.cache.get('697243394098987089');
    channel.send(`msg`);
});

client.on("message", (message) => {
    // this is an utterly retarded way of coding but switch didn't work and I can't be bothered to fix it
    if (message.content.includes('one') || message.content.includes('One')) {
        message.channel.send('1')
    }
});

mongoose.connect(process.env.MONGODBSRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Database error:' + err);
})

job1.start();
job2.start();
//last line
client.login(process.env.TOKEN);