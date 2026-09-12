const express = require("express");

const mongodb = require('./data/database.js');
const app = express();

const dns = require("dns");
dns.setServers(["1.1.1.1"]);

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {console.log(`Database listening. Node running on port ${port}`)});
    }
});