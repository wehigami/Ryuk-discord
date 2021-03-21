const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { MessageEmbed, Guild} = require('discord.js');

module.exports = {
    name: 'play',
    description: "plays a song",
    async execute(client, message, args) {
        const voiceChannel = message.member.voice.channel;

        const vcErrEmb = new MessageEmbed()
            .setColor('#ff6161')
            .setDescription(':dromedary_camel: You need to be in a voice channel!')

        const leaveEmb = new MessageEmbed()
            .setColor('#000000')
            .setDescription(':apple: Leaving channel')
        
        const coneErrEmb = new MessageEmbed()
            .setColor('#ff6161')
            .setDescription(':dromedary_camel: Permission Error (CONNECT)')

        const spkErrEmb = new MessageEmbed()
            .setColor('#ff6161')
            .setDescription(':dromedary_camel: Permission Error (SPEAK)')
        
        const playErrEmb = new MessageEmbed()
            .setColor('#ff6161')
            .setDescription(":dromedary_camel: There's nothing for me to play!")

        const vidErrEmb = new MessageEmbed()
            .setColor('#ff6161')
            .setDescription(":dromedary_camel: Couldn't find the video")

        const nowPlayingLinkEmb = new MessageEmbed()
            .setColor('#000000')
            .setTitle(':musical_note: Now Playing :musical_note:')
            .addFields({
                name: 'Your Song', value: args
            });



        if (!voiceChannel) return message.channel.send(vcErrEmb);
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send(coneErrEmb);
        if (!permissions.has('SPEAK')) return message.channel.send(spkErrEmb);
        if (!args.length) return message.channel.send(playErrEmb);

        const validURL = (str) => {
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/\/([\w#!:.?+=&%!\-\/]))?/;
            if (!regex.test(str)) {
                return false;
            } else {
                return true;
            }
        }

        if (validURL(args[0])) {
            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], { filter: "audioonly" });

            connection.play(stream, { seek: 0, volume: 1 })
                .on('finish', () => {
                    voiceChannel.leave();
                });
            await message.reply(nowPlayingLinkEmb);

            return;
        }

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        var video = await videoFinder(args.join(''));
        if (video) {
            const stream = ytdl(video.url, { filter: 'audioonly' });
            connection.play(stream, { seek: 0, volume: 1 })
                .on('finish', () => {
                    voiceChannel.leave();
                });

            await message.reply(`Now playing ${video.url}`);
        } else {
            message.channel.send(vidErrEmb);
        }

    }
}