global.config = require('config.json');
global.Eris = require('eris');
global.sqlite3 = require('sqlite3').verbose();
global.bot = new CommandClient(config.token, {disableEveryone: true, autoreconnect: true}, {
    defaultHelpCommand: true,
    description: 'Bot made to assist the Dueling Nexus server.',
    name: 'NexusBot',
    owner: 'Justin#1337',
    prefix: ['@mention', 'n!']
});

global.DBHelper = require('./modules/dbhelper');
global.Database = DBHelper.startDB();