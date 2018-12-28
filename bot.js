const Discord = require('discord.js');
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
const adminprefix = "#";
const devs = ['415595760990552065','314845344313901057'];
var ti={}  
,spee={}
,attentions={};


//streaming dl bot
client.on('ready', () => {
    client.user.setStatus("dnd");
    client.user.setActivity("-help | SnowBot❄",{type: 'Streaming'})

});



///consoledlbot
client.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~Team #Snow Bot~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  Team #Snow Bot " ] servers! [ " ${client.guilds.size} " ] Users! [ " ${client.users.size} " ]`); 

});

//ترحيب بالخاص
client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
        return channel.send(`السلام عليكم :hearts: 
انا **SnowBot ❄**
 بوت إدارة - العاب - ترفيه 
هدف البوت جعل الديسكورد اسهل بالنسبة لمستخمي البوت
فريق البوت يشتغل يوميا على تطوير البوت و صيانته
بحيث نستقبل كل إقتراحاتكم و آرائكم وانتقاداتكم  ب سيرفر الدعم , https://discord.gg/JhD7trr
يمكنك إضافة البوت ل سيرفرك عن طريق الأمر التالي , [ **-invite** ]
و تجربتي, إنشاء الله بعجبك... :sparkles: `)
    }).catch(console.error)
})

//just for admin
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setG')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setN')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setA')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});


//suggestions

 client.on('message', message => {
if(message.content.startsWith(prefix +'sug')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
      const A8tra7Room = message.guild.channels.find("name", "suggestions")
      if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات `);
   let a8tra7 = message.content.split(' ').slice(1).join(' ')
   var m8tr7 = message.author.id
if(!message.guild.channels.find("name","suggestions")) return message.channel.send('يجب إنشاء رووم بإسم :  \`suggestions \`')
   var ThxForSug = new Discord.RichEmbed()
      .setColor('WHITE')
   .setTitle(`✅ Success!`)
   .setTimestamp()
   .setDescription(`**شكراً على اقتراحك !**`)
.setDescription(`**Your Suggestion** : ${a8tra7}`)
   var Sure = new Discord.RichEmbed()
   .setTimestamp()
      .setColor('WHITE')
   .setTitle(`**هل انت متأكد من ارسال الاقتراح؟ معك دقيقه قبل الالغاء**`)               
.setDescription(`Suggestion : **${a8tra7}**`)
		 .setFooter('SnowBot ❄' , client.user.avatarURL)
message.channel.sendEmbed(Sure).then(msg => {
    msg.react('❎')
.then(() => msg.react('✅'))

let YesFilter = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
let NoFilter = (reaction, user) => reaction.emoji.name === '❎' && user
=== message.author.id;

let Yes = msg.createReactionCollector(YesFilter, { time: 60000 });
let No = msg.createReactionCollector(NoFilter, { time: 60000 });

Yes.on("collect", r => {
   var ala8tra7 = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('GOLD')
   .setThumbnail(message.author.avatarURL)
   .setTitle(`New Suggestion :bell:`)
   .setDescription(`From : __<@${m8tr7}>__\n\nSuggestion: **${a8tra7}**`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`)
   A8tra7Room.send(ala8tra7)
   message.channel.sendEmbed(ThxForSug).then(message => {message.delete(6000)})
msg.delete();
})
No.on("collect", r => {
message.channel.send('**تم الغاء اقتراح بنجاح ✅ **').then(message => {message.delete(4000)})
msg.delete();
})
})
}			     
});                        

//thanks
client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor("#00FFFF")
    .setDescription(` :rose: **شكراً لك لإضافه البوت الى سيرفرك** ${guildCreate}`)
        guild.owner.send(embed)
  });

// Ticket CMD


