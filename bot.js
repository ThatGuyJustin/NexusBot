const chalk = require('chalk');
global.config = require('./config.json');
global.Eris = require('eris');
global.sqlite3 = require('sqlite3').verbose();
global.moment = require('moment');
global.cmdUtil = require('./modules/cmdutil');
global.client = new Eris.CommandClient(config.token, {disableEveryone: true, autoreconnect: true}, {
    defaultHelpCommand: true,
    description: 'Bot made to assist the Dueling Nexus server.',
    name: 'NexusBot',
    owner: 'Justin#1337',
    prefix: ['@mention', 'n!'],
    defaultCommandOptions: {
        requirements: {
            custom: cmdUtil.checkPermission
        }
    }
});
global.logger = require('./modules/logging');

// Log that the process has started
logger.info('Process Started');

// Load all the database essentials
global.DBHelper = require('./modules/dbhelper');
global.Database = DBHelper.startDB();

Database.getAsync = function (sql) {
    var that = this;
    return new Promise(function (resolve, reject) {
        that.get(sql, function (err, row) {
        if (err)
          reject(err);
        else
          resolve(row);
        });
    });
};
  
Database.getAllAsync = function (sql) {
    var that = this;
    return new Promise(function (resolve, reject) {
        that.all(sql, function (err, rows) {
        if (err)
            reject(err);
        else
            resolve(rows);
        });
    });
};

// Move on to the bot startup and command registration.
global.fs = require('fs');

client.on('ready', async () => {

    logger.info(`Bot Connected! (${client.user.username}#${client.user.discriminator})`)

})

let commands = fs.readdirSync('./cmds/')
    
let count = 0;

commands.forEach(cmd => {
    let command = require(`./cmds/${cmd}`);
    let name = cmd.replace('.js', '');
    try{
        command.initCmd();
        logger.info(`Command "${name}" has been registered.`)
        count++;
    }catch(err){
        logger.error(`Error while enabling Command ${name}:\n\n ${err}\n\n`);
    }
});

logger.info(`Commands Fully Loaded! (${count} Total)`);

// logger.info('Test');
// logger.error('Test');
// logger.warning('Test');
// logger.custom('{red Test}')

process.on('warning', (warning) => {
    // console.warn(warning.name);    // Print the warning name
    // console.warn(warning.message); // Print the warning message
    // console.warn(warning.stack);   // Print the stack trace
    logger.warning(warning);
});

process.on("SIGINT", () => {
    logger.custom(chalk`{cyan [Process]} Process has been called to shutdown....`);
    client.disconnect();
    logger.custom(chalk`{cyan [Process]} Bot has Disconnected....`);
    Database.close();
    logger.custom(chalk`{cyan [Process]} Database shutting down.`);
});

client.connect();