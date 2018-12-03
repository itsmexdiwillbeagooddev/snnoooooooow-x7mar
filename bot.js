const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
const canvas = require('canvas-prebuilt');
const jimp = require('jimp');
const ytdl = require('ytdl-core');
const request = require('request');
const dateFormat = require('dateformat');
const google = require('google-it');
const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const moment = require('moment');
const pretty = require('pretty-ms'); 
const zalgo = require('zalgolize');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const client = new Discord.Client();
const prefix = '-'
ti={}  
spee={};

//source
client.on('ready', () => {
        console.log('╔[════════════]╗')
        console.log(' Bot Is Online')
        console.log('╚[════════════]╝')
        console.log('')
        console.log('╔[════════════════════════════════════]╗');
        console.log('')
        console.log(' Logged in as * [ " ${client.user.username} " ] ');
        console.log( ' Welcome Bro , UserName * [ " ${client.user.username} " ]' );
        console.log( :  * [ " ${client.user.tag} " ]);
        console.log('')
        console.log('╚[════════════════════════════════════]╝')
        console.log('')
        console.log('╔[════════════]╗')
        console.log('')
        console.log( 'Have Fun - Snow Team  ')
        console.log('')
        console.log('╚[════════════]╝')
        
});




//streaming
client.on('ready', function(){
    var ms = 100000 ;
    var setGame = [`Coming Soon !`,`Snow Bot ❆`];
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
    }, ms);100000


//dnd
client.on('ready', () => {
    client.user.setStatus("dnd");
 
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




//montion bot
client.on('ebnklb',function(ebnklb) {
    
    if(ebnklb.content.startsWith(`<@${client.user.id}>`)) {
        ebnklb.channel.send('**? كيف اقدر اساعدك**')
        ebnklb.channel.send('**My Prefix** `-`')

    }
});




//creat colors
client.on('message', ra3d => {
var prefix = "-";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });



//thanks
client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(` :rose: **شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});




































client.login(process.env.BOT_TOKEN);
