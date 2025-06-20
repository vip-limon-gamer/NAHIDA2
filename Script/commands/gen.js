const axios = require("axios");
const fs = require("fs-extra");
const path = require("path"); 

module.exports.config = {
name: "gen",
version: "2.0",
hasPermssion: 0,
credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁 | ᵁᴸᴸ⁴ˢᴴ",
description: "Flux Image Generator",
commandCategory: "𝗜𝗠𝗔𝗚𝗘 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗢𝗥",
usage: "{pn} [prompt] --ratio 1024x1024\n{pn} [prompt]",
countDown: 15,
}; 

module.exports.run = async ({ event, args, api }) => {
try {
const fullPrompt = args.join(" ");
const [prompt, ratio] = fullPrompt.includes("--ratio")
? fullPrompt.split("--ratio").map(s => s.trim())
: [fullPrompt, ""]; 

if (!prompt) {
return api.sendMessage("❌ Please provide a prompt to generate image.", event.threadID, event.messageID);
} 

const waitMessage = await api.sendMessage("⏳ Getting image from Limon's server, please wait...", event.threadID);
api.setMessageReaction("⌛", event.messageID, () => {}, true); 

const apiUrl = `https://dall-e-tau-steel.vercel.app/kshitiz?prompt=${encodeURIComponent(prompt)}`;
const response = await axios.get(apiUrl);
const imageUrl = response.data.response; 

if (!imageUrl) {
return api.sendMessage("❌ Failed to get image from API.", event.threadID, event.messageID);
} 

const imgResponse = await axios.get(imageUrl, { responseType: "arraybuffer" });
const imgPath = path.join(__dirname, "cache", `flux_${Date.now()}.jpg`);
await fs.outputFile(imgPath, imgResponse.data); 

await api.sendMessage({
body: `✅ Here's your image\n✿✦ 𝗡𝗔𝗛𝗜𝗗𝗔 ✦✿  | ʟʀ ʟɪᴍᴏɴ${ratio ? `\nRequested ratio: ${ratio}` : ""}`,
attachment: fs.createReadStream(imgPath)
}, event.threadID, () => fs.unlinkSync(imgPath), event.messageID); 

api.setMessageReaction("✅", event.messageID, () => {}, true);
api.unsendMessage(waitMessage.messageID); 

} catch (e) {
console.error(e);
return api.sendMessage("❌ Error: " + e.message, event.threadID, event.messageID);
}
};
