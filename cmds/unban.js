const discord = require("discord.js")
const fs = require("fs")
exports.run = async(bot, message, args) => {
    let gid = message.mentions.guilds.first()
    let nogid = discord.RichEmbed()
    nogid.setTitle("Kein Server Error")
    nogid.setColor("RED")
    nogid.setDescription(":x: **Du hast keine ServerID angegeben** :x:")
    let pascalierr = new discord.RichEmbed()
    pascalierr.setTitle("Error")
    pascalierr.setColor("RED")
    pascalierr.setDescription(":x: **Da du nicht der Bot Owner bist, kannst du keine Server entbannen** :x:")
    if(!message.author.tag === "Pascali#8545") return message.reply(pascalierr)
    const banni = JSON.parse(fs.readFileSync("./channels.json", "utf-8"))
    banni[gid.id].ban = 0

    fs.writeFile("./channels.json", JSON.stringify(banni), err => {
        if (err) console.log(err);
      });
      let erfolgemb = new discord.RichEmbed()
      erfolgemb.setTitle("Erfolgreich entbannt!")
      erfolgemb.setDescription("Dieser Server wurde erfolgreich entbannt")
      erfolgemb.setColor("GREEN")
}