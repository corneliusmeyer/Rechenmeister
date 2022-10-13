function Spieler(name, farbe) {
    this.name = name;
    this.farbe = farbe;
    var statisik = [];
    var indexAufgabe = 0;

    this.naechsteAufgabe = function() {
        indexAufgabe++;
    }

    this.aufgabenIndex = function() {
        return indexAufgabe;
    }

    this.addStatistik = function(wert) {
        statisik.push(wert);
    }

    this.getRichtige = function() {
        let counter = 0;
        statisik.forEach(function(wert) {
            if(wert) counter++;
        });
        return counter;
    }

    this.getName = function() {
        return name;
    }
}

module.exports.createSpieler = (name, farbe) => new Spieler(name, farbe);