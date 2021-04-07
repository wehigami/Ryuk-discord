
module.exports = {
    name: 'pick',
    aliases: [],
    description: "picks a random number",
    execute(message,args, cmd, client, Discord) {

        if (!args[0]) return message.reply("Wpisz coś");
        if (isNaN(args[0])) return message.reply("Podaj liczbę chuju");

        let li = [];

        arg1 = args[0]
        arg2 = args[1]

        for (var i = arg1; i <= arg2; i++) {
            li.push(i);
        }

        let ranLi = li[Math.floor(Math.random() * li.length)];

        message.channel.send(String(ranLi));

    }
}

