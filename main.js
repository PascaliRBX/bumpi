const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const bumpchannel = require("./channels.json")
const config = require("./config.json");
const client = bot;

const prefix = config.prefix;
bot.on("message", message => {
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) return;

  // Command Handler
  try {
    let commandFile = require(`./cmds/${cmd}.js`);

    commandFile.run(bot, message, args);
  } catch (e) {
    console.log(e.stack);
  }
});
bot.on("ready", () => {
  console.log("Bot ist online!")
  bot.user.setStatus("dnd");
  bot.user.setPresence({
    game: {
      name: `b! || 『Panther Cloud』`,
      type: "PLAYING",
    }
  });
});

bot.on("message", function(message){
if(message.author.bot) return;
const bumpchannel = require("./channels.json")

if(!bumpchannel[message.guild.id]) {
    bumpchannel[message.guild.id] = {
      channelid: "",
      beschreibung: "",
      color: "#00FFFF",
      bumps: 0,
      vip: 0,
      ban: 0
    }
    fs.writeFile("./channels.json",JSON.stringify(bumpchannel),function(error){
        if(error) console.log(error)
    })
}
})

bot.login("NzkwNDg2OTE3ODA4MjU5MTQy.X-BUTw.uyVBt-VahKNYkh6vhHQ_k6sNHeU")
