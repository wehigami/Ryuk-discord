module.exports = {
    name: 'ateista',
    aliases: [],
    description: "sends a bunch of images",
    execute(message,args, cmd, client, Discord){
        const msg1 = "msg"
        const msg2 = "msg"
        const msg3 = "msg"
        const msg4 = "msg"
        const msg5 = "msg"
        const msg6 = "msg"
        const msg7 = "msg"
        let msgs = [msg1, msg2, msg3, msg4, msg5, msg6, msg7]
        let msg = msgs[Math.floor(Math.random() * msgs.length)]
        //get the role ID, that's what the numbers are
        if(!message.member.roles.cache.has('794226448692150382')){
            message.channel.send(msg);

        } else {
            message.channel.send('Ateiści nie mogą używać tej komendy')
        }
    }
}
    
