function format(x) {
    let power = Math.floor(Math.log10(x))
    let mantissa = x / Math.pow(10, power)
    if (power < 3) {
        return Number.parseFloat(x).toFixed(2);
    } else {
        return mantissa.toFixed(2) + "e" + power;
    }
}

var generation = window.setInterval(function(){
    addPoints(player.gen1)
    player.gen1 = player.gen1.add(player.gen2)
    player.gen2 = player.gen2.add(player.gen3)
    player.gen3 = player.gen3.add(player.gen4)
    player.gen4 = player.gen4.add(player.gen5)
    document.getElementById('player.gen1').innerHTML = format(player.gen1);
    document.getElementById('player.gen2').innerHTML = format(player.gen2);
    document.getElementById('player.gen3').innerHTML = format(player.gen3);
    document.getElementById('player.gen4').innerHTML = format(player.gen4);    
    document.getElementById('player.gen5').innerHTML = format(player.gen5);
}, 1);

