import { MongoClient } from 'mongodb';
const url = "mongodb+srv://root:HumanityRules1234567890@cluster0.4m8b8.mongodb.net/database1?retryWrites=true&w=majority";



function hello4(req, res) {
    let seed = req.body;

    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
        var dbo = db.db("database1");
        var myobj = { _id: seed };
        dbo.collection("currentActiveConnections").insertOne(myobj, function(err, res) {
            if(err) throw err;
            console.log(`actuve user id : ${seed}`);
            db.close();
        });
    });
}

export default hello4;