const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "mutes a user",
    execute(client, message, args) {
        if (message.member.roles.cache.has('697243393658585200') || message.member.roles.cache.has('772140773084495882')) {
            const target = message.mentions.users.first();
            if (target) {

                let muteRole = message.guild.roles.cache.find(role => role.name === 'chuj');

                let memberTarget = message.guild.members.cache.get(target.id);

                if (!args[1]) {
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> został wypierdolony w kosmos`);
                    return
                }
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> został wypierdolony w kosmos na ${ms(ms(args[1]))}`);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send('nie wiem o kogo chodzi');
            }
        } else {
            message.channel.send('error permisji');
        }
    }
}

//795765286682624020