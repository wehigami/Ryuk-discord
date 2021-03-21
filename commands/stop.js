
module.exports = {
    name: 'stop',
    description: "stop the bot",
    async execute(client, message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("Musisz wpaść do kanału żeby użyć tej komendy.");
                await voiceChannel.leave();
                await message.channel.send(`Spierdalam.`);
            
    }
}
    
