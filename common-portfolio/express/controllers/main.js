import { MongoClient } from 'mongodb';
const hello = (req, res) => {

    const url = "mongodb+srv://root:HumanityRules1234567890@cluster0.4m8b8.mongodb.net/database1?retryWrites=true&w=majority";

    connectGetData();


    async function connectGetData() {
        try {
            const client = await MongoClient.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            // specify the DB's name
            const db = client.db('database1');
            // execute find query
            const items = await db.collection('admin info').find({}).toArray();
            res.send(`{zzz${items[0]._id}zzz${items[0].admin_name}zzz${items[0].admin_password}zzz}`);
            console.log(items[0]);
            // close connection
            client.close();
        } catch(error) {
            console.log("error");

        }
    }
}

export default hello;