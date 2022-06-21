import { createPool } from "mysql2";

// import express from "express";

// const app = express();

const createConnection = createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  connectionLimit: 10,
  database: "world",
});

export const getAlldata = function (req, response) {
  let data;
  createConnection.query(`select * from customusertable`, function (err, res) {
    if (err) throw err;
    data = response.body = res;

    response.json(data);
  });
};

export const insertdata = (req, res) => {
  let data = req.body;

  createConnection.query(
    `INSERT INTO customusertable (UserNameEmail, UserPass, MobileNo, BirthDate, UserNo) VALUES ('${data[0]}', '${data[3]}', '${data[1]}', '${data[2]}', null)`,
    function (err, res) {
      if (err) throw err;
      return console.log("Data insertion success.");
    }
  );
};
