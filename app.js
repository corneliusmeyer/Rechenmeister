//Getestet mit Google Chrome

const express = require("express");
const app = express();

const aufgaben = require("./models/Aufgabe");

app.set("view engine", "ejs");
app.set("views", "views");

const router = require('./routes/routes.js');

app.use(express.static("public"));
app.use(router);

app.listen(8040, function() {
    console.log("Rechenmeister ist online auf Port 8040");
});