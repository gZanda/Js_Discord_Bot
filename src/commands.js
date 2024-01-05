const { REST, Routes } = require('discord.js');
require('dotenv').config();

// DECLARE THE COMMANDS HERE WITH "name" -> "name" can't be CAPITALIZED
const commands = [
    {
        name: 'aviadar',
        description: 'Replies with viado!',
    },
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
  ];

// DON'T TOUCH THIS
const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

(async () => {
    try {
    console.log('Started refreshing application (/) commands.');

    await rest.put( Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.GUILD_ID, { body: commands }));

    console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
    console.error(error);
    }
})();