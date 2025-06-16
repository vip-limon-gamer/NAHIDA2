const axios = require("axios");

module.exports = {
  config: {
    name: "ai",
    version: "1.0",
    credit: "𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️—͟͟͞͞𝐂𝐘𝐁𝐄𝐑 ☢️",
    description: "AI reply using Gemini (text and image support)",
    cooldowns: 5,
    hasPermission: 0,
    commandCategory: "ai",
    usages: {
      en: "{pn} message | photo"
    }
  },

  run: async ({ api, args, event }) => {
    const prompt = args.join(" ");
    const threadID = event.threadID;
    const messageID = event.messageID;
    const messageReply = event.messageReply;
    const image = messageReply?.attachments?.[0]?.url;

    const GEMINI_API = "https://gemini-api.minipro-3r.repl.co/chat-with-gemini";
    const creatorLink = "https://vip_limon_gamer.bio.link";

    // If user asks about creator
    const creatorKeywords = ["creator", "owner", "maker", "who made you", "who created you"];
    const lowerPrompt = prompt.toLowerCase();
    const askedAboutCreator = creatorKeywords.some(word => lowerPrompt.includes(word));

    if (askedAboutCreator) {
      return api.sendMessage(
        `Nahida: I was created by MD Lijanur Rahman Limon.\nYou can follow him here: ${creatorLink}`,
        threadID,
        messageID
      );
    }

    // IMAGE + TEXT
    if (image && (messageReply.type === "photo" || messageReply.attachments[0].type === "photo")) {
      try {
        const response = await axios.post(GEMINI_API, {
          modelType: "text_and_image",
          prompt: prompt || "",
          imageParts: [image]
        });
        api.sendMessage(`Nahida: ${response.data.result}`, threadID, messageID);
      } catch (err) {
        console.error("Nahida (image) Error:", err.message);
        api.sendMessage(`Nahida: ⚠️ I couldn’t process the image.\n${err.message}`, threadID, messageID);
      }
    } else {
      // TEXT ONLY
      if (!prompt) {
        return api.sendMessage("Nahida: ❌ Please provide a question or reply to an image.", threadID, messageID);
      }

      try {
        const response = await axios.post(GEMINI_API, {
          modelType: "text_only",
          prompt: `Your name is Nahida. You are a helpful assistant created by MD Lijanur Rahman Limon. Only mention your creator if asked.\n\nUser: ${prompt}`
        });
        api.sendMessage(`Nahida: ${response.data.result}`, threadID, messageID);
      } catch (err) {
        console.error("Nahida (text) Error:", err.message);
        api.sendMessage(`Nahida: ⚠️ Sorry, I couldn’t respond.\n${err.message}`, threadID, messageID);
      }
    }
  }
};
