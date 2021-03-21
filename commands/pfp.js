const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'pfp',
    description: "sends your profile picture",
    execute(client, message, args){
        let member = message.mentions.users.first() 

        const embed = new MessageEmbed()
            .setColor('#5338c9')
            .setTitle('Requested Profile Picture')
            .setImage(member.displayAvatarURL({size: 2048}));

        message.channel.send(embed);
        
    }
}
    