client.on("message", (message) => {
   if (message.content.startsWith(prefix + "new")) {     
        const reason = message.content.split(" ").slice(1).join(" ");     
if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(` :flag_us:  This server doesn't have a **Support Team**  role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.\n:flag_sa: : هذا السيرفر لا يحتوي على رتبة  **Support Team** .\nفلهاذا السبب لايمكن فتح التذكرة.\nإذا كنت إداري, قم بصنع رتبه جديدة بالإسم المذكور اعلاه و اعطها للأشخاص الذي تريدهم رأية التذكرة كفريق للدعم. `);
           if (message.guild.channels.exists("name", "ticket-${message.author.id}" )) return message.channel.send(`**انت فاتح تذكرة من قبل. :x:**`);    
        message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **Your ticket has been opened**  <#${c.id}> .`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحبا ${message.author.username}!`, `شكرا على على التواصل مع فريق الدعم الخاص بنا \nسيتم الرد على اسإلتك في أقرب وقت, ونتمنى ان تقوم بتقيدم شرح مفصل لمشكلتك/أسإلتك.\nو اي إستهزاء في فتح التذكر يمكن اي يتسبب بعقوبات لفاتح التذكرة`)
	    .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith(prefix + "close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`**لا يمكن إستعمال هذا الأمر خارج رووم التذكرة!. :x: **`);
 
        message.channel.send(`**هل أنت واثق؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!  للتأكيد, اكتتب \`confirm\`
سوف ينتهي المهلة خلال 10 ثوانٍ ويتم إلغاؤها**.`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === 'confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })    /// ALPHA CODES
                    .then((collected) => {
                        message.channel.delete();
                    })    /// ALPHA CODES
                    .catch(() => {
                        m.edit('إنتهى الوقت, لم بتم إغلاق التذكرة.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
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
.addField('❄ **Ping :**',msg + " ms")
message.channel.send({embed:embed});
}
});



client.on('message', message => {
if(message.content.startsWith(prefix +"server")){
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** :negative_squared_cross_mark: `)
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
.setColor('#00FFFF')
message.channel.sendEmbed(embed)

}
});



client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("**لاستخدام الأمر اكتب هذه الأمر :** ``-move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#00FFFF")
 .setDescription(`**لقد قمت بسحب** <@${usermentioned}> **الى الروم الصوتي الخاص بك** ✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`**You are Moved in** ${message.guild.name}`)
 .setColor("#00FFFF")
.setDescription(`**<@${message.author.id}>  Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("**لا تستطيع سحب** "+ message.mentions.members.first() +" **يجب ان يكون هذه العضو في روم صوتي**")
}
} else {
 message.channel.send("**يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك**")
}
} else {
message.react("❌")
}
 }
});

client.on('ready', () => {
  console.log('|===================================|');
  console.log(`|  Users Size ${client.users.size}  |`);
  console.log(`| Guilds Size ${client.guilds.size} |`);
  console.log(`|===================================|`);
  console.log(`|          ${client.user.tag}       |`);
  console.log(`|===================================|`);
  console.log(`|              Im Ready !           |`);
  console.log(`|===================================|`);
});



client.on('message', message => {      
        if (message.content.startsWith('-clear')) {
            if(!message.channel.guild) return message.reply(' This Command For Servers Only!');
                if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You dont have **MANAGE_MESSAGES** Permission!');
                if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(' I dont have **MANAGE_MESSAGES** Permission!');
         let args = message.content.split(" ").slice(1)
            let messagecount = parseInt(args);
            if (args > 1000) return message.reply("** يجب ان يكون عدد المسح أقل من 1000 .**").then(messages => messages.delete(5000))
            if(!messagecount) args = '1000';
            message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
            message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
          }
          });



//roles
client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
 
    var prefix = '-'; //<==== تقدر تغير البرفكس
    var args = message.content.toLowerCase().split(' ');
    var command = args[0];
    var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
 
    if(command == prefix + 'role') {
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
 
        let roleCommand = new Discord.RichEmbed() // حقوق الفا كودز
        .setTitle(':snowflake: **Role Commands :**')
        .setColor('#00FFFF')
        .setDescription(`**\n${prefix}role <SOMEONE> <ROLE>**\n➥ \`\`For give or delete from some one the role.\`\`\n\n**${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete from the humans role.\`\`\n\n**${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete from the bots role.\`\`\n\n**${prefix}role all add <ROLE>**\n➥ \`\`For give all role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For remove from all role.\`\``)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
 
        if(!args[1]) return message.channel.send(roleCommand);
        if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return message.channel.send(roleCommand);
 
        if(userM) {
            var argsRole = args[2];
        }else if(!userM && args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {
            var argsRole = args[3];
        }
 
        var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));
 
        if(userM) {
            if(!args[2]) return message.channel.send(`**Useage:** ${prefix}role <USER> \`\`<ROLE>\`\``);
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Or \`\`DELETE\`\` From any user have or not have **${getRole.name}** role beacuse this role highest from my role!`);
 
          if(message.guild.member(userM.user).roles.has(getRole.id)) {
              message.guild.member(userM.user).removeRole(getRole.id);
              message.channel.send(`:white_check_mark: | Successfully \`\`DELETE\`\` The role **${getRole.name}** From user **${userM.user.tag}**`);
          }else if(!message.guild.member(userM.user).roles.has(getRole.id)) {
              message.guild.member(userM.user).addRole(getRole.id);
              message.channel.send(`:white_check_mark: | Successfully \`\`GIVE\`\` The role **${getRole.name}** To user **${userM.user.tag}**`);
          }
      }else if(args[1] === 'humans') {
          let notArgs = new Discord.RichEmbed()
          .setTitle(':white_check_mark: Role Command.') // حقوق الفا كودز
          .setColor('GREEN')
          .setDescription(`**\n${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans the role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete the role from all humans.\`\``)
          .setTimestamp()
          .setFooter(message.author.tag, message.author.avatarURL)
 
          if(!args[2]) return message.channel.send(notArgs);
          if(!args[3]) return message.channel.send(notArgs);
          if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);
              if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
              let humansSure = new Discord.RichEmbed()
              .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**`)
              .setColor('#00FFFF')
              .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')
              .setTimestamp()
              .setFooter(message.author.tag, message.author.avatarURL)
 
              message.channel.send(humansSure).then(msg => {
                  msg.react('✅').then(() => msg.react('❎'))
 
                  let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                  let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                  let give = msg.createReactionCollector(giveHim, { time: 60000 });
                  let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
 
                  give.on('collect', r => {
                      msg.delete();
                      message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}** ...`).then(message1 => {
                          message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(async m => {
                              message.guild.member(m).addRole(getRole.id) // حقوق الفا كودز
                              await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Humans** The role **${getRole.name}** .`);
                          });
                      });
                  });
                  dontGive.on('collect', r => {
                      msg.delete();
                      message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                  });
              })
          }else if(args[2] === 'remove') {
              if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
              if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
              let humansSure = new Discord.RichEmbed()
              .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans?`)
              .setColor('#00FFFF') // حقوق الفا كودز
              .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
              .setTimestamp()
              .setFooter(message.author.tag, message.author.avatarURL)
 
              message.channel.send(humansSure).then(msg => {
                  msg.react('✅').then(() => msg.react('❎'))
 
                  let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                  let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                  let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                  let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                  remove.on('collect', r => {
                      msg.delete();
                      message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}** ...`).then(message1 => {
                          message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(async m => {
                              message.guild.member(m).removeRole(getRole.id)
                              await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Humans** .`);
                          });
                      }); // حقوق الفا كودز
                  });
                  dontRemove.on('collect', r => {
                      msg.delete();
                      message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                  });
              })
          }
      }else if(args[1] === 'bots') {
      let notArgs = new Discord.RichEmbed()
          .setTitle(':white_check_mark: Role Command.')
          .setColor('#00FFFF')
          .setDescription(`**\n${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots the role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete the role from all bots.\`\``)
          .setTimestamp()
          .setFooter(message.author.tag, message.author.avatarURL)
 
          if(!args[2]) return message.channel.send(notArgs);
          if(!args[3]) return message.channel.send(notArgs); // حقوق الفا كودز
          if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any Bot the role with name **${getRole.name}** beacuse the role highest then my role!`);
              if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot not have **${getRole.name}** role!`);
 
              let botsSure = new Discord.RichEmbed()
              .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**`)
              .setColor('#00FFFF')
              .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')
              .setTimestamp()
              .setFooter(message.author.tag, message.author.avatarURL)
 
              message.channel.send(botsSure).then(msg => {
                  msg.react('✅').then(() => msg.react('❎'))
 
                  let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                  let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                  let give = msg.createReactionCollector(giveHim, { time: 60000 });
                  let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 }); // حقوق الفا كودز
 
                  give.on('collect', r => {
                      msg.delete();
                      message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                          message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(async b => {
                              message.guild.member(b).addRole(getRole.id)
                              await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Bots** The role **${getRole.name}** .`);
                          });
                      });
                  });
                  dontGive.on('collect', r => {
                      msg.delete();
                      message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                  }); // حقوق الفا كودز
              })
          }else if(args[2] === 'remove') {
              if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any Bot beacuse the role highest then my role!`);
              if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot have **${getRole.name}** role!`);
 
              let humansSure = new Discord.RichEmbed()
              .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && m.user.bot).size}** Bots?`)
              .setColor('#00FFFF')
              .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
              .setTimestamp()
              .setFooter(message.author.tag, message.author.avatarURL)
 
              message.channel.send(humansSure).then(msg => {
                  msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كودز
 
                  let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                  let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                  let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                  let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                  remove.on('collect', r => {
                      msg.delete();
                      message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                          message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(async b => {
                              message.guild.member(b).removeRole(getRole.id)
                              await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Bots** .`);
                          });
                      });
                  });
                  dontRemove.on('collect', r => { // حقوق الفا كودز
                      msg.delete();
                      message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                  });
              })
          }
      }else if(args[1] === 'all') {
          let notArgs = new Discord.RichEmbed()
          .setTitle(':white_check_mark: Role Command.')
          .setColor('#00FFFF') // حقوق الفا كودز
          .setDescription(`**\n${prefix}role all add <ROLE>**\n➥ \`\`For give all the role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For delete the role from all.\`\``)
          .setTimestamp()
          .setFooter(message.author.tag, message.author.avatarURL)
 
          if(!args[2]) return message.channel.send(notArgs);
          if(!args[3]) return message.channel.send(notArgs);
          if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);
              if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
              let allSure = new Discord.RichEmbed()
              .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ?`)
              .setColor('#00FFFF')
              .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give all the role.\n\n❎ = No no, cancel.')
              .setTimestamp()
              .setFooter(message.author.tag, message.author.avatarURL)
 
              message.channel.send(allSure).then(msg => {
                  msg.react('✅').then(() => msg.react('❎'))
 
                  let giveAll = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                  let dontGiveAll = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                  let give = msg.createReactionCollector(giveAll, { time: 60000 });
                  let dontGive = msg.createReactionCollector(dontGiveAll, { time: 60000 });
// حقوق الفا كودز
                  give.on('collect', r => {
                      msg.delete();
                      message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                          message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(async m => {
                              message.guild.member(m).addRole(getRole.id)
                              await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give **All** The role **${getRole.name}** .`);
                          });
                      });
                  });
                  dontGive.on('collect', r => {
                      msg.delete();
                      message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                  });
              })
          }else if(args[2] === 'remove') {
              if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
              if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
              let allSure = new Discord.RichEmbed()
              .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** ?`)
              .setColor('#00FFFF')
              .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
              .setTimestamp()
              .setFooter(message.author.tag, message.author.avatarURL)
 
              message.channel.send(allSure).then(msg => {
                  msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كودز
 
                  let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                  let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                  let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                  let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                  remove.on('collect', r => {
                      msg.delete();
                      message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                          message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(async m => {
                              message.guild.member(m).removeRole(getRole.id);
                              await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From **All** .`);
                          });
                      }); // حقوق الفا كودز
                  });
                  dontRemove.on('collect', r => {
                      msg.delete();
                      message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                  });
              })
          } // حقوق الفا كودز
      }
  } // حقوق الفا كودز
});

