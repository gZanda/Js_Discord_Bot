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
        const embed = new EmbedBuilder().setDescription(`**≽ ^ • ⩊ • ^ ≼ \n \n Oiii ${message.author}, vc é V I A D O**`).setColor("Purple");
        message.channel.send({embeds: [embed]});	
    }

    else if (message.mentions.has(client.user) && message.content.toLowerCase().includes("oi")) {
        // Respond to the mention
        const embed = new EmbedBuilder().setDescription(`**≽ ^ • ⩊ • ^ ≼ \n \n Oi ${message.author}, o q vc quer seu viado ?**`).setColor("Purple");
        message.channel.send({embeds: [embed]});
    }

    else if (message.mentions.has(client.user) && message.content.toLowerCase().includes("reação")) {
        // Respond to the mention
        const response = await axios.get(`https://g.tenor.com/v1/random?q=cat_reaction&key=${process.env.TENOR_KEY}&limit=3&media_filter=minimal`)
        const gifUrl = response.data.results[0].media[0].gif.url;
        const embed = new EmbedBuilder().setTitle("**≽ ^ • ⩊ • ^ ≼ \n \n Minha honesta reação 👇**").setImage(gifUrl).setColor("Purple");
        message.channel.send({embeds: [embed]});
    }

    else if (message.mentions.has(client.user) && message.content.toLowerCase().includes("porra") || message.content.toLowerCase().includes("poha")) {
        const embed = new EmbedBuilder().setTitle("**≽ ^ • ⩊ • ^ ≼ \n \n NÓS DA O CU PORRA**").setImage("https://pbs.twimg.com/media/F8fLk3BXYAAp6KT.jpg").setColor("Purple");
        message.channel.send({embeds: [embed]});
    }

    else if (message.attachments.size > 0) {
        const response = await axios.get(`https://g.tenor.com/v1/random?q=cat_reaction&key=${process.env.TENOR_KEY}&limit=3&media_filter=minimal`);
        const gifUrl = response.data.results[0].media[0].gif.url;
        const embed = new EmbedBuilder().setTitle("**≽ ^ • ⩊ • ^ ≼ \n \n Minha honesta reação 👇**").setImage(gifUrl).setColor("Purple");
        message.channel.send({embeds: [embed]});
    }

    else if (message.mentions.has(client.user)) {
        const embed = new EmbedBuilder().setTitle("**≽ ^ • ⩊ • ^ ≼ \n \n NÃO ENTENDI PORRA NENHUMA**").setImage("https://pbs.twimg.com/media/F4ZjUFWWgAA5oul.jpg").setColor("Purple");
        message.channel.send({embeds: [embed]});
    }
});

// Event Listener -> Slash Commands -> DEFINE HERE WHAT THE BOT GONNA DO WITH THE COMMAND
client.on('interactionCreate',async (interaction)=>{
    if (!interaction.isChatInputCommand()) return;

    else if (interaction.commandName === 'aviadar'){
        const response = await axios.get(`https://g.tenor.com/v1/random?q=congratulations_meme&key=${process.env.TENOR_KEY}&limit=3&media_filter=minimal`);
        const gifUrl = response.data.results[0].media[0].gif.url;
        const embed = new EmbedBuilder().setTitle(`**≽ ^ • ⩊ • ^ ≼ \n \n Parabéns 🥳 Agora você é V I A D O!**`).setImage(gifUrl).setColor("Purple");
        interaction.reply({embeds: [embed]});
    }

    else if (interaction.commandName === 'ofender'){
        const user = interaction.options.getUser('user');
        const embed = new EmbedBuilder().setDescription(`**≽ ^ • ⩊ • ^ ≼ \n \n Vai se foder ${user}!🖕​🤬**`).setColor("Purple");
        interaction.reply({embeds: [embed]});
    }

    else if (interaction.commandName === 'gato'){
        const embed = new EmbedBuilder().setTitle("**≽ ^ • ⩊ • ^ ≼ \n \n Olhem esse gato de B O S T A 👇**").setImage("https://ih0.redbubble.net/image.4583816833.9469/raf,360x360,075,t,fafafa:ca443f4786.jpg").setColor("Purple");
        interaction.reply({embeds: [embed]});
    }

    else if (interaction.commandName === 'help'){
        const embed = new EmbedBuilder().setTitle("**≽ ^ • ⩊ • ^ ≼ \n \n Comandos de B O S T A 👇**").setDescription(`**/aviadar \n /ofender \n /gato**`).setColor("Purple");
        interaction.reply({embeds: [embed]});
    }

    console.log(interaction.commandName);
})

// Token Configuration
client.login(process.env.BOT_TOKEN);