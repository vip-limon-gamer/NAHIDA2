const fs = require('fs-extra');
const axios = require('axios');
const request = require('request');
const moment = require('moment-timezone'); 

module.exports.config = {
  name: "info2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 𝐔𝐥𝐥𝐚𝐬𝐡",
  description: "Bot info.",
  commandCategory: "information",
  cooldowns: 1,
  dependencies: {
    request: "",
    "fs-extra": "",
    axios: ""
  }
}; 

module.exports.run = async function ({ api, event }) {
  const timeInSec = process.uptime();
  const hours = Math.floor(timeInSec / 3600);
  const minutes = Math.floor((timeInSec % 3600) / 60);
  const seconds = Math.floor(timeInSec % 60); 

  const currentTime = moment.tz("Asia/Manila").format("『D/MM/YYYY』 || 『hh:mm:ss A』"); 

  const msg = `
╔════❁🌺❁═════╗
  ✨ 𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨 ✨
╚════❁🌺❁═════╝ 

• 𝐍𝐚𝐦𝐞 : ✿✦ 𝗡𝗔𝗛𝗜𝗗𝗔 ✦✿  | ʟʀ ʟɪᴍᴏɴ
• 𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : 𝐋𝐑 𝐋𝐈𝐌𝐎𝐍
• 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/vip.limon.gamer 
• 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 : https://youtube.com/@vip_limon_gamer
• 𝐆𝐢𝐭𝐇𝐮𝐛 : https://github.com/vip-limon-gamer
• 𝐖𝐞𝐛𝐬𝐢𝐭𝐞 : https://bio.link/vip_limon_gamer
• 𝐆𝐨𝐨𝐠𝐥𝐞 𝐌𝐞 : https://tinyurl.com/google-limon 

• 𝐏𝐫𝐞𝐟𝐢𝐱 : ${global.config.PREFIX}
• 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.config.BOTNAME} 

•✨ 𝐔𝐩𝐭𝐢𝐦𝐞 ✨•
『${hours}:${minutes}:${seconds}』⏱️ 

🌐 𝐓𝐨𝐝𝐚𝐲 𝐈𝐬 : ${currentTime}
`; 

  const imgPaths = [
    "https://i.imgur.com/m7n3jAr.gif",
    "https://i.imgur.com/yLk9WYC.gif",
    "https://i.imgur.com/m7n3jAr.gif",
    "https://i.imgur.com/yLk9WYC.gif"
  ]; 

  const imgURL = encodeURI(imgPaths[Math.floor(Math.random() * imgPaths.length)]);
  const imgPath = __dirname + "/cache/info2.jpg"; 

  request(imgURL).pipe(fs.createWriteStream(imgPath)).on("close", () => {
    api.sendMessage({
      body: msg,
      attachment: fs.createReadStream(imgPath)
    }, event.threadID, () => fs.unlinkSync(imgPath));
  });
};