client.on("message", message => {
        if(!message.channel.guild) return;
 if(message.author.bot) return;
    if(message.content === prefix + "image"){ 
        const embed = new Discord.RichEmbed()

    .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
.setAuthor(message.author.username, message.guild.iconrURL)
  .setColor("#00FFFF")
  .setImage(message.guild.iconURL)
  .setURL(message.guild.iconrURL)
                  .setTimestamp()

 message.channel.send({embed});
    }
});


client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('Don-')){
 if (message.author.id !== '415595760990552065') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '415595760990552065') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



client.on('message', message => {
  if(message.content.includes('discord.gg')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** Not allowed to advertising Here :angry: ! **`)
  }
}
});




client.on('message', message => {
         if(message.content === prefix + "closeroom") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                });
                  }
      if(message.content === prefix + "openroom") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__تم فتح الشات__ :white_check_mark: **")
                });
      }
         
});


client.on('message', message => {
  if (message.content.startsWith(prefix +"avatar")) {
if(!message.channel.guild) return;
      var mentionned = message.mentions.users.first();
  var client;
    if(mentionned){
        var client = mentionned; } else {
        var client = message.author;
    }
      const embed = new Discord.RichEmbed()
                         .addField('Requested by:', "<@" + message.author.id + ">")
      .setColor("#00FFFF")
      .setImage(`${client.avatarURL}`)
      .setFooter(message.author.username, message.author.avatarURL) 
    message.channel.sendEmbed(embed);
  }
});











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
    if(!tomute) return message.reply("**Mention someone first**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**Sorry ,But I Dont Have Permissiom** `MANAGE_MESSAGEES`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "000000",
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
    if(!mutetime) return message.reply("**Mute Time ??**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **Done, Mute time is** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **Unmuted !**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**@User**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**This User is not muted !**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**Done User has been Unmuted !**:white_check_mark:");
 
  return;
 
  }
 
});



  client.on('message', message => {
	var prefix = "-"
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
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص** :snowflake: ");
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

client.on('message', message => {
	var prefix = "-"
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
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص** :snowflake: ");
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







client.on('message', message => {
    var prefix = "-";
          if(message.content === prefix + "hidechannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: false
     })
                  message.channel.send('**Channel Hided Successfully !** :white_check_mark:  ')
     }
    });
    
    
    client.on('message', message => {
    var prefix = "-";
          if(message.content === prefix + "showchannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: true
     })
                  message.channel.send('**Done !** :snowflake: ')
     }
    });





client.on('message', msg => {
    if(msg.content.startsWith('-invbot')) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + 'قم بتحديد بوت' + '`` :snowflake: ')
if(!user.bot) return msg.reply('\`منشن بوت\` :snowflake: ');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});



client.on('message', message => { 
    if (message.content.startsWith("-bot")) { 
    message.channel.send({ 
        embed: new Discord.RichEmbed() 
            .setAuthor(client.user.username,client.user.avatarURL) 
            .setThumbnail(client.user.avatarURL) 
            .setColor('#00FFFF') 
            .setTitle('- Info :snowflake: .') 
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true) 
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true) 
            .addField('**Servers**', [client.guilds.size], true) 
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true) 
            .addField('**Users**' ,`[ ${client.users.size} ]` , true) 
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true) 
            .addField('**My ID**' , `[ ${client.user.id} ]` , true) 
            .addField('**DiscordJS**' , `[ ${Discord.version} ]` , true) 
            .addField('**NodeJS**' , `[ ${process.version} ]` , true) 
            .addField('**Arch**' , `[ ${process.arch} ]` , true) 
            .addField('**Platform**' , `[ ${process.platform} ]` , true) 
                  .addField('**My Prefix**' , `[ ${prefix} ]` , true) 
                  .addField('**My Language**' , `[ Java Script ]` , true) 
                  .setFooter('By | Univers Team !') 
    }) 
} 
}); 


client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "-";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#00FFFF")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#00FFFF")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **تم إرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#00FFFF")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#00FFFF")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});


client.on('ready', function(){	
    var ms = 40000 ;	
    var setGame = ['HaveFun'];	
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
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);	
}, ms);	
	
});


client.on('message', message => {
  var prefix = "-"; 
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('#00FFFF')
         .setTitle(':snowflake: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});




client.on('message', message => {
    if (message.content === "-rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('#00FFFF')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "-roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});






client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "-";
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});


const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });


  client.on('message' , async message => {
	  var prefix = "-";
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('**You must provide some text to emojify !** :snowflake:');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });



client.on('message', ra3d => {
var prefix = "-";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون ` :snowflake:');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: '#00FFFF'})
              }
            }
       });







