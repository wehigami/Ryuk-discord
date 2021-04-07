module.exports = {
    name: 'unmute',
    aliases: [],
    description: "unmutes a user",
    execute(message,args, cmd, client, Discord){
        if (message.member.roles.cache.has('697243393658585200')) {
            const target = message.mentions.users.first();
            if (target) {
                let muteRole = message.guild.roles.cache.find(role => role.name === "chuj")

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                message.reply(`<@${memberTarget.user.id}> został odpierdolony z kosmosu`)
            } else{
                message.channel.send("nie wiem o kogo chodzi")
            }
        }
            
    }
}

//795765286682624020