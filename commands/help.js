const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    description: "recieve help",
    execute(client, message, args) {
        let thumbGif = 'https://i.pinimg.com/originals/ae/50/de/ae50de1d0eab441625470cc5daa0fc15.gif'
        // Yeah I know all these embeds look terrible, but I actually have no idea how to do it better
        // tbh I dont even care to make them more aesthetic for now lol
        const defEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .setFooter('Type r!help <command name> for more info on the command')
            .addFields(
                { name: ':man_factory_worker: Moderation', value: '`mute`   `unmute`   `prune`', inline: true },
                { name: ':musical_note: Music', value: '`play`   `stop`', inline: true },
                { name: ':briefcase: Useful', value: '`lolmmr`   `pfp`   `ping`   `pick`', inline: true },
                { name: ':flushed: Random', value: '`ateista`   `jp`   `rafonix`   `spam`   `image`   `summon`', inline: true },
            )
        //.setImage('https://media.discordapp.net/attachments/697391573792587883/801879393814708264/help.png')

        const summEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':flushed: Random', value: 'https://media.discordapp.net/attachments/697391573792587876/805205076364230656/790971696890904618.png', inline: true }
            )

        const ateEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':flushed: Random', value: '`ateista` sends a random image of an atheist', inline: true }
            )

        const imgEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':flushed: Random', value: '`image` give it arguments and it will send you an image', inline: true }
            )

        const jpEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':flushed: Random', value: '`jp` I represent Krakow', inline: true }
            )

        const lolmmrEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':briefcase: Useful', value: '`lolmmr` give it a name of a summoner (from EUNE) and it will give you their MMR', inline: true }
            )

        const muteEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':man_factory_worker: Moderation', value: '`mute` Mutes a user for a set number of time', inline: true }
            )

        const pfpEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':briefcase: Useful', value: "`pfp` Sends you a user's profile picture", inline: true }
            )

        const pickEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':briefcase: Useful', value: '`pick` Picks a random number between the numbers you gave it. Do r!pick x y', inline: true }
            )

        const pingEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':briefcase: Useful', value: '`ping` tells you your ping (its bugged rn lol)', inline: true }
            )

        const playEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':musical_note: Music', value: '`play` Plays audio. Give it a link or just a name', inline: true }
            )

        const pruneEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':man_factory_worker: Moderation', value: '`prune` Deletes a number of messages', inline: true }
            )

        const rafonEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':flushed: Random', value: '`rafonix` :)', inline: true }
            )

        const spamEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':flushed: Random', value: '`spam` spams a number of messages', inline: true }
            )

        const stopEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':musical_note: Music', value: '`stop` Stops the bot', inline: true }
            )

        const unmuteEmbed = new MessageEmbed()
            .setColor('#ffb980')
            .setAuthor('Help!', process.env.PFP)
            .setThumbnail(thumbGif)
            .addFields(
                { name: ':man_factory_worker: Moderation', value: '`unmute` Unmutes a muted user', inline: true }
            )


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
        }
    }
}

