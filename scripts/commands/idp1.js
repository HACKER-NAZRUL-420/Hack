module.exports.config = {
  name: "idp1",
  version: "1.0.0", 
  permission: 0,
  credits: "nazrul", 
  prefix: true,
  description: "Pairing with gender selection",
  category: "LOVE", 
  usages: "Male Female", 
  cooldowns: 10
};
module.exports.run = async ({ api, event, handleReply, Users, Currencies }) => {
const { threadID, messageID, senderID } = event;
/*var data = await Currencies.getData(event.senderID);
var money = data.money
if( money = 0) api.sendMessage(`Bạn muốn ghép đôi à kiếm đủ 1000$ mị mới ghép cho nhé\nSố tiền bạn hiện có: ${money}$`,threadID,messageID)
  else {
  Currencies.setData(event.senderID, options = {money: money - 1000})*/
  return api.sendMessage(`╭•┄┅════❁🌺❁════┅┄•╮

 Prepare for a new message today, choose the world you want to see male or female

 ╰•┄┅════❁🌺❁════┅┄•╯`, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "tinder",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
     })
   }
module.exports.handleReply = async ({ api, event, handleReply, Users, Currencies }) => {
var token = `6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const tile = (Math.random() * 50)+50;
const emoji = ["♥️","❤️","💛","💚","💙","💜","🖤","💖","💝","💓","💘","💍"];
const random = ["म तिमीलाई दुई सय वर्षको खुशीको कामना गर्दछु, म तिमीहरु दुई एक अर्कालाई माया गर्छु भन्ने कामना गर्दछु म आशा गर्दछु कि तपाईहरु दुबै छिट्टै सँगै हुनुहुनेछ, तिमी भोलि सँगै हुनेछौ, सधैभरी सँगै हुनेछौ, तिमीहरु दुबैको माया सदा रहोस"];
    switch(handleReply.type) {
        case "tinder": {
          switch(event.body) {
          case "trai":
          case "nam":
          case "Trai":
          case "Nam": {
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`कृपया मलाई थाहा दिनुहोस् यदि तपाइँको पार्टनर तपाइँसँग मेल खान्छ`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/C5cnuvK.png`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var msg = {body: `🖤====「 𝗧𝗜𝗡𝗗𝗘𝗥  」====🖤\n━━━━━━━━━━━━━━\n\nEvery time the two levels combine together ${tile.toFixed(2)}%\n• ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+"\n\n🌸 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 𝗧𝘂𝗮𝗻𝗗𝗲𝗲𝗽𝗧𝗿𝘆 🌸", mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
          case "girl":
          case "female":
          case "Girl": 
          case "Female": {
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`यदि तपाईंले मेरी श्रीमतीको सूट देख्नुभयो भने मलाई थाहा दिनुहोस्`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/C5cnuvK.png`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var msg = {body: `🖤====「 𝗧𝗜𝗡𝗗𝗘𝗥  」====🖤\n━━━━━━━━━━━━━━\n\nभोलि, दुई बिरामीहरू बीच के हुनेछ? ${tile.toFixed(2)}%\n• ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
        }
      }
    }
}
