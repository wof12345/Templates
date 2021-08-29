import { MongoClient } from 'mongodb';

const hello2 = (req, res) => {
    console.log('Request made at activeConnections.');
    const url = "mongodb+srv://root:HumanityRules1234567890@cluster0.4m8b8.mongodb.net/database1?retryWrites=true&w=majority";

    connectGetData();


    async function connectGetData() {
        try {
            const client = await MongoClient.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            const db = client.db('database1');

            const items = await db.collection('currentActiveConnections').find({}).toArray();
            console.log(items);

            res.json(items);
            client.close();
        } catch(error) {
            console.log("error", error);
        }
    }
}

export default hello2;