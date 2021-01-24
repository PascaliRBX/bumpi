const discord = require('discord.js')
const config = require("../config.json")
exports.run = async(bot, message, args) => {
        let prefix = config.prefix;
        let erfolgemb = new discord.RichEmbed() 
        erfolgemb.setTitle("Help Command")
        erfolgemb.setDescription("Der Prefix ist: b!")
        erfolgemb.addField(`${prefix}beschreibung`, "Setzt die Beschreibung für den Bump Embed Commnd")
        erfolgemb.addField(`${prefix}bump:`, "Bumpt deinen Server")
        erfolgemb.addField(`${prefix}channel:`, "Setzt den Channel wo du Bumpen kannst")
        erfolgemb.addField(`${prefix}invite:`, "Damit kannst du dem Support Server beitreten(Was mich sehr freuen würde :grin:) oder den Bot einladen")
        erfolgemb.addField(`${prefix}preview:`, "Zeigt eine Vorschau des Bump Commands")
        erfolgemb.setThumbnail(message.author.avatarURL)
        erfolgemb.setColor("BLUE")

    message.channel.send(erfolgemb);
}