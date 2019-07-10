let command_info = {
    label: 'ping'
}

function initCmd(){
    client.registerCommand(command_info.label, pingCmd, {});
}
exports.initCmd = initCmd;

function pingCmd(msg, args){
    msg.channel.createMessage('Get ponged!');
}