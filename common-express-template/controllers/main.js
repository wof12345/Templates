import { MongoClient } from 'mongodb';

let generatedHtml = ` <h1>Your database</h1>
<table style=" border-collapse: collapse;">
#data
</table>`;

let tableItems = function(field1, field2, field3) {
    return ` <tr>
<td style="border: 1px solid black; padding:4px">${field1}</td>
<td style="border: 1px solid black; padding:4px">${field2}</td>
<td style="border: 1px solid black; padding:4px">${field3}</td>
</tr>`;
}

let tableStruc = `<tr>
<th style="border: 1px solid black; padding:4px;">ID</th>
<th style="border: 1px solid black; padding:4px;">admin_name</th>
<th style="border: 1px solid black; padding:4px;">admin_password</th>
</tr>`



// console.log(generatedHtml);


const hello = (req, res) => {
    console.log('User at home!');

    const url = "mongodb+srv://root:HumanityRules1234567890@cluster0.4m8b8.mongodb.net/database1?retryWrites=true&w=majority";

    connectGetData();


    async function connectGetData() {
        try {
            const client = await MongoClient.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            const db = client.db('database1');

            const items = await db.collection('admin info').find({}).toArray();
            console.log(items);

            items.forEach(elm => {
                tableStruc += tableItems(elm._id, elm.admin_name, elm.admin_password);
            })

            generatedHtml = generatedHtml.replace('#data', tableStruc);

            res.send(generatedHtml);
            client.close();
        } catch(error) {
            console.log("error", error);
        }
    }
}

export default hello;