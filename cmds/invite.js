const discord = require("discord.js")
exports.run = async(bot, message, args) => {
    const invembed = new discord.RichEmbed()
    invembed.setTitle("Invite Links")
    invembed.setColor('GREEN')
    invembed.setDescription(`\`Bot Invite:\` [Klick mich!](https://discord.com/oauth2/authorize?client_id=${bot.user.id}&permissions=27665&scope=bot) \r\n\r\n\`Support Server:\` [Klick mich!](https://discord.gg/UTTezAV)`)
    message.channel.send(invembed)
}