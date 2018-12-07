const Discord = require('discord.js');
const developers = ["415595760990552065","314845344313901057"]
const db = require('quick.db');
const client = new Discord.Client();   
const bot = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 
const prefix = '-';
var table = require('table').table
var adminprefix = '#'
var ti={}  
,spee={}
,attentions={};


//streaming dl bot
client.on('ready', function(){
    client.user.setStatus("dnd");
    var ms = 60000 ;
    var setGame = [`${client.guilds.size} Server`,'-help','Type -help',`${client.users.size} Members`,'-inv','Snow Bot ❄'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/Ninja`);
    }, ms);
});



///consoledlbot
    client.on('ready', () => {
        console.log('╔[════════════════════════════════════]╗');
        console.log('            ╔[════════════]╗')
        console.log('              Bot Is Online')
        console.log('            ╚[════════════]╝')
        console.log(`Logged in as ${client.user.tag}!`);   
        console.log('')
        console.log(`servers! [ " ${client.guilds.size} " ]`);
        console.log('')
        console.log('Snow Team')
        console.log('')  
        console.log(`Users! [ " ${client.users.size} " ]`);
        console.log('╚[════════════════════════════════════]╝')
      });



//adminsjust
var adminprefix = '#'
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setgame')) {
    client.user.setGame(argresult);
      message.channel.send(`**Done   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Done   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Done   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Ninja");
      message.channel.send(`**Done**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**Changing The Name To ..** **${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**Changing The Avatar To :** **${argresult}** `);
}
});



//montion bot
client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" **? كيف اقدلر اساعدك ** ");
    }
});


//thanks
client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor("#00FFF")
    .setDescription(` :rose: **شكراً لك لإضافه البوت الى سيرفرك**`)
        guild.owner.send(embed)
  });


//ping
client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('-ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
.setColor('#00FFFF')
.addField('**Ping:**',msg + " ms")
message.channel.send({embed:embed});
}
});



//change-nickname
client.on("message",  message => {
    var prefix = "-";
    let args = message.content.split(' ').slice(1);
if(message.content.startsWith(prefix + 'nic')) {
   if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
       message.channel.send("**ضع الاسم**")
   } else {
       if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply('** ❌البوت ما عنده خاصية MANAGE_NICKNAMES.**').catch(console.error);
       let changenick = message.mentions.users.first();
       let username = args.slice(1).join(' ')
       if (username.length < 1) return message.reply('**ضع الاسم**').catch(console.error);
       if (message.mentions.users.size < 1) return message.author.send('**You must mention a user to change their nickname. ❌**').catch(console.error);
       message.guild.member(changenick.id).setNickname(username);
       message.channel.send("**تم تغيير الاسم الى:** " + changenick + "")
   }
}});


//say
client.on('message', message => {
    var prefix = "-";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
 
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
 
 
  let args = message.content.split(" ").slice(1);
  let x = args.join(" ")
    if(message.content.startsWith(prefix + 'say')) {
        message.channel.send(''+x);
            message.delete(999)
    }
   
   
  });


//unabn all
  client.on('message', message => {
    if (message.content.startWith(prefix + "unall")){
if(!message.channel.guild) return;
 message.guild.members.forEach( member => {
     
     member.unban()
 })
}
});


