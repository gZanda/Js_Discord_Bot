// Imports
const {Client, IntentsBitField} = require ('discord.js')
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

// Event Listener
client.on ('ready', () => {
    console.log ('✅ Gato de bosta is Online')
});

// Response to messages
client.on('messageCreate', (message)=>{
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'oi'){
        message.channel.send('**Oiii, Vc é viado!** ( ≽^•⩊•^≼ ) ♡');	
    }
});

// Token Configuration
client.login(process.env.BOT_TOKEN);