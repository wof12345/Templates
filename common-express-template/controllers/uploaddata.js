import { MongoClient } from 'mongodb';
const url = "mongodb+srv://root:HumanityRules1234567890@cluster0.4m8b8.mongodb.net/database1?retryWrites=true&w=majority";



function hello4(req, res) {
    let data = req.body;

    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
        var dbo = db.db("database1");
        var myobj = {
            _id: data[0],
            FormData: data,
            UserData: []
        };
        dbo.collection("formData").insertOne(myobj, function(err, res) {
            if(err) throw err;
            console.log(`Upload data success${data}`);
            db.close();
        });
    });
}

export default hello4;