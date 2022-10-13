let spielStarten = document.querySelector("#btnStart");
let addPlayer = document.querySelector("#addPlayer");
let spielerliste = document.querySelector("#spielerliste");
let colorSelector = document.querySelector("#farbAuswahl");

if(addPlayer) {
    addPlayer.addEventListener("click" , function(event) {
        if(document.querySelector("#" + colorSelector.value)) {
            alert("Die Spielerfarbe " + colorSelector.options[colorSelector.selectedIndex].text + " wurde bereits vergeben.");
            event.preventDefault();
        }
    });
}

if(spielStarten) {
    spielStarten.addEventListener("click" , function(event) {
        if(spielerliste.getElementsByTagName("p").length < 1) {
            alert("Es wurden nicht genügend SPieler hinzugefügt.");
            event.preventDefault();
        }
    });
}