// Imports
const {Client, IntentsBitField, EmbedBuilder} = require ('discord.js');
const axios = require('axios');
require('dotenv').config();

// Bot Intents ( Permissions and Capabilities )
const client = new Client ({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
    ],
})

// Event Listener -> Display bot Status on Log
client.on ('ready', () => {
    console.log ('✅ Gato de bosta is Online')
});

// Event Listener -> Simple Text Commands -> DEFINE HERE WHAT THE BOT GONNA DO WITH THE COMMAND
client.on('messageCreate', async (message)=>{
    if (message.author.bot) return;

    else if (message.content.toLowerCase() === 'oi'){
        message.channel.send('**Oiii, Vc é viado!**  (  ≽^•⩊•^≼  )');	
    }

    else if (message.mentions.has(client.user) && message.content.includes("oi")) {
        // Respond to the mention
        message.channel.send(`**Oi, o q vc quer seu viado ?**  (  ≽^•⩊•^≼  )`);
    }

    else if (message.mentions.has(client.user) && message.content.toLowerCase().includes("reação")) {
        // Respond to the mention
        const response = await axios.get(`https://g.tenor.com/v1/random?q=cat_reaction&key=${process.env.TENOR_KEY}&limit=3&media_filter=minimal`)
        const gifUrl = response.data.results[0].media[0].gif.url;
        const embed = new EmbedBuilder().setTitle("≽ ^ • ⩊ • ^ ≼ \n Minha honesta reação:").setImage(gifUrl).setColor("Purple");
        message.channel.send({embeds: [embed]});
    }

    else if (message.mentions.has(client.user) && message.content.toLowerCase().includes("porra") || message.content.toLowerCase().includes("poha")) {
        const embed = new EmbedBuilder().setTitle("**≽ ^ • ⩊ • ^ ≼ \n \n SIM! \n NÓS DA O CU PORRA!**").setImage("https://pbs.twimg.com/media/F8fLk3BXYAAp6KT.jpg").setColor("Purple");
        message.channel.send({embeds: [embed]});
    }

    else message.channel.send(`**≽ ^ • ⩊ • ^ ≼  \n Ops! Parece que um viado me mencinou atoa.**  `);
});

// Event Listener -> Slash Commands -> DEFINE HERE WHAT THE BOT GONNA DO WITH THE COMMAND
client.on('interactionCreate', (interaction)=>{
    if (!interaction.isChatInputCommand()) return;

    else if (interaction.commandName === 'ping'){
        interaction.reply('**Pong!**  (  ≽^•⩊•^≼  )');
    }

    else if (interaction.commandName === 'aviadar'){
        interaction.reply('**Agora vc é V I A D O!**  (  ≽^•⩊•^≼  )');
    }

    else if (interaction.commandName === 'ofender'){
        const user = interaction.options.getUser('user');
        interaction.reply(`**Vai se foder ${user}!**🖕​🤬  (  ≽^•⩊•^≼  )`);
    }

    else if (interaction.commandName === 'embed'){
        const embed = new EmbedBuilder().setTitle("Tittle Sample").setDescription("Description Sample").setColor("Purple")
        interaction.reply({embeds: [embed]});
    }

    else if (interaction.commandName === 'gato'){
        const embed = new EmbedBuilder().setTitle("**≽ ^ • ⩊ • ^ ≼**").setImage("https://ih0.redbubble.net/image.4583816833.9469/raf,360x360,075,t,fafafa:ca443f4786.jpg").setColor("Purple");
        interaction.reply({embeds: [embed]});
    }

    console.log(interaction.commandName);
})

// Token Configuration
client.login(process.env.BOT_TOKEN);