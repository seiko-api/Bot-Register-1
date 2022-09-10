const { ID_CHANNEL, TAG, ID_ROLE , ID_ROLE_REMOVE } = require('../config.json');

module.exports = {
    name: 'register',
    description: 'Ini Coding register',
    async execute(message, args, client) {
        if(message.channel.type == "dm") return message.channel.send("Kamu tidak bisa registrasi dari DM.");
        if (message.channel.id != `${ID_CHANNEL}`) return message.channel.send(`Kamu Menggunakan Command Ini Di Channel Yang Salah, Berikut Channel Yang Benar <#${ID_CHANNEL}>`);
        if(!args.length) return message.channel.send(`${message.author} **Denied**, __GAPUNYA NAMA APA GIMANA SI ANJING?__`);

        const nickname = args.join(" ");
        const private = client.channels.cache.get(`${ID_CHANNEL}`);

        try {
            message.member.roles.add(`${ID_ROLE}`);
            message.member.setNickname(`${TAG} ${nickname}`);
            private.send(`${message.author} **Accepted**, __Jangan Lupa Order Product Legends Store Ya!!!__`);
        } catch(error) {
            console.error(error); 
        }
    },
};
