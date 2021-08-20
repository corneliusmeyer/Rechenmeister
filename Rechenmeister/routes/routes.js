const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

const data = require('../models/data.js');

/*****************  Aktionen  ************************/
router.post("/startGame", function (req, res) {
    data.setzeAufgaben(req.body.anzahl, req.body.max, req.body.operator);
    data.start = true;
    res.redirect("host");
});

router.post("/stopGame", function (req, res) {
    data.start = false;
    res.redirect("host");
});

router.post("/spielerAnlegen", function (req, res) {
    data.createSpieler(req.body.name, req.body.farbe);
    res.redirect("host");
});

router.post("/spielerLoeschen", function (req, res) {
    data.loescheSpieler();
    res.redirect("host");
});

router.post("/btnWeiter", function (req, res) {
    let farbe = req.body.url;
    data.spielerNaechsteAufgabe(farbe, req.body.ergebnis);
    res.redirect(req.body.url);
});

/**********************  Webseiten  *********************************/

router.get("/", function (req, res, next) {
    res.render("dashboard", { Spielerliste: data.spieler });
});

router.get(["/host", "/admin"], function (req, res, next) {
    data.initialSatz();
    res.render("host", { start: data.start, Spielerliste: data.spieler, Farben: data.farben});
});

router.get("/rangliste", function (req, res, next) {
    res.render("rangliste", {Spielerliste: data.spieler, SortierteKeys: data.sortiereSpieler(), details: true});
});

router.get("/rangliste-pure", function (req, res, next) {
    res.render("rangliste", {Spielerliste: data.spieler, SortierteKeys: data.sortiereSpieler(), details: false});
});

router.get(data.farben, function (req, res, next) {
    let farbe = req.url.substring(1);
    var info = data.getPlayerInfo(farbe);
    if(info)
        res.render("player", { started: data.start, name: info[0], Aufgabe: info[1], Farbe: farbe, fortschritt: data.getPlayerFortschritt(farbe)});
    else res.render("late");
});

router.use(function (req, res) {
    console.log("Request" + req.url + " konnte nicht gefunden werden");
    res.status(404).render("404");
});

module.exports = router;