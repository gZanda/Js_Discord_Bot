// Imports
const {Client, IntentsBitField, EmbedBuilder} = require ('discord.js')
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

// Event Listener -> Response to "Oi"
client.on('messageCreate', (message)=>{
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'oi'){
        message.channel.send('**Oiii, Vc é viado!**  (  ≽^•⩊•^≼  )');	
    }
});

// Event Listener -> Response to Slash Commands -> DEFINE HERE WHAT THE BOT GONNA DO WITH THE COMMAND
client.on('interactionCreate', (interaction)=>{
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping'){
        interaction.reply('**Pong!**  (  ≽^•⩊•^≼  )');
    }

    if (interaction.commandName === 'aviadar'){
        interaction.reply('**Agora vc é V I A D O!**  (  ≽^•⩊•^≼  )');
    }

    if (interaction.commandName === 'ofender'){
        const user = interaction.options.getUser('user');
        interaction.reply(`**Vai se foder ${user}!**🖕​🤬  (  ≽^•⩊•^≼  )`);
    }

    if (interaction.commandName === 'embed'){
        const embed = new EmbedBuilder().setTitle("Tittle Sample").setDescription("Description Sample").setColor("Purple")
        interaction.reply({embeds: [embed]});
    }

    console.log(interaction.commandName);
})

// Token Configuration
client.login(process.env.BOT_TOKEN);