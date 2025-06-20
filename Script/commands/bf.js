const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const jimp = require('jimp');

module.exports.config = {
  name: "bf",
  version: "1.0",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴",
  description: "Get Pair From Mention",
  commandCategory: "fun",
  usages: "bf @mention",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "path": "",
    "jimp": ""
  }
};

module.exports.onLoad = async () => {
  const templatePath = path.join(__dirname, 'cache/canvas');
  const templateImg = path.resolve(__dirname, 'cache/canvas/arr2.png');
  const imageURL = 'https://i.imgur.com/iaOiAXe.jpg';

  if (!fs.existsSync(templatePath)) {
    fs.mkdirSync(templatePath, { recursive: true });
  }

  if (!fs.existsSync(templateImg)) {
    const response = await axios.get(imageURL, { responseType: 'arraybuffer' });
    fs.writeFileSync(templateImg, Buffer.from(response.data, 'utf-8'));
  }
};

async function makeImage({ one, two }) {
  const canvasPath = path.join(__dirname, 'cache/canvas');
  const bgPath = path.join(canvasPath, 'arr2.png');

  const pathImg = path.join(canvasPath, `avt_${one}_${two}.png`);
  const avatarOnePath = path.join(canvasPath, `avt_${one}.png`);
  const avatarTwoPath = path.join(canvasPath, `avt_${two}.png`);

  const bg = await jimp.read(bgPath);

  const avatarOneData = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568205592211|379%7Cc1e6a1bde566220fa708a15696fb991c`, {
    responseType: 'arraybuffer'
  })).data;
  fs.writeFileSync(avatarOnePath, Buffer.from(avatarOneData, 'utf-8'));

  const avatarTwoData = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568205592211|379%7Cc1e6a1bde566220fa708a15696fb991c`, {
    responseType: 'arraybuffer'
  })).data;
  fs.writeFileSync(avatarTwoPath, Buffer.from(avatarTwoData, 'utf-8'));

  const avatarOne = await circle(avatarOnePath);
  const avatarTwo = await circle(avatarTwoPath);

  bg.composite(avatarOne.resize(128, 128), 90, 120);
  bg.composite(avatarTwo.resize(128, 128), 390, 120);

  const finalImage = await bg.getBufferAsync('image/png');

  fs.writeFileSync(pathImg, finalImage);
  fs.unlinkSync(avatarOnePath);
  fs.unlinkSync(avatarTwoPath);

  return pathImg;
}

async function circle(imagePath) {
  const img = await jimp.read(imagePath);
  img.circle();
  return img.getBufferAsync('image/png');
}

module.exports.run = async function ({ event, api, args }) {
  const { threadID, messageID, senderID, mentions } = event;
  const mentionIDs = Object.keys(mentions);

  if (mentionIDs.length === 0) {
    return api.sendMessage("Please mention 1 person.", threadID, messageID);
  }

  const one = senderID;
  const two = mentionIDs[0];

  makeImage({ one, two }).then(pathImg => {
    api.sendMessage({
      body:
        "✿┈┈┈┈༺♡༻┈┈┈┈✿\n
✿✦ 𝗡𝗔𝗛𝗜𝗗𝗔 ✦✿  | ʟʀ ʟɪᴍᴏɴ\n
✿┈┈┈┈༺♡༻┈┈┈┈✿",
      attachment: fs.createReadStream(pathImg)
    }, threadID, () => fs.unlinkSync(pathImg), messageID);
  });
};
