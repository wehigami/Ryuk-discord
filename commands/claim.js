// TODO debuuug, instead of checking the entire channel for reaction check just the message etc.
const scraper = require('images-scraper')

const google = new scraper({
    puppeteer: {
        headless: true
    }
});

const { MessageEmbed } = require("discord.js");

const fetch = require("node-fetch");

require('dotenv').config();

module.exports = {
    name: 'claim',
    aliases: [],
    description: "claim your waifu/husbando!",
    async execute(message,args, cmd, client, Discord) {

        let url = 'http://www.animecharactersdatabase.com/api_series_characters.php?character_q=';
        let emojis = ['☄️', '🦒', '🐳', '🐙', '🐒', '🤡', '👻', '🎃', '🐵', '🙈'];



        if (!args.length) {
            return message.channel.send("Nie dałeś postaci chuju");
        }

        let waifu = args.join(' ');

        if (args.length > 1) {
            waifu = args[0] + '+' + args[1];
            url = 'http://www.animecharactersdatabase.com/api_series_characters.php?character_q=' + waifu;
        } else if (args.length > 2) {
            waifu = args[0] + '+' + args[1] + '+' + args[2];
            url = 'http://www.animecharactersdatabase.com/api_series_characters.php?character_q=' + waifu;
        }
        else {
            waifu = args[0];
            url += waifu;
        }




        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
            }
        })
        var data = await response.json();
        console.log(data);

        try {
            if (response) {
                console.log('success');
            } else {
                console.log('rejected');
            }
        }
        catch (err) {
            console.log(err);
            message.channel.send("There was an Error");
        }


        let waifuGender = data.search_results[0].gender;
        let dataLen = data.search_results.length;


        if (dataLen >= 1) {
            var charNames = [];
            console.log(charNames);


            for (var i = 0; i < dataLen; i++) {
                while (i < 10) {
                    charNames.push(`***Postać:*** ${data.search_results[i].name} ***Anime:*** ${data.search_results[i].anime_name} \n`);
                    charNames[i] += emojis[i];
                    break;
                }
            }
        }


        // figure out a way to send the number of value of characters
        const embed = new Discord.MessageEmbed()
            .setColor('#ff009d')
            .setTitle('🐙 Waifu Claim 🐙')
            .setDescription(`${i} postaci z anime. Kto je chce?`)
            .setThumbnail('https://media.discordapp.net/attachments/697391573792587883/822574245732679690/1593635613311.png')
            .setAuthor('Clown Guy', process.env.PFP)
            .addFields(
                { name: '```Kliknij emoji aby wybrać o kogo ci chodzi!```', value: charNames },


            )
            .setFooter('Nie ma tu twojej postaci? Spróbuj wpisać jej imię bardziej dokładnie!');

        if (dataLen > 1) {
            const msgEmbed = await message.channel.send(embed);
            msgEmbed;
            for (i = 0; i < dataLen; i++) {
                while (i < 10) {
                    msgEmbed.react(emojis[i]);
                    break;
                }
            }

            function claimMsg(num) {
                message.channel.send(`✨ ${data.search_results[num].name} został/a sclaimowany/a! ✨\n ${data.search_results[num].character_image}`);
            }


            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch()
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == '697243394098987088') {

                    for (let i = 0; i < emojis.length; i++) {
                        if (reaction.emoji.name === emojis[i])
                          claimMsg(i);
                      }

                      msgEmbed.delete({ timeout: 200 });
                      
                }
            })
        } else {
            if (waifuGender == 'Male') {
                message.channel.send(claimMsg(0));
            } else {
                message.channel.send(claimMsg(0));
            }

        }


        //TODO sledzic w databasie kto co sclaimowal itd.


    }
}
