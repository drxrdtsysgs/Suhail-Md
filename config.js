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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94753574803";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_16_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMTg1LFxuICAgICAgICA1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDkyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI0LFxuICAgICAgICA5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NixcbiAgICAgICAgMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MyxcbiAgICAgICAgODksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzksXG4gICAgICAgIDQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYxLFxuICAgICAgICA1NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDYsXG4gICAgICAgIDEwLFxuICAgICAgICA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVYRTJrRDM3TGtOekk4V3BmRHA3dkdwRTVEKytTY1lhenJVTWZBUEN2ZUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk10SnNsUmJoU1hhYzRiMmZ3a1FQSUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWRiOTI0NzktMTRlOS00ZGFiLTljYTgtYjhkOWJiMDkwMDkxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDI1MixcbiAgICAgIDQ4LFxuICAgICAgMTA1LFxuICAgICAgNDQsXG4gICAgICA5OCxcbiAgICAgIDIyMyxcbiAgICAgIDIxLFxuICAgICAgMTYxLFxuICAgICAgMTksXG4gICAgICAyOSxcbiAgICAgIDY1LFxuICAgICAgMzQsXG4gICAgICAxMzUsXG4gICAgICAyMyxcbiAgICAgIDc1LFxuICAgICAgMTg5LFxuICAgICAgMjExLFxuICAgICAgNjYsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgMTkxLFxuICAgICAgODksXG4gICAgICA0OSxcbiAgICAgIDE3MixcbiAgICAgIDg5LFxuICAgICAgMTk0LFxuICAgICAgMzIsXG4gICAgICA3NCxcbiAgICAgIDE4NyxcbiAgICAgIDQyLFxuICAgICAgNDUsXG4gICAgICA0NixcbiAgICAgIDUsXG4gICAgICAyMCxcbiAgICAgIDI1LFxuICAgICAgODEsXG4gICAgICAxMzksXG4gICAgICA5NCxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5CNExBRkFYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4OTk1ODIyNTo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkTNn0XNn1jNn1TNn0XNn1LNn1wiLFxuICAgIFwibGlkXCI6IFwiMjYxMzQ5MTc5NDEyNTgyOjYzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xEOTVPTURFSnJob2JRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNWJSbDlnMjkyU2tnMXJGSVhZcWk4b0l1U2s3ZFRXcHFpNU04V05EQzNXZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2QUpkNk14bHVLUTAyQWFialhiNWFFM2xyQjJRNnhMRmZ0YWhXZ2hpT1kvYzd6MWR5YmJSZzhoWTlxOUJ3SkE0Z0w4aTFTV0ozdHU4Q2ZyY25XV3FEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3MEluLzM2UWFTc2xveEJReXVXeHNxOUNWYkFSR3EwMGV1U01zUEVtMllESnlmTXRWWkVwYjNEbjQ4NUxMQyt3TG56KytvV2NZcUsxSDNPb0VIQzdoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4OTk1ODIyNTo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMTc3NTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLeWpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUt5ai5qc29uIjogIntcImtleURhdGFcIjpcIjZTOFRLUnplU0ovQ3N4VGd2SFQ0dzJTdW1XczlnQ3Z6b0dXUzIyOXRXMDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxNDU3ODg2NCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjE3NjUyMzM1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
