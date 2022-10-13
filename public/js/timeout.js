//Diese Klasse ist als kleines "Easteregg" gedacht :D

function tumbleweed() {
    var element = document.getElementsByTagName("main");
    if(element[0]) {
        var marquee = document.createElement("marquee", ); //vllt nicht die schönste art, aber funktioniert bestens
        marquee.setAttribute("scrollamount", "30");
        marquee.setAttribute("direction", "right");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        img.setAttribute("src", "img/tumbleweed.gif");
        img.setAttribute("height", "120px");
        img.setAttribute("width", "120px");
        figure.appendChild(img);
        marquee.appendChild(figure);
        element[0].appendChild(marquee);
    }
}

setTimeout(tumbleweed, 12000);