//room-info
client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "-";
if(message.content.startsWith(prefix + 'ch')) {
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("معلومات الروم")
      .setColor("#00FFF")
      .setDescription(`ايدي الروم <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("صنع في", `${channel.createdAt}`)
      .addField("نوع الروم", `${channel.type}`)
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });
  }
 
    });

//bot-info
    client.on('message', message => {
        if (message.content.startsWith("-bot")) {
        message.channel.send({
            embed: new Discord.RichEmbed()
                .setAuthor(client.user.username,client.user.avatarURL)
                .setThumbnail(client.user.avatarURL)
                .setColor('RANDOM')
                .setTitle('``INFO Snow Bot`` ')
                .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
                .addField('``servers``', [client.guilds.size], true)
                .addField('``channels``' , `[ ${client.channels.size} ]` , true)
                .addField('``Users``' ,`[ ${client.users.size} ]` , true)
                .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
                .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                      .addField('``My Prefix``' , `[-]` , true)
                      .addField('``My Language``' , `[ Java Script ]` , true)
                        })
    }
    });



//members-info
client.on('message', message => {
    if (!message.channel.guild) return;
if(message.content =='-member')
var IzRo = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL) 
.setTitle('🌷| Members info')
.addBlankField(true)
.addField('📗| Online',
`${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
.addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
.addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
.addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
.addField('➡| Server Members',`${message.guild.memberCount}`)
message.channel.send(IzRo);

});


//emoji-list
      client.on('message', message => { 
        var prefix = '-';
     if (message.content.startsWith(prefix + 'emojilist')) {
 
         const List = message.guild.emojis.map(e => e.toString()).join(" ");
 
         const EmojiList = new Discord.RichEmbed()
             .setTitle('➠ Emoji\'s')
             .setAuthor(message.guild.name, message.guild.iconURL) 
             .setColor('#00FFF')
             .setDescription(List) 
             .setTimestamp() 
             .setFooter(message.guild.name)
         message.channel.send(EmojiList) 
 
        
          
     }
 });


 //dont-pub
 client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links 😠 !**`)
    }
}
});


//only-hi
client.on('message', message => {
    if (message.content.startsWith('snow')){
         let ra3d = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#00FFF")
      .setDescription(" **Yo ! Im The New Discord Bot**")
         
         
      message.channel.sendEmbed(ra3d);
        }
    });
    


//offline-members
client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        ch.send(`${user} ** تحذير هذا شخص مسوي نفسه اوف لاين ويكتب**`)
        .then(msg => {
            msg.delete(10000)
        })
    }
});



//montion-the bot
client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" **My Prefix is** ``-`` ");
    }
});

//dm
client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var stewart = new Discord.RichEmbed()
            .setColor('#00FFF')
            .setTimestamp()
            .setTitle('``رساله جديده في خاص البوت``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("520326537933881354").send({ embed: stewart });
    }
});


//count-server
client.on('message', message => {
    if (!message.channel.guild) return;
if(message.content =='-count')
var SaifDz = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL)
.setTitle(' :boom: | Members info')
.addBlankField(true)
.addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
message.channel.send(SaifDz);
});




///link
client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("#00FFF")
          .setDescription("**تم أرسال الرابط برسالة خاصة**")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('**طلب بواسطة:** ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("#00FFF")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 1 **")
      message.author.sendEmbed(Embed11)
    }
}); 




///creat channels
client.on("message", (message) => {
    if (message.content.startsWith("-ct")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'text');
    message.channel.sendMessage('**تـم إنـشاء روم كـتابـي**')
    
    }
    });
        
    
    
    
client.on("message", (message) => {
    if (message.content.startsWith("-cv")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'voice');
        message.channel.sendMessage('**تـم إنـشاء روم صـوتي**')
        
    }
    });




client.on('message', message => {      
        if (message.content.startsWith('-clear')) {
            if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!');
                if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
                if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
         let args = message.content.split(" ").slice(1)
            let messagecount = parseInt(args);
            if (args > 1000) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 1000 .**").then(messages => messages.delete(5000))
            if(!messagecount) args = '1000';
            message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
            message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
          }
          });





//vkick
client.on("message", message => {
    var prefix = "-";
    const command = message.content.split(" ")[0];
 
    if(command == prefix+"vkick"){
 
        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('**you do not have permission to perform this action!** :snowflake: ');
        }
 
        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("**please mention the member** :snowflake: ")
            return;
        }
 
    if(!member.voiceChannel){
    message.reply("**i can't include voice channel for member!** :snowflake: ")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
       
 
 
   
      });
     });
    }
});





  //mute-unmute
client.on('message', async message =>{
    var prefix = "-";
  const ms = require("ms");
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
      if(command == "mute") {
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
      if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
      let muterole = message.guild.roles.find(`name`, "Muted");
      //start of create role
      if(!muterole){
        try{
          muterole = await message.guild.createRole({
            name: "Muted",
            color: "#070000",
            permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              SPEAK : false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }
      //end of create role
      let mutetime = args[1];
      if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
   
      await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${ms(ms(mutetime))}`);
  setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
      }, ms(mutetime));
   
   
   
    }
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
   
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
   
    let role = message.guild.roles.find (r => r.name === "Muted");
   
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
   
    await toMute.removeRole(role)
    message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح** :snowflake: ");
   
    return;
   
    }
   
  });

  

  ////ban
