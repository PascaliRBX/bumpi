const discord = require("discord.js")
const fs = require("fs")
const bumpchannel = require("../channels.json")
exports.run = async(bot, message, args) => {
  if(!message.author.hasPermission === "ADMINISTRATOR") {
    let permerroremb = discord.RichEmbed()
     permerroremb.setTitle("Permission Error")
     permerroremb.setColor("RED")
     permerroremb.setDescription(":x: **Du hast nicht die benötigten Berechtigungen!** :x:")
     return message.reply(permerroremb)
    }
    const channel = message.mentions.channels.first()

    let chanerroremb = new discord.RichEmbed();
    chanerroremb.setTitle("Channel Error")
    chanerroremb.setColor('RED')
    chanerroremb.setDescription(":x: **Du musst einen Channel angeben!** :x:")

    if(!channel) return message.reply(chanerroremb)
  const bumpi = JSON.parse(fs.readFileSync("./channels.json", "utf8"));
      bumpi[message.guild.id].channelid = ""
      bumpi[message.guild.id].channelid += channel.id
      
 
    fs.writeFile("./channels.json", JSON.stringify(bumpi), err => {
      if (err) console.log(err);
    });
    let erfolgemb = new discord.RichEmbed();
    erfolgemb.setTitle("Bump Channels")
    erfolgemb.setColor('GREEN')
    erfolgemb.setDescription(`${channel} wird jetzt als Bump Channel benutzt!\r\nBitte stelle Slow Mode auf \`2 Stunden\``)
    message.channel.send(erfolgemb);

}
