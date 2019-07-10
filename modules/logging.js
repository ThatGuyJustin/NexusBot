function info(msg){
    console.log(`${currentTime()} | [Info] ${msg}`);
}
exports.info = info;

function error(msg){
    console.error(`${currentTime()} | [Error] ${msg}`);
}
exports.error = error;

function warning(msg){
    console.warn(`${currentTime()} | [Warning] ${msg}`);
}
exports.warning = warning;

function currentTime(){
    let mom = require('moment-timezone');
    return mom.tz('America/New_York').format("MMM Do YYYY h:mm:ss a z"); // "July 12th 2012, 5:01:50 pm EST"
}