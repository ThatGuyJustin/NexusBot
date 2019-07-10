const chalk = require('chalk');

function info(msg){
    console.log(chalk`${currentTime()} | {green [Info]} ${msg}`);
}
exports.info = info;

function error(msg){
    console.error(chalk`${currentTime()} | {red [Error]} ${msg}`);
}
exports.error = error;

function warning(msg){
    console.warn(chalk`${currentTime()} | {yellow [Warning]} ${msg}`);
}
exports.warning = warning;

function currentTime(){
    let mom = require('moment-timezone');
    let time = mom.tz('America/New_York').format("MMM Do YYYY h:mm:ss a z"); // "July 12th 2012, 5:01:50 pm EST" 
    return chalk.gray(time)
}