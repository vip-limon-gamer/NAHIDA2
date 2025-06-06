const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID); 

  var tl = ["বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?" , "Bot বলে অসম্মান করছি,😰😿" ,   "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒", "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈" , "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻","-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈","-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧","•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺","- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)] 

    if ((event.body.toLowerCase() == "MISS YOU") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("≧◉◡◉≦", threadID);
   }; 

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই😁", threadID);
   };
   
    if ((event.body.toLowerCase() == "help") || (event.body.toLowerCase() == "help")) {
     return api.sendMessage("type /help", threadID);
   };
  
   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("simsimi কমান্ড  নাই টাইপ করুন baby", threadID);
   };
  
   if ((event.body.toLowerCase() == "ওই কিরে") || (event.body.toLowerCase() == "oi keray") ||(event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("মধু মধু রসমালাই 🍆⛏️🐸🤣", threadID);
   }; 

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   }; 

   if ((event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("কিরে হালা লুচ্চা, এগুলো কি ইমুজি দেস ।", threadID);
   }; 

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   }; 

   if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ তোমার বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
   }; 

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞ 𝗠𝗗 𝗟𝗶𝗷𝗮𝗻𝘂𝗿 𝗥𝗮𝗵𝗺𝗮𝗻 𝗟𝗶𝗺𝗼𝗻  ☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝙻𝚒𝚖𝚘𝚗.\n𝐇𝐢𝐬 𝐛𝐢𝐨𝐥𝐢𝐧𝐤 :- https://vip_limon_gamer.bio.link", threadID);
   }; 

   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "admin ke ")) {
     return api.sendMessage("My Creator: MD Lijanur Rahman Limon ❤️ হাই আমি নাহিদা আমাকে লিমন বানিয়েছেন আপনাদের কে হাসানোর জন্য আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   }; 

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
     return api.sendMessage("He is Limon❤️ তার সম্পর্কে আরও জানতে ${global.config.PREFIX}admin টাইপ করুন 🥰", threadID);
   }; 

   if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "Ai")) {
     return api.sendMessage("If you want to use the AI command, type /ai ", threadID);
   }; 

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ কর পাগল ছাগল", threadID);
   }; 

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   }; 

   if ((event.body.toLowerCase() == "sala ami tor boss") || (event.body.toLowerCase() == "sala ami limon") || (event.body.toLowerCase() == "cup sala ami limon") || (event.body.toLowerCase() == "madari")) {
     return api.sendMessage("সরি লিমন মাফ করে দেও আর এমন ভুল হবে না🥺🙏", threadID);
   }; 

   if ((event.body.toLowerCase() == "I love limon") || (event.body.toLowerCase() == "I love you limon")) {
     return api.sendMessage("@MD Lijanur Rahman Limon I love you too 🥰", threadID);
   }; 

  if ((event.body.toLowerCase() == "Xuner") || (event.body.toLowerCase() == "Xiyao Xiyan")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস লিমন এর বউ এর নাম..!😠🥰⛏️", threadID);
   };
  
  if ((event.body.toLowerCase() == "Xiou") || (event.body.toLowerCase() == "Medusa")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার জান লিমনের বউ এর নাম..!😠🥰⛏️", threadID);
   }; 

  if ((event.body.toLowerCase() == "Nahida") || (event.body.toLowerCase() == "Cair'r")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার জান লিমনের বউ এর নাম..!😠🥰⛏️", threadID);
   }; 

  if ((event.body.toLowerCase() == "Shiyam") || (event.body.toLowerCase() == "সিয়াম")) {
     return api.sendMessage("🥰-সিয়াম-🌺 আমার বস লিমন'র বন্ধু লাগে লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
   }; 

if ((event.body.toLowerCase() == "Akram") || (event.body.toLowerCase() == "আকরাম")) {
     return api.sendMessage("🥰-আকরাম-🌺 আমার বস লিমন'র বন্ধু লাগে লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
   }; 

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   }; 

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   }; 

   if ((event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   }; 

   if ((event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "Hum")) {
     return api.sendMessage("️hmm", threadID);
   }; 

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️MY NAME IS °_> ✿✦ 𝗡𝗔𝗛𝗜𝗗𝗔 ✦✿ ", threadID);
   }; 

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "Bot er bacca")) {
     return api.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
   }; 

   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss daw")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   }; 

   if ((event.body.toLowerCase() == "moriom") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   }; 

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nanire xudi")) {
     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
   }; 

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("️😁", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি , কার দিক নজর দিস 🤨", threadID);
   }; 

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️পৃথিবীতে টাকাই সব 🫶/nটাকা থাকলে সবাই থাকবে সবাই 🙃", threadID);
   }; 

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("লিমন তুমি কোথায় দেখে যাও , এরা গ্রুপটাকে রিলেশন এর জায়গা বানিয়ে ফেলেছে 🙂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না । হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   }; 

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে  ইনবক্সে চলে যা পাগল ছাগল🌚🐸🌶️🍆", threadID);
   }; 

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("Alhamdulilallah valo asi 🤎☺️, tumi kmon aso ?", threadID);
   }; 

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
   }; 

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("I am married with Limon and I love him ❤💝", threadID);
   }; 

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   }; 

   if ((event.body.toLowerCase() == "Limon") || (event.body.toLowerCase() == "limon") || (event.body.toLowerCase() == "লিমন")) {
     return api.sendMessage(" Type ${global.config.PREFIX}admin to know about him <😘", threadID);
   }; 

if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   }; 

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("Ami sudu Limon k valo bashi 😘", threadID);
   }; 

   if ((event.body.toLowerCase() == "ami limon") || (event.body.toLowerCase() == "আমি লিমন")) {
     return api.sendMessage("হ্যা লিমন কেমন আছো..?☺️", threadID);
   };
  mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }; 

} 

module.exports.run = function({ api, event, client, __GLOBAL }) { }
