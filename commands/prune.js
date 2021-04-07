module.exports = {
    name: 'prune',
    aliases: [],
    description: "deletes a number of messages",
    async execute(message,args, cmd, client, Discord) {
        if (message.member.roles.cache.has('697243393658585200')) {
            if (!args[0]) return message.reply("wpisz ile wiadomości ma zostać usuniętych");
            if (isNaN(args[0])) return message.reply("Wpisz liczbę.");

            if (args[0] > 100) return message.reply("nie możesz usunąć więcej niż 100 wiadomości na raz");
            if (args[0] < 1) return message.reply("Musisz usunąć przynajmniej 1 wiadomość.");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            });
            message.reply(' usunięto wiadomości')
                .then(msg => {
                    msg.delete({ timeout: 1000 })
                })
                .catch(console.error);

        } else {
            message.channel.send("Error permisji");
        }
    }
}

