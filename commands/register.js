const { ID_CHANNEL, TAG, ID_ROLE , ID_ROLE_REMOVE } = require('../config.json');

module.exports = {
    name: 'register',
    description: 'Ini Coding register',
    async execute(message, args, client) {
        if(message.channel.type == "dm") return
        if (message.channel.id != `${ID_CHANNEL}`) return
        if(!args.length) return

        const nickname = args.join(" ");
        const private = client.channels.cache.get(`${ID_CHANNEL}`);

        try {
            message.member.roles.add(`${ID_ROLE}`);
            message.member.setNickname(`${nickname}`);
        } catch(error) {
            console.error(error); 
        }
    },
};
