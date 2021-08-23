var savegameloop = window.setInterval (function () {
    localStorage.setItem("SAVE", JSON.stringify(player));
    console.log("SAVED");
}, 5000)

function load() {
    var savegame = JSON.parse(localStorage.getItem("SAVE"))
    if (savegame != null) {
        player == savegame
    }
    document.getElementById.innerHTML = format(player.points)
    document.getElementById.innerHTML = format(player.gen1)
    document.getElementById.innerHTML = format(player.gen2)
    document.getElementById.innerHTML = format(player.gen3)
    document.getElementById.innerHTML = format(player.gen4)
    document.getElementById.innerHTML = format(player.gen5)
    document.getElementById.innerHTML = format(player.mul1)
    document.getElementById.innerHTML = format(player.mul2)
    document.getElementById.innerHTML = format(player.mul3)
    document.getElementById.innerHTML = format(player.mul4)
    document.getElementById.innerHTML = format(player.mul5)
    document.getElementById.innerHTML = format(player.genCost1)
    document.getElementById.innerHTML = format(player.genCost2)
    document.getElementById.innerHTML = format(player.genCost3)
    document.getElementById.innerHTML = format(player.genCost4)
    document.getElementById.innerHTML = format(player.genCost5)
}