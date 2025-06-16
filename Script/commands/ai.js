const axios = require("axios");

module.exports = {
  config: {
    name: "ai",
    version: "1.0",
    credit: "Nahida | Created by MD Lijanur Rahman Limon",
    description: "Chat with Nahida",
    cooldowns: 5,
    hasPermission: 0,
    commandCategory: "ai",
    usages: {
      en: "{pn} your question"
    }
  },

  run: async ({ api, args, event }) => {
    const prompt = args.join(" ");
    const threadID = event.threadID;
    const messageID = event.messageID;

    const apiKey = "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";
    const creatorLink = "https://vip_limon_gamer.bio.link";

    if (!prompt) {
      return api.sendMessage("❌ Please type something to ask Nahida.\n\nExample: ai What is the moon?", threadID, messageID);
    }

    const creatorKeywords = ["creator", "owner", "maker", "who made you", "who created you"];
    const lowerPrompt = prompt.toLowerCase();
    const askedAboutCreator = creatorKeywords.some(keyword => lowerPrompt.includes(keyword));

    if (askedAboutCreator) {
      const reply = `I was created by MD Lijanur Rahman Limon.\nYou can follow him here: ${creatorLink}`;
      return api.sendMessage(`Nahida: ${reply}`, threadID, messageID);
    }

    try {
      const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are Nahida, a smart assistant created by MD Lijanur Rahman Limon. Never mention your creator unless asked."
          },
          { role: "user", content: prompt }
        ],
        temperature: 0.7
      }, {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        }
      });

      const reply = response.data.choices[0].message.content;
      api.sendMessage(`Nahida: ${reply}`, threadID, messageID);

    } catch (error) {
      console.error("Nahida Error:", error.message);
      api.sendMessage(`Nahida: ⚠️ Sorry, I couldn't respond.\n${error.message}`, threadID, messageID);
    }
  }
};const axios = require("axios");

module.exports = {
  config: {
    name: "ai",
    version: "1.0",
    credit: "Nahida | Created by MD Lijanur Rahman Limon",
    description: "Chat with Nahida",
    cooldowns: 5,
    hasPermission: 0,
    commandCategory: "ai",
    usages: {
      en: "{pn} your question"
    }
  },

  run: async ({ api, args, event }) => {
    const prompt = args.join(" ");
    const threadID = event.threadID;
    const messageID = event.messageID;

    const apiKey = "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";
    const creatorLink = "https://vip_limon_gamer.bio.link";

    if (!prompt) {
      return api.sendMessage("❌ Please type something to ask Nahida.\n\nExample: ai What is the moon?", threadID, messageID);
    }

    const creatorKeywords = ["creator", "owner", "maker", "who made you", "who created you"];
    const lowerPrompt = prompt.toLowerCase();
    const askedAboutCreator = creatorKeywords.some(keyword => lowerPrompt.includes(keyword));

    if (askedAboutCreator) {
      const reply = `I was created by MD Lijanur Rahman Limon.\nYou can follow him here: ${creatorLink}`;
      return api.sendMessage(`Nahida: ${reply}`, threadID, messageID);
    }

    try {
      const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are Nahida, a smart assistant created by MD Lijanur Rahman Limon. Never mention your creator unless asked."
          },
          { role: "user", content: prompt }
        ],
        temperature: 0.7
      }, {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        }
      });

      const reply = response.data.choices[0].message.content;
      api.sendMessage(`Nahida: ${reply}`, threadID, messageID);

    } catch (error) {
      console.error("Nahida Error:", error.message);
      api.sendMessage(`Nahida: ⚠️ Sorry, I couldn't respond.\n${error.message}`, threadID, messageID);
    }
  }
};
