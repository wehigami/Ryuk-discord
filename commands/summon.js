module.exports = {
    name: 'summon',
    aliases: [],
    description: "sends a bunch of images",
    execute(message,args, cmd, client, Discord){
        message.channel.send("Slender został przyzwany.", {files: ["https://media.discordapp.net/attachments/697391573792587876/805205076364230656/790971696890904618.png"]})
    }
}
    