client.on('message', message => {
	var prefix = "-";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('**مرجو كتابة نص الدي تريد** :snowflake: ');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});


   client.on('message', message => {
                    if (message.content === "-invite") {
                       if(!message.channel.guild) return;
                        let embed = new Discord.RichEmbed()
  .setAuthor(` ${message.author.username} `, message.author.avatarURL)  
 .setTitle(`:small_orange_diamond: Click Here ! `)
 .setURL(`https://discordapp.com/oauth2/authorize?client_id=519838063992635392&scope=bot&permissions=384064`)
 .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
                                         message.channel.sendEmbed(embed);
                                           }
                                       });




client.on('message', message => {
 if (message.content === "-inv") {
   if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
.setAuthor(` ${message.author.username} `, message.author.avatarURL)  
.setTitle(`:small_orange_diamond: Click Here ! `)
.setURL(`https://discordapp.com/oauth2/authorize?client_id=519838063992635392&scope=bot&permissions=384064`)
.setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
                                         message.channel.sendEmbed(embed);
                                           }
                                       });                                 

   client.on('message', message => {
if (message.content === "-support") {
let embed = new Discord.RichEmbed()
.setAuthor(` ${message.author.username} `, message.author.avatarURL)  
.setColor("#00FFFF")
.addField(" ** :snowflake: Server Support :snowflake: **" , "  **https://discord.gg/mP3AxB7**")
                                        
                                        
                                     message.channel.sendEmbed(embed);
                                       }
                                   });

                    client.on('message', message => {
                                        if (message.content === "-support") {
                                        let embed = new Discord.RichEmbed()
                                     .setAuthor(` ${message.author.username} `, message.author.avatarURL)  
                                     .setColor("#00FFFF")
                                     .addField(" ** :snowflake: Server Support **" , "  **https://discord.gg/mP3AxB7**")
                                        
                                        
                                     message.channel.sendEmbed(embed);
                                       }
                                   });



                                   client.on('message', message => {
                                    var prefix = "-";
                            if (message.author.bot) return;
                            if (!message.content.startsWith(prefix)) return;
                        
                            let command = message.content.split(" ")[0];
                            command = command.slice(prefix.length);
                        
                            let args = message.content.split(" ").slice(1);
                        
                            if (command == "embed") {
                                if (!message.channel.guild) return message.reply('** This command only for servers **');
                                let say = new Discord.RichEmbed()
                                    .setDescription(args.join("  "))
                                    .setColor("#00FFFF")
                                    .setFooter(message.author.username, message.author.avatarURL) 
                                message.channel.sendEmbed(say);
                                message.delete();
                            }
                        });



 client.on('message', message => {
              if (message.content.startsWith("-bans")) {
         message.guild.fetchBans()
      .then(bans => message.channel.send(`**There is** __**${bans.size}**__ **Bans in this server** `))
          .catch(console.error);
                                    }
                                    });



                                 client.on('message' , message => {
                                    var prefix = "-"
                                    
                                    if (message.author.bot) return;
                                    if (message.content.startsWith(prefix + "contact")) {
                                    if (!message.channel.guild) return;
                                    
                                    
                                    
                                    let args = message.content.split(" ").slice(1).join(" ");
                                    
                                    
                                    
                                    client.users.get("415595760990552065","314845344313901057").send(
                                        "\n" + "**" + ":snowflake: ● السيرفر :" + "**" +
                                        "\n" + "**" + "» " + message.guild.name + "**" +
                                        "\n" + "**" + ":snowflake: ● المرسل : " + "**" +
                                        "\n" + "**" + "» " + message.author.tag + "**" +
                                        "\n" + "**" + ":snowflake: ● الرسالة : " + "**" +
                                        "\n" + "**" + args + "**")
                                    
                                    let embed = new Discord.RichEmbed()
                                         .setAuthor(message.author.username, message.author.avatarURL)
                                         .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
                                         .setThumbnail(message.author.avatarURL)
                                         .setFooter("By : Univers Team !")
                                                                                    
                                    
                                    message.channel.send(embed);
                                    
                                    
                                    }
                                        
                                    }); 






