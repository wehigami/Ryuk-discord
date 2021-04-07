const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'pfp',
    aliases: [],
    description: "sends your profile picture",
    execute(message,args, cmd, client, Discord){
        let member = message.mentions.users.first() 

        const embed = new MessageEmbed()
            .setColor('#5338c9')
            .setTitle('Requested Profile Picture')
            .setImage(member.displayAvatarURL({size: 2048}));

        message.channel.send(embed);
        
    }
}
    
