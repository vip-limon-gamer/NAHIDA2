const axios = require('axios');

module.exports.config = {
  name: "gpt",
  version: "1.0",
  hasPermission: 0,
  credits: "MD Lijanur Rahman Limon",
  usePrefix: false,
  description: "Chat with Nahida",
  commandCategory: "General",
  cooldowns: 2,
};

const API_SERVER_URL = 'https://sensui-useless-apis.codersensui.repl.co/api/tools/ai';
const CREATOR_LINK = 'https://vip_limon_gamer.bio.link';

module.exports.run = async ({ api, event, args }) => {
  try {
    const question = args.join(' ');
    const threadID = event.threadID;

    if (!question) {
      return api.sendMessage("❌ প্রশ্ন লিখুন Nahida এর সাথে কথা বলতে।\n\nউদাহরণ: gpt সূর্য কেন গরম?", threadID);
    }

    // Check if user is asking about creator
    const keywords = ["creator", "owner", "maker", "who made you", "who created you"];
    const lower = question.toLowerCase();
    const askedAboutCreator = keywords.some(keyword => lower.includes(keyword));

    if (askedAboutCreator) {
      return api.sendMessage(
        `Nahida: আমি তৈরি হয়েছি MD Lijanur Rahman Limon দ্বারা।\nতাঁর প্রোফাইল: ${CREATOR_LINK}`,
        threadID
      );
    }

    const response = await axios.get(`${API_SERVER_URL}?question=${encodeURIComponent(question)}`);

    if (response.data.error) {
      return api.sendMessage("Nahida: ⚠️ কিছু একটা ভুল হয়েছে। আবার চেষ্টা করুন।", threadID);
    }

    const answer = response.data.answer;

    if (answer) {
      api.sendMessage(`Nahida: ${answer}`, threadID);
    } else {
      api.sendMessage("Nahida: ⚠️ কোনো উত্তর পাওয়া যায়নি।", threadID);
    }
  } catch (error) {
    console.error('Nahida Error:', error);
    api.sendMessage("Nahida: ⚠️ সার্ভার থেকে উত্তর আনতে সমস্যা হচ্ছে।", event.threadID);
  }
};
