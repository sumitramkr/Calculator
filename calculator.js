const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Calculator Web Application");
});

app.listen(3000, function() {
    console.log("port number 3000 is live");
});