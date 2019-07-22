let command_info = {
    label: 'previewmessage'
}

function initCmd(){
    client.registerCommand(command_info.label, Cmd, {});
}
exports.initCmd = initCmd;

function Cmd(msg, args){
    if(!messageCache.has(msg.author.id))
        return msg.channel.createMessage('Sorry, but it seems that you don\'t have a message to preview.');
    
    let message = messageCache.get(msg.author.id);
    msg.channel.createMessage({
        content: message.content,
        embed: JSON.parse(message.embed),
        disableEveryone: true
    });
}