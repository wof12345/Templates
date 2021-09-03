import { MongoClient } from 'mongodb';
const url = "mongodb+srv://root:HumanityRules1234567890@cluster0.4m8b8.mongodb.net/database1?retryWrites=true&w=majority";



function deleteForm(req, res) {
    let data = req.body;
    console.log(data);

    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
        var dbo = db.db("database1");
        dbo.collection("formData").deleteOne({ _id: data.seed })
        console.log("delete success!");

    });
}

export default deleteForm;