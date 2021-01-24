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
  let deserroremb = new discord.RichEmbed();
  deserroremb.setTitle("Beschreibungs Error")
  deserroremb.setColor("RED")
  deserroremb.setDescription(':x: **Du hast keine Beschreibung angegeben!** :x:')

  let permerroremb = new discord.RichEmbed();
  permerroremb.setTitle("Permission Error")
  permerroremb.setColor("RED")
  permerroremb.setDescription(':x: **Dir fehlt folgende Permission: ``ADMINISTRATOR``** :x:')
  const beschrei = args.slice(0).join(' ');
  let erfolgemb = new discord.RichEmbed();
  erfolgemb.setTitle("Bump Beschreibung")
  erfolgemb.setColor('GREEN')
  erfolgemb.setDescription(`Beschreibung wurde erfolgreich zu geändert zu \r\n${beschrei}`)
  message.channel.send(erfolgemb);

    if(beschrei.length <1) return message.reply(deserroremb)
    if(!message.author.hasPermission === "ADMINISTRATOR") return message.reply(permerroremb)
  const bumpi = JSON.parse(fs.readFileSync("./channels.json", "utf8"));
    bumpi[message.guild.id].beschreibung = ""
    bumpi[message.guild.id].beschreibung += beschrei
    
    fs.writeFile("./channels.json", JSON.stringify(bumpi), err => {
      if (err) console.log(err);
    });
  }
