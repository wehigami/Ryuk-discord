const { MessageEmbed } = require("discord.js")
const scraper = require('images-scraper')
const google = new scraper ({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    aliases: [],
    description: "get an image from the web",
    async execute(message,args, cmd, client, Discord){
        const imageQuery = args.join(' ');
        if(!imageQuery) return message.channel.send('enter image name');

        const imageResults = await google.scrape(imageQuery, 1);
        message.channel.send(imageResults[0].url);
        
    }
}
    