client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
 
    if (command == "leave") {
       
 
        if(message.author.id != "415595760990552065","314845344313901057") return message.reply("**Sorry, you don't have permission to use this!**");
 
       
        if(!args[0] || args[1]) return message.reply(`**${prefix}leave <guild_id>**`);
        let definedGuild = client.guilds.get(args[0])
        if(!definedGuild) return message.reply(`** 404 : invalid guild id or this guild delted**`);
        client.guilds.get(args[0]).leave()
        .catch(error => { return message.reply(error.message) })
    }    
})




client.on('message', rw => {
  if (rw.content.startsWith('-voiceban')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
let men = rw.mentions.users.first()
let mas = rw.author
if(!men) return rw.channel.send('**MONTION THE MEMBER**');
rw.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("#00FFFF")
.setDescription(`**
 <@${men.id}>
YOU CANT JOIN THE VOICE ROOM
BANNER : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("#00FFFF")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
BANNED
BANNER : <@${rw.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(10000)})
    }
})
 
 //فكه
client.on('message', rw => {
  if (rw.content.startsWith('-voiceunban')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
 let men = rw.mentions.users.first()
 let mas = rw.author
 if(!men) return rw.channel.send('**MONTION THE MEMBER**');
 rw.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("#00FFFF")
.setDescription(`**
 <@${men.id}>
 Welcome Back
Back With : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("#00FFFF")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
GO FOR VOICE NOW
With : <@${rw.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(15000)})
    }
}) 