client.on('message', message => {
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;
   
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
   
    let args = message.content.split(" ").slice(1);
   
    if (command == "ban") {
                 if(!message.channel.guild) return message.reply('** This command only for servers**');
           
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if(!reason) return message.reply ("**اكتب سبب الطرد**");
    if (!message.guild.member(user)
    .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
   
    message.guild.member(user).ban(7, user);
   
    const banembed = new Discord.RichEmbed()
    .setAuthor(`BANNED!`, user.displayAvatarURL)
    .setColor("#00FFFF")
    .setTimestamp()
    .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
    .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
    .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
    message.channel.send({
      embed : banembed
    })
  }
  });
  
  
  
  //kick
  client.on('message', message => {
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;
   
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
   
    let args = message.content.split(" ").slice(1);
   
    if (command == "kick") {
                 if(!message.channel.guild) return message.reply('** This command only for servers**');
           
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if(!reason) return message.reply ("**اكتب سبب الطرد**");
    if (!message.guild.member(user)
    .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
   
    message.guild.member(user).kick();
   
    const kickembed = new Discord.RichEmbed()
    .setAuthor(`KICKED!`, user.displayAvatarURL)
    .setColor("#00FFFF")
    .setTimestamp()
    .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
    .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
    .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
    message.channel.send({
      embed : kickembed
    })
  }
  });
  


  //avatar
client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("#00FFF")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


//server-info
client.on('message', message => {
    var prefix ="/";
  if(message.content.startsWith(prefix +"server")){
  if(!message.channel.guild) return message.reply(' ');
  const millis = new Date().getTime() - message.guild.createdAt.getTime();
  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
  const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
  const days = millis / 1000 / 60 / 60 / 24;
  let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
  var embed  = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .addField("**🆔 Server ID:**", message.guild.id,true)
  .addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
  .addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
  .addField("👥 Members ",`[${message.guild.memberCount}]`,true)
  .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
  .addField("**🌍 Others **" , message.guild.region,true)
  .addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
  .setColor('#00FFF')
  message.channel.sendEmbed(embed)
  
  }
  });




  //my-invites
client.on('message', message => {
    if (!message.channel.guild) return;
if (message.author.bot) return;

if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);

if (command === 'invites') {
message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
return message.reply(`**${inviteCount}: عدد الاشخاص الذي دعوتهم هو**`)

});
}});




//invite-bot
client.on('message' , message => {
    if (message.content === (prefix + "invite")) {
        if(!message.channel.guild) return message.reply('This Command is Only For Servers');
     const embed = new Discord.RichEmbed()
 .setColor("#00FFF")
 .setThumbnail(client.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('Click Here To Invite The Bot')
 .setURL('https://discordapp.com/oauth2/authorize?client_id=519838063992635392&scope=bot&permissions=9')
  message.channel.sendEmbed(embed);
   }
});
client.on('message' , message => {
    if (message.content === (prefix + "inv")) {
        if(!message.channel.guild) return message.reply('This Command is Only For Servers');
     const embed = new Discord.RichEmbed()
 .setColor("#00FFF")
 .setThumbnail(client.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('Click Here To Invite The Bot')
 .setURL('https://discordapp.com/oauth2/authorize?client_id=519838063992635392&scope=bot&permissions=9')
  message.channel.sendEmbed(embed);
   }
});





//server-image
client.on("message", message => {
    if(!message.channel.guild) return;
if(message.author.bot) return;
if(message.content === prefix + "image"){ 
    const embed = new Discord.RichEmbed()

.setTitle(` ** ${message.guild.name} ** ** صورة سيرفر**`)
.setAuthor(message.author.username, message.guild.iconrURL)
.setColor("#00FFF")
.setImage(message.guild.iconURL)
.setURL(message.guild.iconrURL)
              .setTimestamp()

message.channel.send({embed});
}
});



//delet-room
client.on("message", (message) => {
    if (message.content.startsWith(prefix + "delete")) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**لا يوجد رووم بهدا الاسم**').catch(console.error);
        channel.delete()
    }
});



//server-support
client.on('message', message => {
    if (true) {
  if (message.content === (prefix + "support")) {
       message.author.send('**| https://discord.gg/mP3AxB7 |**').catch(e => console.log(e.stack));
      }
     } 
    });
    
  client.on('message', message => {
       if (message.content === (prefix + "support")) {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#00FFF")
    .addField("Done" , " تــــم ارســالك في الخــاص")
  
  
  
    message.channel.sendEmbed(embed);
      }
  });



  //top-invite
const arraySort = require('array-sort');
client.on('message' , async (message) => {

    if(message.content.startsWith(prefix + "topinv")) {

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['User', 'Uses']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor("#00FFF")
    .setTitle("دعوات السيرفر")
    .addField(' المتصدرين' , `\`\`\`${table.table(possibleInvites)}\`\`\``)

    message.channel.send(embed)
    }
});



client.login(process.env.BOT_TOKEN);
