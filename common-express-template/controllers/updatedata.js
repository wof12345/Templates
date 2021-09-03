import { MongoClient } from 'mongodb';
const url = "mongodb+srv://root:HumanityRules1234567890@cluster0.4m8b8.mongodb.net/database1?retryWrites=true&w=majority";



function hello5(req, res) {
    console.log('working');

    let data = req.body;
    let document_id = data[0];


    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
        var dbo = db.db("database1");
        var myobj = {
            _id: data[0],
            data: data
        };
        dbo.collection("formData").updateOne({ _id: document_id }, {
            $push: {
                "UserData": data[1]
            }
        })
        console.log("update success");
        console.log(document_id, data[1]);

    });
}

export default hello5;