client.on('message',message =>{
    var prefix = "-";
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#00FFFF")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.discordapp.com/attachments/442414506430169098/489929808244113409/JPEG_20180913_232108.jpg")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });


client.on("ready", async () => {
    if(client.guilds.size > 1) {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
        console.log(`${client.user.username} is online on ${client.guilds.size} servers!`)
    } else {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
        console.log(`${client.user.username} is online on ${client.guilds.size} server!`)
    }
    client.user.setStatus("online");
});

client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    if(client.guilds.size > 1) {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
    } else {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
    }
});

client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    if(client.guilds.size > 1) {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
    } else {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
    }
});

client.on("message", async () => {
  
})


client.on("ready", async () => {
    if(client.users.size > 1) {
        client.user.setActivity(`With ${client.users.size} Member`);
        console.log(`${client.user.username} With ${client.users.size} Member`)
    } else {
        client.user.setActivity(`With ${client.users.size} Member`);
        console.log(`${client.user.username} With ${client.users.size} Member`)
    }
    client.user.setStatus("online");
});

client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    if(client.users.size > 1) {
        client.user.setActivity(`With ${client.users.size} Member`);
    } else {
        client.user.setActivity(`With ${client.users.size} Member`);
    }
});

client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    if(client.users.size > 1) {
        client.user.setActivity(`With ${client.users.size} Member`);
    } else {
        client.user.setActivity(`With ${client.users.size} Member`);
    }
});


