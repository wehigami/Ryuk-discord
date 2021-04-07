const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    aliases: [],
    description: "recieve help",
    execute(message,args, cmd, client, Discord) {
        let thumbGif = 'https://thumbs.gfycat.com/EqualElderlyDragonfly-size_restricted.gif'
        let commandSects = ['👨‍🏭 Moderation', '🎵 Music', '💼 Useful', '😳 Random'];

        // Yeah I know all these embeds look terrible, but I actually have no idea how to do it better
        // tbh I dont even care to make them more aesthetic for now lol
        const defEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .setFooter('Type r!help <command name> for more info on the command')
            .addFields(
                { name: commandSects[0], value: '`mute`   `unmute`   `prune`', inline: true },
                { name: commandSects[1], value: '`play`   `stop`', inline: true },
                { name: commandSects[2], value: '`lolmmr`   `pfp`   `ping`   `pick`', inline: true },
                { name: commandSects[3], value: '`ateista`   `jp`   `rafonix`   `spam`   `image`   `summon`   `claim`', inline: true },
            )
        //.setImage('https://media.discordapp.net/attachments/697391573792587883/801879393814708264/help.png')

        const claimEmb = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .addFields(
                { name: commandSects[3], value: '`claim` Claim your waifu/husbando!', inline: true }
            );

        const summEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[3], value: 'https://media.discordapp.net/attachments/697391573792587876/805205076364230656/790971696890904618.png', inline: true }
            );

        const ateEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[3], value: '`ateista` sends a random image of an atheist', inline: true }
            );

        const imgEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[3], value: '`image` give it arguments and it will send you an image', inline: true }
            );

        const jpEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[3], value: '`jp` I represent Krakow', inline: true }
            );

        const lolmmrEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[2], value: '`lolmmr` give it a name of a summoner (from EUNE) and it will give you their MMR', inline: true }
            );

        const muteEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[0], value: '`mute` Mutes a user for a set number of time', inline: true }
            );

        const pfpEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[2], value: "`pfp` Sends you a user's profile picture", inline: true }
            );

        const pickEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[2], value: '`pick` Picks a random number between the numbers you gave it. Do r!pick x y', inline: true }
            );

        const pingEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[2], value: '`ping` tells you your ping (its bugged rn lol)', inline: true }
            );

        const playEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[1], value: '`play` Plays audio. Give it a link or just a name', inline: true }
            );

        const pruneEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[0], value: '`prune` Deletes a number of messages', inline: true }
            );

        const rafonEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[3], value: '`rafonix` :)', inline: true }
            );

        const spamEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[3], value: '`spam` spams a number of messages', inline: true }
            );

        const stopEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[1], value: '`stop` Stops the bot', inline: true }
            );

        const unmuteEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)

            .addFields(
                { name: commandSects[0], value: '`unmute` Unmutes a muted user', inline: true }
            );


        if (!args[0]) return message.channel.send(defEmbed)

        switch (args[0]) {
            case "ateista":
                message.channel.send(ateEmbed)
                break;
            case "image":
                message.channel.send(imgEmbed)
                break;
            case "jp":
                message.channel.send(jpEmbed)
                break;
            case "jp":
                message.channel.send(jpEmbed)
                break;
            case "lolmmr":
                message.channel.send(lolmmrEmbed)
                break;
            case "mute":
                message.channel.send(muteEmbed)
                break;
            case "pfp":
                message.channel.send(pfpEmbed)
                break;
            case "pick":
                message.channel.send(pickEmbed)
                break;
            case "ping":
                message.channel.send(pingEmbed)
                break;
            case "play":
                message.channel.send(playEmbed)
                break;
            case "prune":
                message.channel.send(pruneEmbed)
                break;
            case "rafonix":
                message.channel.send(rafonEmbed)
                break;
            case "spam":
                message.channel.send(spamEmbed)
                break;
            case "stop":
                message.channel.send(stopEmbed)
                break;
            case "unmute":
                message.channel.send(unmuteEmbed)
                break;
            case "summon":
                message.channel.send(summEmbed)
                break;
            case "claim":
                message.channel.send(claimEmb)
                break;
        }
    }
}

