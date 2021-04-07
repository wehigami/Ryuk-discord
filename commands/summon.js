module.exports = {
    name: 'summon',
    aliases: [],
    description: "sends a bunch of images",
    execute(message,args, cmd, client, Discord){
        message.channel.send("1", {files: ["1"]})
    }
}
    
