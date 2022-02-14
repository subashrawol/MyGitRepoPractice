const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { PORT, NODE_ENV } = require("./config/index"); 
// const  PORT = require("./config");
const { dbConnection } = require("./config/db");
const StudentRoutes = require("./routes/student");
const app = express();

let StartServer = async () => {
    /*---------------database connection ---------------------*/
    
  dbConnection();
  /*---------------end database connection ------------------*/
    /*------------------Middleware section start here --------------*/
    if (NODE_ENV === "development") {
        app.use(morgan("dev"))
    }
    app.use(express.json());
    app.use(cors());
  /*------------------Middleware section end here --------------*/

  /*-----------load routes--------------------*/
  app.use("/api/students/", StudentRoutes);
  /*-----------load routes ended--------------------*/
  /*-------------listen port ------------------------------*/
  app.listen(PORT, err => {
    if (err) throw err;
      console.log(`server is running on port number ${PORT}`);
      
  });
    /*-------------listen port ended here ------------------------------*/
    
};

StartServer();


