// const { MongoClient } = require('mongodb');
// const url = "mongodb+srv://root:HumanityRules1234567890@cluster0.4m8b8.mongodb.net/database1?retryWrites=true&w=majority";

// connectGetData();


// async function connectGetData() {
//     try {
//         const client = await MongoClient.connect(url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         // specify the DB's name
//         const db = client.db('database1');
//         // execute find query
//         const items = await db.collection('admin info').find({}).toArray();
//         console.log(items);
//         // close connection
//         client.close();
//     } catch (error) {
//         console.log("error");

//     }
// }
import PouchDB from 'pouchdb';
var db = new PouchDB('http://root:HumanityRules1234567890@127.0.0.1:5984/admininfo');


$(document).ready(function() {

    (function getData() {
        db.get('01').then(function(doc) {
            admininfoDB.name = doc.name;
            admininfoDB.pass = doc.password;
            admininfoDB.city = doc.city;
            admininfoDB.continentName = doc.continentName;
            admininfoDB.continentCode = doc.continentCode;
        }).catch(function(err) {
            console.log(err);
        });
    })();


});