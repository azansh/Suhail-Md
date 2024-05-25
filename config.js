const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_36_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMixcbiAgICAgICAgMjUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDcxLFxuICAgICAgICAzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDcxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU5LFxuICAgICAgICA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyLFxuICAgICAgICA3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzksXG4gICAgICAgIDMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI5LFxuICAgICAgICAzNixcbiAgICAgICAgMjUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI5LFxuICAgICAgICA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMTQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEzLFxuICAgICAgICA4NixcbiAgICAgICAgMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgMTc5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImRVeHF3VFpwUjkvVlNweURBZFMrdXpkWXhaa2NlajJGODk5eENQSGZMMjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTUxMTkxMDg2NzU3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRENGMDY4NTg0MzU0MDU5Qzg1NDBGOTI2QjVDMTg3MjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NjE4OTY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTUxMTkxMDg2NzU3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUE0QkVDRDYyQTQ2QkQ2QUUwNEE0NkNGQzk0QzU2NUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NjE4OTY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTUxMTkxMDg2NzU3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjMwQUQxQ0Y0NDcxMjI1RUFGN0I0Qjk2Njc4MkU4MzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NjE4OTcwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTUxMTkxMDg2NzU3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTdENUVFRTQ2QjAzQTI0ODJCM0JBOTUxNzA0NjFDOTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NjE4OTcwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZaWDNVYTRnUUwyRzc2MW1Hdi00TXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjRkMjE4OWQtNjVjNy00NDQ0LWE2MjctNjQ4YzFhZTBhMzE5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OSxcbiAgICAgIDE0MCxcbiAgICAgIDk4LFxuICAgICAgMTQsXG4gICAgICAxMTYsXG4gICAgICAyNyxcbiAgICAgIDkwLFxuICAgICAgMjMzLFxuICAgICAgNjcsXG4gICAgICAxMTksXG4gICAgICAzMixcbiAgICAgIDE4LFxuICAgICAgMTQxLFxuICAgICAgMTc5LFxuICAgICAgODIsXG4gICAgICAxOTgsXG4gICAgICA0MyxcbiAgICAgIDI3LFxuICAgICAgMjEzLFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgNDIsXG4gICAgICA5NixcbiAgICAgIDEzNyxcbiAgICAgIDEzNSxcbiAgICAgIDE1NyxcbiAgICAgIDEwNyxcbiAgICAgIDE4NixcbiAgICAgIDExOSxcbiAgICAgIDksXG4gICAgICA3NixcbiAgICAgIDcyLFxuICAgICAgMjUyLFxuICAgICAgOTUsXG4gICAgICA2OSxcbiAgICAgIDIwLFxuICAgICAgMTA4LFxuICAgICAgMTUwLFxuICAgICAgMTcxLFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlY5QkdHQUFDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1NTExOTEwODY3NTc3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM0ODY2OTgwNzM3MDU1OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2RqCDwnZKBIPCdkagg8J2RtVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00zVHNIMFEwNDNHc2dZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieC8yTUZmaXhSVWtoR05JemIwdEwvUmJIbnZrVXZJeTcyRXVwbVA1U29oMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3QlhnQ0llWFZmeVZVUlo1MjYxZGtScW9TL2NwUDBBSkozcGNBK2Z1TXNyOXBaWmtJS1diVDBsVzlDamlOOGtEVWFqVS9YYzIvayt5ZWdYUml1dERBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBTDBKN0pnZjl3MnRJcldkUWhMTmhoakFacVBaWXN6WmhIZmIzOGMwdGNpek9hdHZkOG10M1NsV3BGblcxUDc0UktjSmQ1RERISG1VV1V2SzVpTHVDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1NTExOTEwODY3NTc3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjYxODk2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZuYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRm5iLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU0ExeWVoWGlSMS9iazZTUGg3ak5NOWROcm54ejY3L05TZUJUa21ETGdqcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNjI5NDExMzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjM1NTkyNDcxOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
