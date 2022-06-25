import { response } from "express";
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
  console.log("Requested all data");

  createConnection.query(`select * from customusertable`, function (err, res) {
    if (err) throw err;
    data = res;

    response.json(data);
  });
};

export const getSpecificData = function (req, response) {
  let data = req.body;
  console.log(data);

  createConnection.query(
    `select * from customusertable where (Role = '${data[0]}' ${data[1]})`,
    function (err, res) {
      if (err) throw err;
      data = res;

      response.json(data);
    }
  );
};

export const insertdata = (req, response) => {
  let data = req.body;
  let msg = "";
  console.log(Object.keys(data).length);

  createConnection.query(
    `INSERT INTO customusertable (UserNameEmail, UserPass, MobileNo, BirthDate, UserNo, Role) VALUES ('${
      data[0]
    }', '${data[3]}', '${data[1]}', '${data[2]}', null, '${
      data[Object.keys(data).length - 1]
    }')`,
    function (err, res) {
      if (err) {
        msg = err;
        response.json(msg);
        return console.log(err);
      }

      msg = res;
      response.json(msg);
      return console.log("Data insertion success.");
    }
  );
};

export const updateSpecData = (req, response) => {
  let data = req.body;
  let msg = "";
  console.log(data);

  createConnection.query(
    ` UPDATE customusertable SET ${data[0]} WHERE UserNo = '${data[1]}';`,
    function (err, res) {
      if (err) {
        msg = err;
        response.json(msg);
        return console.log(err);
      }

      msg = res;
      response.json(msg);
      return console.log("Data insertion success.");
    }
  );
};

export const deleteSpecData = (req, response) => {
  let data = req.body;
  let msg = "";
  console.log(data);

  createConnection.query(
    `DELETE FROM customusertable WHERE UserNo = '${data[0]}'`,
    function (err, res) {
      if (err) {
        msg = err;
        response.json(msg);
        return console.log(err);
      }

      msg = res;
      response.json(msg);
      return console.log("Data insertion success.");
    }
  );
};
