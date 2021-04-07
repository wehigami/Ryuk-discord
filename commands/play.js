//code copied form CodeLyon with a few changes https://www.youtube.com/watch?v=riyHsgI2IDs
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { MessageEmbed } = require("discord.js");

const queue = new Map();

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop', 'leave'],
    cooldown: 0,
    description: 'Advanced music bot',
    async execute(message, args, cmd, client, Discord) {

        const vcErrEmb = new MessageEmbed()
            .setColor('#ff6161')
            .setDescription(':dromedary_camel: You need to be in a voice channel!')

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


        const voice_channel = message.member.voice.channel;


        if (!voice_channel) return message.channel.send(vcErrEmb);
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send(coneErrEmb);
        if (!permissions.has('SPEAK')) return message.channel.send(spkErrEmb);

        const server_queue = queue.get(message.guild.id);

        if (cmd === 'play') {
            if (!args.length) return message.channel.send(playErrEmb);
            let song = {};


            if (ytdl.validateURL(args[0])) {
                const song_info = await ytdl.getInfo(args[0]);
                song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url, thumb: song_info.videoDetails.thumbnails[3].url }
            } else {
                const video_finder = async (query) => {
                    const video_result = await ytSearch(query);
                    return (video_result.videos.length > 1) ? video_result.videos[0] : null;
                }

                const video = await video_finder(args.join(' '));
                if (video) {
                    song = { title: video.title, url: video.url }
                } else {
                    message.channel.send(vidErrEmb);
                }
            }

            if (!server_queue) {

                var nowPlayingLinkEmb = new MessageEmbed()
                    .setColor('#d92759')
                    .setAuthor('Dodano do kolejki')
                    .setTitle(song.title)
                    .setURL(song.url)
                    .setImage(song.thumb)
                    .setFooter('added with link');

                var queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }

                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);

                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch (err) {
                    queue.delete(message.guild.id);
                    message.channel.send('There was an error connecting!');
                    throw err;
                }
            } else {
                server_queue.songs.push(song);


                return message.channel.send(nowPlayingLinkEmb);
            }
        }

        else if (cmd === 'skip') skip_song(message, server_queue);
        else if (cmd === 'stop') skip_song(message, server_queue);
        else if (cmd === 'leave') await voice_channel.leave();
    }

}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id)

    /*let txtArgInfo = await ytdl.getInfo(song.url);
    let txtArgTitle = txtArgInfo.videoDetails.title;
    let txtArgThumb = txtArgInfo.videoDetails.thumbnails[3].url;

    const nowPlayingTxtEmb = new MessageEmbed()
                    .setColor('#d92759')
                    .setTitle(txtArgTitle)
                    .setAuthor('Dodano do kolejki')
                    .setURL(song.url)
                    .setImage(txtArgThumb)
                    .setFooter('added with txt');*/



    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
        .on('finish', () => {
            song_queue.songs.shift();
            video_player(guild, song_queue.songs[0]);
        });
    let txtArgInfo = await ytdl.getInfo(song.url);
    let txtArgTitle = txtArgInfo.videoDetails.title;
    let txtArgThumb = txtArgInfo.videoDetails.thumbnails[3].url;

    const nowPlayingTxtEmb = new MessageEmbed()
        .setColor('#d92759')
        .setTitle(txtArgTitle)
        .setAuthor('Dodano do kolejki')
        .setURL(song.url)
        .setImage(txtArgThumb)
        .setFooter('added with txt');

    await song_queue.text_channel.send(nowPlayingTxtEmb)
}

const skip_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
    if (!server_queue) {
        return message.channel.send(`There are no songs in queue 😔`);
    }
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
}