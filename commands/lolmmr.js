const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
let url = 'https://eune.whatismymmr.com/api/v1/summoner?name=';

module.exports = {
    name: 'lolmmr',
    description: "check your league mmr",
    async execute(client, message, args) {

        if (!args.length) {
            return message.channel.send("You need to give me a player");
        }

        let user = String(args[0]);


        // probably shoudl've used switch here but it returns null so I won't bother
        if(args.length > 1) {
            user = args[0] + '%20' + args[1];
            url = 'https://eune.whatismymmr.com/api/v1/summoner?name=' + user;
        } else if(args.length > 2) {
            user = args[0] + '%20' + args[1] + '%20' + args[2];
            url = 'https://eune.whatismymmr.com/api/v1/summoner?name=' + user;
        } 
        else {
            user = args[0];
            url = 'https://eune.whatismymmr.com/api/v1/summoner?name=' + user;
        } 

        
        


        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Your user agent'
            }
        })
        var data = await response.json();
        console.log(data);

        try{
            if (response) {
                console.log('success');
            } else {
                console.log('rejected');
            }
        } catch(err) {
            console.log(err);
            message.channel.send("There was an error with the response");
        }
        

        let dataSum = String(data.ranked.summary);

        const embed = new MessageEmbed()
            .setColor('#ffe294')
            .setDescription(`:sunglasses: ${String(user).toUpperCase().replace('%20', ' ')}'S MMR :call_me:`)
            .setTitle(' :crossed_swords:  Your League MMR :crossed_swords: ')
            .setAuthor('Clown Guy', process.env.PFP)
            .setThumbnail('https://media.discordapp.net/attachments/697391573792587883/801780383301632031/Season_2019_-_Challenger_1.png')
            .addFields(
                { name: '```Average Ranked MMR```', value: data.ranked.avg, inline: true },
                { name: '```Ranked Rating```', value: dataSum.replace(/(<([^>]+)>)/ig, ''), inline: true }
            )
            .setTimestamp();

            message.channel.send(embed);
        
    }
}

/*await fetch(url, {
           method: 'GET',
           headers: {
               'User-Agent': 'discord-com.wehi.30YearOldWizardBot:v1.0'
           },
       }).then(res => {
           return res.json();
       })
       .then(data => console.log(data))
       .catch(error => console.log(error));*/