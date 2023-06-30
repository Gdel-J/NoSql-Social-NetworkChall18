 const express = require("express");
 const db = require("./config/connection");
 const routes = require("./routes");


 const app = express ();
 const PORT = process.env.PORT || 3001;


 app.use(express.json());
 app.use(express.urlencoded({extented:true}));
 app.use(routes);


 db.once("open", () => {  //specific way to connect to the database with mongoose

    applisten(PORT, () => {
        console.log(`ÀPI server running on port ${PORT}!`);
    });
});