module.exports = {
    name: 'ateista',
    description: "sends a random message",
    execute(client, message, args){
        const msg1 = 'some msg'
        const msg2 = 'some msg'
        const msg3 = 'some msg'
        const msg4 = 'some msg'
        const msg5 = 'some msg'
        const msg6 = 'some msg'
        const msg7 = 'some msg'
        let msgs = [msg1, msg2, msg3, msg4, msg5, msg6, msg7];
        let msg = msgs[Math.floor(Math.random() * msgs.length)];
        //get the role ID, that's what the numbers are
        if(!message.member.roles.cache.has('794226448692150382')){
            message.channel.send(msg);

        } else {
            message.channel.send('Ateiści nie mogą używać tej komendy')
        }
    }
}
    
