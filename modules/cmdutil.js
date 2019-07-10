function checkPermission(msg){
    let can_run = false;
    if(config.developers.indexOf(msg.author.id) > -1) 
        can_run = true;
    
    return can_run;
}
exports.checkPermission = checkPermission;