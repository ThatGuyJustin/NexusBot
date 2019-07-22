let command_info = {
    label: 'ping'
}

function initCmd(){
    client.registerCommand(command_info.label, Cmd, {});
}
exports.initCmd = initCmd;

function Cmd(msg, args){
    msg.channel.createMessage('Get ponged!');
}