client.on("message", async () => {
  
})



client.on('message', message => { 
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return
message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله : ${args}`)
.setDescription(`**برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست**`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))

var EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
var NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

var EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
var NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });


EmbedBc.on("collect", r => {

message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});




client.on('message', message => {
    if(message.content == '-members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Server Members Stats**
Online :   **${message.guild.members.filter(m=>m.presence.status == 'online').size}
** DND :    **   ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
** Idle :     ** ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
** Offline :  ** ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
** Members COunt: ** ${message.guild.memberCount}**`)   
         message.channel.send({embed});
    }
});






client.on('message', message => { 
let prefix = '-'
    if (message.content.startsWith(prefix + 'elist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});



//only-hi
client.on('message', message => {
    if (message.content.startsWith('snow')){
         let ra3d = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#00FFFF")
      .setDescription(" **Yo ! Im The New Discord Bot**")
         
         
      message.channel.sendEmbed(ra3d);
        }
    });




//dm
client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var stewart = new Discord.RichEmbed()
            .setColor('#00FFFF')
            .setTimestamp()
            .setTitle('``رساله جديده في خاص البوت``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("526848410008158218").send({ embed: stewart });
    }
});




//count-server
client.on('message', message => {
    if (!message.channel.guild) return;
if(message.content =='-count')
var SaifDz = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL)
.setTitle(' :snowflake: | Members info')
.addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
message.channel.send(SaifDz);
});





///link
client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
          .setDescription("**تم أرسال الرابط برسالة خاصة**")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('**طلب بواسطة:** ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("#00FFF")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 5 **")
      message.author.sendEmbed(Embed11)
    }
}); 








//『${prefix}』
client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FFFF")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**

╭━━━╮╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃╭━╮┃╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰━━┳━╮╭━━┳╮╭╮╭┫╰╯╰┳━┻╮╭╯
╰━━╮┃╭╮┫╭╮┃╰╯╰╯┃╭━╮┃╭╮┃┃
┃╰━╯┃┃┃┃╰╯┣╮╭╮╭┫╰━╯┃╰╯┃╰╮
╰━━━┻╯╰┻━━╯╰╯╰╯╰━━━┻━━┻━╯
   **
   -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
           ***General Commands*** :snowflake:
   **
   **-id**
 💠 معلومات عن حسابك
   **-sug**
💠 الإقتراحات 
يتطلب وجود رووم بإسم [ suggestions ]
   **-emoji** 
💠 يحول كلامك إلى إيموجيات
   **-bans**
💠 مجوع عدد الأشخاص المحضورين من السيرفر
   **-server** 
💠 معلومات عن السيرفر
   **-image **
💠 يعرض صوره السيرفر
   **-avatar** 
💠 يعرض صورتك او صوره شخص
   **-elist** 
💠 يعطيك كل اموجيات السيرفر
   **-invites** 
💠 يعرض كم ضياف 
   **-topinv **
💠 اكثر الاعضاء الي قامو بنشر السيرفر
   **-contact** 
💠 ارسال رسلة الى صاحب البوت او اقتراح
   **-count** 
💠 عدد الاعضاء السيرفر
   **-channel **
💠 يعطيك معلومات الروم  
   **-members** 
💠 معلومات عن الاعضاء
   **
   **-new**
