const Discord = require('discord.js');
const commando = require('discord.js-commando');
const fs = require('fs');
const client = new Discord.Client({disableEveryone: true});
const cClient = new commando.Client({
    commandPrefix: 'p!'
});
const cfg = require('./config.json');
const time = require('./date');
const xp = require('./xp.json');
const info = require('./info.json');
const mn = require('./money.json')
//---- command set
/*
cClient.on('message', async message =>{
    let ms = message.content.split(' ');
    let stwh = ms[0]
    console.log(stwh)
})*/
//----libraries
cClient.registry.registerDefaults();
//----
cClient.registry.registerGroup('simple', 'Simple');
cClient.registry.registerGroup('game','Games');
cClient.registry.registerGroup('bot', 'Bot');
cClient.registry.registerGroup('int', 'Interações');
cClient.registry.registerGroup('adm', 'Administração');
cClient.registry.registerCommandsIn(__dirname + "/cmds");
//----Registro de commandos

cClient.on('message', (message) =>{
    let ms = message.content.split(' ');
    let stwh = ms[0]
    //console.log(stwh)
    if(!stwh.startsWith('p!')){
        if(message.author.bot === false){
            infoUserName = message.author.username+'#'+message.author.discriminator
        if(!info[message.author.id]){
            info[message.author.id]={
                name:infoUserName,
                stats:'Solteiro/a',
                com:' '
            };
        }

        fs.writeFile("./info.json", JSON.stringify(info), (err) => {
            if (err) console.log(err)
        });
        }
    }
})

cClient.on('message',(message) => {
    let ms = message.content.split(' ');
    let stwh = ms[0]
    //console.log(stwh)
    if(!stwh.startsWith('p!')){
        if(message.author.bot === false){
            let mnAdd = Math.floor(Math.random()* 17)+1;
            console.log(mnAdd);
            mnUserName = message.author.username+'#'+message.author.discriminator;
            if(!mn[message.author.id]){
                mn[message.author.id]={
                    name: mnUserName,
                    value:13
                }
            }
            curMn =mn[message.author.id].value;
            mn[message.author.id].value = curMn+mnAdd;
            fs.writeFile("./money.json", JSON.stringify(mn), (err) => {
                if (err) console.log(err)
            });
        };
    }
})

cClient.on('message', (message)=>{
    let ms = message.content.split(' ');
    let stwh = ms[0]
    //console.log(stwh)
    if(!stwh.startsWith('p!')){
        if(message.author.bot === false){
            let xpAdd = Math.floor(Math.random() * 7)+ 8;
            console.log(xpAdd)
            xpUserName = message.author.username+'#'+message.author.discriminator
            if(!xp[message.author.id]){
                xp[message.author.id]={
                    name:xpUserName,
                    xp:0,
                    level: 1
                };
            }
        
        
            let curxp = xp[message.author.id].xp;
            let curLvl = xp[message.author.id].level;
            let nxtLvl = xp[message.author.id].level * 500;
            xp[message.author.id].xp = curxp+xpAdd;
            if(nxtLvl <= xp[message.author.id].xp){
                xp[message.author.id].level = curLvl+1; 
                let lvlup = new Discord.RichEmbed()
                .setTitle('Level Up🆙')
                .setDescription(`**${message.author.username}** Você foi promovido de Level Parabéns! 🆙`)
                .setColor('ff9c9c')
                .addField('Você está no nivel ↨ ', curLvl)
                
                message.channel.send(lvlup)
            }
            fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                if (err) console.log(err)
            });
        }
    }
});
//----login
cClient.login(cfg.token);

//----EVENTOs
cClient.on('ready', async message => {
    console.log(`O Bot esta ligado seja bem vindo`);
    console.log(`Iniciando sessão como: ${cClient.user.username}#${cClient.user.discriminator}`);
    let link = await cClient.generateInvite(["ADMINISTRATOR"])
    console.log(link)
});

cClient.on('ready', () => {
    console.log('welcome ok...')
    cClient.on('guildMemberAdd', member => {
        var embed = new Discord.RichEmbed()
        .setTitle('**Seja Bem Vindo ao servidor💸**')
        .setDescription(`${member} esperamos que se divirta no nosso servidor, atenciosamente a Staff`)
        .setThumbnail(member.user.avatarURL)
        .addField('info:',`Esse é um bot exclusivo do servidor PDV, caso veja ele sendo usado em outro servidor entre em contato com @${cfg.sOwnerName}`)
        .setColor('ff9c9c');
        member.send(embed);
    });
});
cClient.on('ready', ()=>{
    console.log('process of mention ok..')
    cClient.on('message',message=>{
        let user = message.mentions.users.first();
        //if(message.mentions.users.size < 1) return message.reply("Você não mencionou ninguém");
        var zoename =[
            '@Zoe#0261',
            'Zoe',
            'zoe',
            '@zoe'
        ]
        if(zoename.indexOf(message.content)>=0){
            message.reply ('Meu prefixo é p! use p!ajuda ou p!help para obter informações dos comandos.')
        }
    });
});
cClient.on('ready',()=>{
    console.log('Executando Processo de Interação')
    cClient.on('message',message=>{
        var whore=[
            'Buceta',
            'buceta',
            'bct',
            'vaginha',
            'xeraca',
            'ppk',
            'pika',
            'pinto',
            'penis',
            'piroca',
            'Piroca',
            'Pika',
            'Pinto'
        ]
        if(whore.indexOf(message.content)>=0){
            var rnd = Math.floor(Math.random() *100)+1;
            if(rnd >=83){
                message.reply('Cade sua Educação???? :rage: ')
            }
        }
        var ff =[
            'Free fire',
            'ff',
            'free fire',
            'fogo gratis',
            'fogo livre'
        ]
        if(ff.indexOf(message.content)>=0){
            var rnd = Math.floor(Math.random() *100)+1;
            if(rnd >=83){
                message.reply('Meeeh o cara jogo free fire :water_buffalo: ')
            }
        }
        /*if(message.content === 'ban'){
            message.channel.send('dεяყcк vค¡ тε Ъคห¡я ƒ¡łнσ dค puтค :heart:')
        }*/
    })
})
cClient.on('ready', () => {
     console.log('Executando processo de presence')
        var rnd = 1;
        const rndinit = 1;
        setTimeout(fon, 3000);
    function fon(){
        switch(rnd){
            case 3: 
            cClient.user.setPresence({ game: {name: 'Amor para todos💝', type:'STREAMING', url:'https://www.twitch.tv/nelsaogarcia'}, status: 'idle' })
            rnd = rndinit;
                break;
            case 2: 
                cClient.user.setPresence({ game: {name: 'Bem vindos a PDV🔥💸', type:'STREAMING', url:'https://www.twitch.tv/nelsaogarcia'}, status: 'idle' })
                rnd++;
                break;
            case 1: 
            cClient.user.setPresence({ game: {name: 'Visual Studio Code PDVBOT2.1💸', type:'PLAYING', url:'https://www.twitch.tv/nelsaogarcia'}, status: 'idle' })
            rnd++;
                break;
            
        }
        setTimeout(fon, 3000);
    }
    
})