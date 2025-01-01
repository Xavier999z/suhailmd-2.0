const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="xavierhenry999@gmail.com"
global.location="Rivers, Nigeria"


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VakY1ux4inoxR9o68n1e";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VakY1ux4inoxR9o68n1e" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2347039751341";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347039751341";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347039751341,2347039751341";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_21_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDczLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM1LFxuICAgICAgICA4MixcbiAgICAgICAgODksXG4gICAgICAgIDg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDczLFxuICAgICAgICAzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MixcbiAgICAgICAgNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MyxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMixcbiAgICAgICAgMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIityc2x0cHByazVudFlwS1BueC9rUnlzMmZwZzgrV0NXSUNBRm5abXdGWWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNZbnYteXZmVEsyZ1c0QnozWHdzSEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmFmMGZkZDAtOWU4Zi00ZDg2LTllMmUtZmQ2NDA4YmU3YWUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgNzUsXG4gICAgICAyNDMsXG4gICAgICAxNzEsXG4gICAgICAxMzYsXG4gICAgICAyMTEsXG4gICAgICA0NixcbiAgICAgIDY4LFxuICAgICAgODksXG4gICAgICAxMjIsXG4gICAgICAxMzQsXG4gICAgICAyNSxcbiAgICAgIDYxLFxuICAgICAgMjUyLFxuICAgICAgNzUsXG4gICAgICA1MixcbiAgICAgIDEzNCxcbiAgICAgIDEzNixcbiAgICAgIDc4LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDI0NixcbiAgICAgIDE3MyxcbiAgICAgIDEyMCxcbiAgICAgIDExMCxcbiAgICAgIDkxLFxuICAgICAgMjI2LFxuICAgICAgMTksXG4gICAgICAyNDMsXG4gICAgICA1MyxcbiAgICAgIDI4LFxuICAgICAgMTc2LFxuICAgICAgMTgyLFxuICAgICAgMjAyLFxuICAgICAgMjE2LFxuICAgICAgMjQsXG4gICAgICAxMTcsXG4gICAgICAxNjEsXG4gICAgICAxNDYsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRlI3Q0RTN0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzk3NTEzNDE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTUzNjU3NTU4NTkwNzg6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKU0s1N29FRUxpQzFic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZDQ01QMmxzRWNZMm0zaXRGTXpkejZGaWVBREQyajR2cHA3RFMyNHBLZzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZTRGTDhuYWVyMjJNSytMRlhnc1NZTGIvYzNWdmJwMldLS293R3VSZzhDZ1NUWG9ldHlqOVdnbno1WU1zS1FkN1hFdldQdGdxTmtGMFdGM2FxZEczQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZi9KNFBIVFdQSE5odVhRZWlOM3gzdENsMkVTa0pZYkFxempTSk9BMUxLdnRpcTdOUWZiVEE1SFN6WWs0a3kvZW1Rd0FUZ2ZnL0VkcnhvdFQ0QVJ3Z0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzOTc1MTM0MTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NzM3NjYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTnZMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOdkwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvOGh5VWFzbkxUY3BOczViV0FJMThIbGthcDZlb3pyem11UzNUR2lBaDJBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExOTcwNjU0OTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTczNzY2NDUwNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
