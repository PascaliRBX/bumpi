const discord = require("discord.js")
const fs = require("fs")
exports.run = async(bot, message, args) => {
if (message.channel.type === "dm") return;
const sett = JSON.parse(fs.readFileSync("./channels.json", "utf8"));
if (!sett[message.guild.id]) {
  const noregisemb = new discord.RichEmbed();
  noregisemb.setTitle("Registrierungs Error")
  noregisemb.setColor("RED")
  noregisemb.setDescription(":x: **Dieser Server ist noch nicht registriert!** :x:")
return message.reply(noregisemb)
}

  let invite = await message.channel.createInvite({unique: false})
  const embed = new discord.RichEmbed();
  embed.setAuthor("Bump Bot")
  embed.setTitle(message.guild)
  embed.setThumbnail(message.guild.iconURL)
  embed.setColor(sett[message.guild.id].color)
  embed.setDescription(sett[message.guild.id].beschreibung)
  embed.addField("Server:" , `${message.guild} [Invite](${invite})`)
  embed.setTimestamp()
  embed.setFooter(`Gebumpt von: ` + message.author.tag)
  
  message.channel.send(embed)

}