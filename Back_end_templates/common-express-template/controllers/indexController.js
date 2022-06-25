import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://root:HumanityRules1234567890@cluster0.4m8b8.mongodb.net/database1?retryWrites=true&w=majority";
export const getAllData = (req, res) => {
  console.log("Request made at getAllData.");

  connectGetData();

  async function connectGetData() {
    try {
      const client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      const db = client.db("database1");

      const items = await db.collection("formData").find({}).toArray();
      console.log(items);

      res.json(items);
      client.close();
    } catch (error) {
      console.log("error", error);
    }
  }
};

export const getSpecificData = (req, res) => {
  let data = "getSpecificData";

  console.log(`${data} data request made!`);
  connectGetData();

  async function connectGetData() {
    try {
      const client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      const db = client.db("database1");

      const items = await db.collection(`${data}`).find({}).toArray();
      console.log(items);

      res.json(items);
      client.close();
    } catch (error) {
      console.log("error", error);
    }
  }
};

export function deleteForm(req, response) {
  let data = req.body;
  console.log(data);

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("database1");
    dbo.collection("formData").deleteOne({ _id: data.seed });
    console.log(`Delete data success${data}`);
    data = "delete";
    response.json(data);
  });
}

export async function updateData(req, response) {
  console.log("working");

  let data = req.body;
  let document_id = data[0];

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("database1");
    var myobj = {
      _id: data[0],
      data: data,
    };
    dbo.collection("formData").updateOne(
      { _id: document_id },
      {
        $push: {
          UserData: data[1],
        },
      }
    );
    console.log(`Update data success${data}`);
    response.json(data);
    console.log(document_id, data[1]);
  });
}

export async function uploadData(req, response) {
  let data = req.body;

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("database1");
    var myobj = {
      _id: data[0],
      FormData: data,
      UserData: [],
    };
    dbo.collection("formData").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log(`Upload data success${data}`);
      response.json(data);
      db.close();
    });
  });
}
