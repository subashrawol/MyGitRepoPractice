const { connect } = require('mongoose');
const { MONGODB_URL } = require("./index");


exports.dbConnection = async() => {
 await connect(MONGODB_URL, err => {
    if (err) throw err;
    console.log("DataBase connected");
  });
}; 
