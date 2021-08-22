function save() {
    localStorage.setItem("save", JSON.stringify(player));
    console.log("Saved!");
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (savegame !== null) {
        player = savegame
    }
    setInterval(save, 15000);
    document.getElementById('player.points').innerHTML = format(player.points);
    document.getElementById('player.gen1').innerHTML = format(player.gen1);
    document.getElementById('player.gen2').innerHTML = format(player.gen2);
    document.getElementById('player.gen3').innerHTML = format(player.gen3);
    document.getElementById('player.gen4').innerHTML = format(player.gen4);
    document.getElementById('player.gen5').innerHTML = format(player.gen5);
}
