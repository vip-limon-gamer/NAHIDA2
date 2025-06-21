const axios = require('axios');

const apiURL = "https://smfahim.xyz/gedit";

module.exports.config = {
  name: "refine",
  version: "6.9",
  credits: "API Fahim mode by Ullash ッ",
  countDown: 5,
  hasPermssion: 1,
  category: "AI",
  commandCategory: "AI",
  description: "Edit images using Edit AI",
  guide: {
    en: "Reply to an image with {pn} [prompt]"
  }
};

async function handleEdit(api, event, args, commandName) {
  const url = event.messageReply?.attachments[0]?.url;
  const prompt = args.join(" ") || "What is this";

  if (!url) {
    return api.sendMessage("❌ Please reply to an image to edit it.\n✿✦ 𝗡𝗔𝗛𝗜𝗗𝗔 ✦✿  | ʟʀ ʟɪᴍᴏɴ", event.threadID, event.messageID);
  }

  try {
    const response = await axios.get(
      `${apiURL}?prompt=${encodeURIComponent(prompt)}&url=${encodeURIComponent(url)}`,
      {
        responseType: 'stream',
        validateStatus: () => true
      }
    );

    if (response.headers['content-type']?.startsWith('image/')) {
      return api.sendMessage(
        { attachment: response.data },
        event.threadID,
        event.messageID
      );
    }

    // If response is not image, try to parse as JSON
    let responseData = '';
    for await (const chunk of response.data) {
      responseData += chunk.toString();
    }

    const jsonData = JSON.parse(responseData);
    if (jsonData?.response) {
      return api.sendMessage(jsonData.response, event.threadID, event.messageID);
    }

    return api.sendMessage("No valid response from LIMON'S server 😑", event.threadID, event.messageID);

  } catch (error) {
    console.error("Edit command error:", error);
    return api.sendMessage("❌ Failed to process your request. Please try again later.\n✿✦ 𝗡𝗔𝗛𝗜𝗗𝗔 ✦✿  | ʟʀ ʟɪᴍᴏɴ", event.threadID, event.messageID);
  }
}

module.exports.run = async ({ api, event, args }) => {
  if (!event.messageReply) {
    return api.sendMessage("❌ Please reply to an image to edit it.\n✿✦ 𝗡𝗔𝗛𝗜𝗗𝗔 ✦✿  | ʟʀ ʟɪᴍᴏɴ", event.threadID, event.messageID);
  }
  await handleEdit(api, event, args, this.config.name);
};

module.exports.handleReply = async function ({ api, event, args }) {
  if (event.type === "message_reply") {
    await handleEdit(api, event, args, this.config.name);
  }
}
