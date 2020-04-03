var MongoClient = require('mongodb').MongoClient;
var dataBaseName = 'chikoo';
var url = "mongodb://localhost:3000/": dataBaseName;

//creating the database
MongoClient.connect(url, function(err, db} {
     (err) throw err;
    console.log("Database created by Hope Kodi!");
db.close();
});
