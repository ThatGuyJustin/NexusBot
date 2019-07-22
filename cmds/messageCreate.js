let command_info = {
    label: 'createmessage'
}

function initCmd(){
    client.registerCommand(command_info.label, Cmd, {argsRequired: true});
}
exports.initCmd = initCmd;

function Cmd(msg, args){
    let content = null;
    let embed = null;

    if(msg.content.indexOf('embed:') > -1){
        embed = getEmbed(msg.content);
        content = msg.content.slice(16, msg.content.indexOf('embed:') - 2)
    }else{
        content = msg.content.slice(16, msg.content.length)
    }
    let message = new messagesClass.Message(msg.author.id);
    if (embed)
        message.embed = embed;
    if (content)
        message.content = content;
    messageCache.set(msg.author.id, message);
    return msg.channel.createMessage('A Message has been created with the content you gave. To preview it, use the command:\n`n!previewmessage`')
}

function getEmbed(msg){
    let startIndex = msg.indexOf('embed:') + 11;
    let endIndex = msg.length - 4;

    let new_string = msg.slice(startIndex, endIndex);
    while(new_string.indexOf('\\`') > -1){
        new_string = new_string.replace('\\`', '`')
    }
    string = JSON.stringify(new_string);
    final = JSON.parse(string);
    return final;
}