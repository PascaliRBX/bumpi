const discord = require("discord.js")
const fs = require("fs")
exports.run = async(bot, message, args) => {



    if (message.channel.type === "dm") return;
    const sett = JSON.parse(fs.readFileSync("./channels.json", "utf8"));
    if (!sett[message.guild.id]) {
      sett[message.guild.id] = {
        channelid: "700263604129366086"
      };
    }
    sett[message.guild.id].bumps += 1
    fs.writeFile("./channels.json", JSON.stringify(sett), err => {
      if (err) console.log(err);
    });
    const globis = sett[message.guild.id].channelid;
    if (message.channel.id === globis) {
        message.delete(1000)
      let invite = await message.channel.createInvite({unique: false})
      const embed = new discord.RichEmbed();
      embed.setDescription(`\n **Beschreibung:**\n ${sett[message.guild.id].beschreibung} 
      \n **Server Invite: [klick](${invite})** 
      \n :globe_with_meridians: Region :globe_with_meridians: ${message.guild.region}
      \n :busts_in_silhouette: User :busts_in_silhouette: ${message.guild.memberCount}
      \n Soviele Bumps hat der Server schon: ${sett[message.guild.id].bumps}
      `)
      embed.setThumbnail(message.guild.iconURL)
      embed.setColor(sett[message.guild.id].color)
      embed.setAuthor(message.author.tag + " hat: " + message.guild + " gebumpt ")
      embed.setFooter(`Gebumpt am: ${(new Date()).toUTCString().substr(0, 16)}`)

      
      bot.guilds.forEach(g => {
        try {
          message.delete(3000);
          bot.channels.get(sett[g.id].channelid).send(embed);
        } catch (e) {
          return;
        }
      })
  }
  
}