💠 لفتح تذكرة بهدف التواصل مع الإدارة.
   `)
   message.author.sendEmbed(embed)
   
   }
   });  

client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FFFF")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
   -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
           ***Administrative Commands*** :snowflake:
   **
   **-move [user] ** 
💠 لسحب عضو اليك في روم صوتي
   **-role** 
💠 يعرض لك اعدادات الرتب
   **-vkick** 
💠 طرد العضو من الروم
   **-clear** 
💠 لمسح الشات بعدد او بدون
   **-closechannel **
💠 قفل المحادثة في الروم
   **-openchannel**
💠 فتح المحادثة في الروم
   **-showchannel**
💠 لأظهار الروم
   **-hidechannel **
💠 لأخفاء الروم
   **-mute **
💠 اعضاء ميوت كتابي لعضو في السيرفر
   **-unmute** 
💠 فك الميوت عن عضو في السيرفر
   **-ban **
💠 حضر عضو من السيرفر
   **-kick** 
💠 طرد عضو من السيرفر
   **-voiceban **
💠 تبنيد العضو من الرومات الصوتية
   **-voiceunban** 
💠 فك باند الرومات عن العضو
**
           ***Bot Commands*** :snowflake:
  **
   **-ping **
💠 يعرض لك سرعه اتصال البوت
   **-support** 
💠 سيرفر الدعم القني و المساعده
   **-invite** 
💠 اضافه البوت
   **-bot** 
💠 معلومات عن البوت
   **
   -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **BOT By: |** <@314845344313901057> **|-|** <@415595760990552065> **|**


   `)
   message.author.sendEmbed(embed)
   
   }
   });  









var Canvas = require('canvas')


client.on('message', message => {

    if(message.content.startsWith(prefix + 'id')) {
if(!message.channel.guild) return;
      var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
         var heg;
         if(men) {
             heg = men
         } else {
             heg = message.author
         }
       var mentionned = message.mentions.members.first();
          var h;
         if(mentionned) {
             h = mentionned
         } else {
             h = message.member
         }
  moment.locale('ar');
    const w = ['nom/id1.png','nom/id2.png','nom/id3.png','nom/id4.png','nom/id5.png']
        let Image = Canvas.Image,
            canvas = new Canvas(500, 500),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 500, 500);

})
                let url = h.user.displayAvatarURL.endsWith(".webp") ? h.user.displayAvatarURL.slice(5, -20) + ".png" : h.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
  //time dateformet
  const millis = new Date().getTime() - h.user.createdAt.getTime();
  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy');
  const stats2 = ['online', 'Low', 'Medium', 'Insane'];
  const days = millis / 1000 / 60 / 60 / 24;
            dateFormat(now, 'dddd, mmmm dS, yyyy');
            
        
                          //دخولك الديسكورد
                          var day = `Since ${days.toFixed(0)} Day`
                          ctx.font = '25px Geneva';
                          ctx.fontSize = '20px';
                          ctx.fillStyle = "#ffffff";
                          ctx.textAlign = "center";
                          ctx.fillText(day, 118, 103)
              //wl
              var millis1;
        if(mentionned){
            var millis1 = new Date().getTime() - mentionned.joinedAt
        } else {
            var millis1 = new Date().getTime() - moment(message.member.joinedAt);;
            
        }

  const days1 = millis1 / 1000 / 60 / 60 / 24;
  
                        //دخولك السيرفر
                        var day2 = `Since ${days1.toFixed(0)} Day`
                        ctx.font = '25px Geneva';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(day2, 377, 103); 

                        //ur name
                        ctx.font = '27px Geneva';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(h.user.username, 250, 365);
                        //tag
                        ctx.font = '27px Geneva';
                        ctx.fontSize = '45px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`#${heg.discriminator}`, 120, 450);
                        
                        //حالتك
                           let status;
    if (h.presence.status === 'online') {
        status = 'Online';
    } else if (h.presence.status === 'dnd') {
        status = 'Dont Disturb';
    } else if (h.presence.status === 'idle') {
        status = 'Idle';
    } else if (h.presence.status === 'offline') {
        status = 'Offline';
    }
                        ctx.font = '27px Geneva';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${status}`, 375, 450);
                        
                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(250, 238, 64, 0, Math.PI*2, true); 
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 185, 172, 130, 130 );
                         
     message.channel.sendFile(canvas.toBuffer())
})
   })

} });













client.login(process.env.BOT_TOKEN);
