module.exports = {
    name: 'ateista',
    aliases: [],
    description: "sends a bunch of images",
    execute(message,args, cmd, client, Discord){
        const msg1 = "chuj ateista w swoim naturalnym środowisku https://media.discordapp.net/attachments/538866480012460032/645709382981517325/unknown.png"
        const msg2 = "chuj komar https://media.discordapp.net/attachments/697243394098987089/727256825744982026/KOMAR_30_METOW_I_CHUJ.jpg"
        const msg3 = "młody ateista (ale świeżo wygląda :flushed:) https://media.discordapp.net/attachments/538866480012460032/567734640274571265/45399460_537173303415285_3287254151725056000_n.jpg?width=392&height=523"
        const msg4 = "gruby chuj alkoholik https://media.discordapp.net/attachments/538866480012460032/567735531933270019/spasibajk.png"
        const msg5 = "w dzień poczwarą, w nocy zaś poczwarą https://media.discordapp.net/attachments/590948934508216320/796104530562777088/135715091_823733828474687_7455291912831974915_n.png?width=522&height=522"
        const msg6 = "> wspieram strajk nauczycieli\nhttps://media.discordapp.net/attachments/697243394098987089/803657272693096458/2.png?width=434&height=519"
        const msg7 = "Ateista Szwab https://i.kym-cdn.com/photos/images/facebook/001/668/651/b31.jpg"
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
    
