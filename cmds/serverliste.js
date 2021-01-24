const discord = require("discord.js")
exports.run = async (bot , message , args) => {
      let compare = (a, b) => {
        if (a.position > b.position) return -1;
        if (a.position < b.position) return 1;
        return 0;
      };
      let embed = new discord.RichEmbed()
        .setTitle("Serverliste")
        .setDescription(
          bot.guilds
            .sort(compare)
            .map(server => `\`\`${server.name}\`\`\n`)
            .join("\n")
            .substr(0, 2000),
          `Alle Server: ${bot.guilds.size}`
        );
      return message.channel.send(embed);
    }