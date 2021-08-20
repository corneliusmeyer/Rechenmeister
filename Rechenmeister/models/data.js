const Aufgabe = require('../models/Aufgabe');
const Spieler = require('../models/Spieler');

var spieler = [];
var start = false;
var aufgaben = [];
var farben = ["/red", "/green", "/steelblue", "/orange", "/yellow", "/violet"];
var initSatzErzeugt = false;

function getPlayerInfo(color) {
    //prüft ob der Spieler im lokalen array ist und gibt daten zurück
    if (spieler[color]) {
        return [
            spieler[color].getName(),
            aufgaben[spieler[color].aufgabenIndex()]
        ];
    }
}

function sortiereSpieler() {
    var sortedKeys = Object.keys(spieler);
    sortedKeys.sort((a, b) => spieler[b].getRichtige() - spieler[a].getRichtige());
    return sortedKeys;
}

function loescheSpieler() {
    var keys = Object.keys(spieler);
    keys.forEach((key) => delete spieler[key]);
}

function getPlayerFortschritt(farbe) {
    return "Aufgabe " + (spieler[farbe].aufgabenIndex()+1) + " von " + aufgaben.length;
}

function setzeAufgaben(anzahl, max, operator) {
    for(let counter = 0; counter < anzahl; counter++)
        aufgaben[counter] = Aufgabe.aufgabeErzeugen( max, operator);
}

function createSpieler(name, farbe) {
    spieler[farbe] = Spieler.createSpieler(name, farbe);
}

function spielerNaechsteAufgabe(farbe, value) {
    //prüft das Ergebnis der aktuellen Aufgabe, trägt ein und geht zur nächsten
    if(!spieler[farbe]) return;
    spieler[farbe].addStatistik(value == aufgaben[spieler[farbe].aufgabenIndex()].getErgebnis());
    spieler[farbe].naechsteAufgabe();
}

function initialSatz() {
     //Diese Methode dient der Initialisierung von drei Spielern, wie gefordert
    if(!initSatzErzeugt)
    {
        spieler["red"] = Spieler.createSpieler("Luky Luke", "red");
        spieler["orange"] = Spieler.createSpieler("John Marston", "orange");
        spieler["violet"] = Spieler.createSpieler("Arthur Morgan", "violet");
        initSatzErzeugt = true;
    }
}

module.exports = {
    spieler,
    farben,
    start,
    aufgaben,
    getPlayerInfo,
    setzeAufgaben,
    createSpieler,
    spielerNaechsteAufgabe,
    loescheSpieler,
    sortiereSpieler,
    getPlayerFortschritt,
    initialSatz,
};