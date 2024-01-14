const { REST, Routes } = require('discord.js');
require('dotenv').config();

// DECLARE THE COMMANDS HERE WITH "name" -> "name" can't be CAPITALIZED
const commands = [
    {
        name: 'aviadar',
        description: 'Te deixa mais viado ainda',
    },
    {
        name: 'ofender',
        description: 'Xinga um usuário',
        options: [
            {
                name: 'user',
                type: 6,
                description: 'Usuário para ofender',
                required: true,
            },
        ],
    },
    {
        name: 'gato',
        description: 'Manda um gato de bosta no chat',
    },
    {
        name: 'help',
        description: 'Mostra os comandos de bosta',
    }
  ];

// DON'T TOUCH THIS
const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        // Se der merda, é aqui -> Retira , Roda e Coloca de novo
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {
            body: commands,
        });

        console.log('Successfully reloaded application (/) commands.');
        console.log(commands)
    } catch (error) {
        console.error('Error refreshing application (/) commands:', error.message);
    }
})();