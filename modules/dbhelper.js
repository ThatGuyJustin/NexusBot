function startDB(){
    let db = new sqlite3.Database('./database.db', (err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('[DataBase] Database Loaded!'); 
    });
    db = DatabaseCheck(db);
    return db;
}
exports.startDB = startDB;

function DatabaseCheck(db){
    let embed_sql = `create table if not exists embeds (name text NOT NULL, creator_id text NOT NULL, title text, description text, url text, timestamp text, color int, image text, thumbnail text)`;
    let stored_sql = `create table if not exist messages (message_id text NOT NULL, channel_id text NOT NULL, sender_id text NOT NULL, locked bool DEFAULT false)`;

    db.run(stored_sql);
    db.run(embed_sql);
    return db;
}

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