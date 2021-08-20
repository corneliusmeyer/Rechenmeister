function Aufgabe(max, operator) {
    let zahl1;
    let zahl2;
    let ergebnis;
    this.operator = operator;
    this.max = max;
    switch (operator) {
        case '+': {
            zahl1 = Math.round(Math.random() * max) % max;
            var limit = max - zahl1;
            zahl2 = Math.round(Math.random() * max) % limit;
            ergebnis = zahl1 + zahl2;
            break;
        }
        case '-': {
            zahl1 = Math.round(Math.random() * max) % max;
            zahl2 = Math.round(Math.random() * max) % max;
            if (zahl2 > zahl1) {
                //swap
                var temp = zahl1;
                zahl1 = zahl2;
                zahl2 = temp;
            }
            ergebnis = zahl1 - zahl2;
            break;
        }
        case '*': {
            zahl1 = Math.round(Math.random() * Math.round(max/2) - 1) % Math.round(max/2)+1;
            var limit = Math.floor(100 / zahl1);
            zahl2 = Math.round(Math.random() * limit -1) % limit+1;
            ergebnis = zahl1 * zahl2;
            break;
        }
        case '/': {
            zahl1 = Math.round(Math.random() * max) % max;
            zahl2 = 0;
            while (zahl2 == 0) {
                var temp = Math.round(Math.random() * zahl1) % zahl1;
                if (zahl1 % temp == 0)
                    zahl2 = temp;
            }
            ergebnis = zahl1 / zahl2;
            break;
        }
    }

    this.getZahlLinks = function() {
        return zahl1;
    }

    this.getZahlRechts = function() {
        return zahl2;
    }

    this.getErgebnis = function() {
        return ergebnis;
    }
}

module.exports.aufgabeErzeugen = (max, operator) => new Aufgabe(max, operator);