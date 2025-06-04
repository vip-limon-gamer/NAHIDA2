const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone"); 

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
}; 

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A"); 

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞  : 𝐌𝐃 𝐋𝐢𝐣𝐚𝐧𝐮𝐫 𝐑𝐚𝐡𝐦𝐚𝐧 𝐋𝐢𝐦𝐨𝐧
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : ←_←
┃ 🎂 𝐀𝐠𝐞       : 14✦
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐨𝐟 𝐈𝐏𝐒
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝐌𝐢𝐭𝐡𝐚𝐩𝐮𝐤𝐮𝐫 , 𝐑𝐚𝐧𝐠𝐩𝐮𝐫
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🌐 𝐅𝐎𝐋𝐋𝐎𝐖 𝐌𝐄 : https://vip_limon_gamer.bio.link
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://graph.facebook.com/100070941133287/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
