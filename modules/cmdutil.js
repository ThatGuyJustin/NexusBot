function checkPermission(msg){
    if(config.developers.indexOf(msg.author) > -1) return true;

    return false;
}
exports.checkPermission = checkPermission;