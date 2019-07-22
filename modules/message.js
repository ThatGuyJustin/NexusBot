class Message {

    constructor(owner){
        this.owner = owner;
        this._embed = null;
        this._file = null;
        this._content = null;
    }
    get embed() {
        return this._embed;
    }

    set embed(data) {
        this._embed = data;
        return;
    }

    set content(data){
        this._content = data;
        return;
    }

    get content(){
        return this._content;
    }

    set file(data){
        this._file = data;
        return;
    }

    get file() {
        return this._file;
    }

    save() {
        return 'Not Implemented Yet!';
    }
}

exports.Message = Message;