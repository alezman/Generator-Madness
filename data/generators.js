const player = {
    gen1: new Decimal(0),
    gen2: new Decimal(0),
    gen3: new Decimal(0),
    gen4: new Decimal(0),
    gen5: new Decimal(0),
    points: new Decimal(10),
    genCost1: new Decimal(10),
    genCost2: new Decimal(1000),
    genCost3: new Decimal(1e6),
    genCost4: new Decimal(1e10),
    genCost5: new Decimal(5e13),
    mul1: new Decimal(1),
    mul2: new Decimal(1),
    mul3: new Decimal(1),
    mul4: new Decimal(1),
    mul5: new Decimal(1)
}
function addPoints(number) {
    player.points = player.points.add(number);
    document.getElementById("player.points").innerHTML = format(player.points);
}
function clickPoints(amount, formula) {
    player.points = player.points.add(amount.mul(formula));
    document.getElementById("player.points").innerHTML = format(player.points);
}
function format(x) {
    let power = Math.floor(Math.log10(x))
    let mantissa = x / Math.pow(10, power)
    if (power < 4) {
        return Number.parseFloat(x).toFixed(2);
    } else {
        return mantissa.toFixed(2) + "e" + power;
    }
}

function buyGen1(){
    if(player.points.gte(player.genCost1)){                                   //checks that the player can afford the cursor
        player.gen1 = player.gen1.add(1);                                   //increases number of cursors
    	player.points = player.points.sub(player.genCost1)                          //removes the cookies spent
        player.genCost1 = player.genCost1.pow(1.01) 
        player.mul1=player.mul1.add(1)
        document.getElementById('player.gen1').innerHTML = format(player.gen1);  //updates the number of cursors for the user
        document.getElementById('player.mul1').innerHTML = format(player.mul1);
        document.getElementById('player.points').innerHTML = format(player.points);  //updates the number of cookies for the user
    };                                                           //works out the cost of the next cursor
    document.getElementById('player.genCost1').innerHTML = format(player.genCost1);  //updates the cursor cost for the user
};
function buyGen2(){
    if(player.points.gte(player.genCost2)){                                   //checks that the player can afford the cursor
        player.gen2 = player.gen2.add(1);                                   //increases number of cursors
    	player.points = player.points.sub(player.genCost2) 
        player.genCost2 = player.genCost2.pow(1.01)            //removes the cookies spent
        player.mul2=player.mul2.add(2)                         
        document.getElementById('player.gen2').innerHTML = format(player.gen2);  //updates the number of cursors for the user
        document.getElementById('player.mul2').innerHTML = format(player.mul2);
        document.getElementById('player.points').innerHTML = format(player.points);  //updates the number of cookies for the user
    };                                                           //works out the cost of the next cursor
    document.getElementById('player.genCost2').innerHTML = format(player.genCost2);  //updates the cursor cost for the user
};
function buyGen3(){
    if(player.points.gte(player.genCost3)){                                   //checks that the player can afford the cursor
        player.gen3 = player.gen3.add(1);                                   //increases number of cursors
    	player.points = player.points.sub(player.genCost3) 
        player.genCost3 = player.genCost3.pow(1.01)                         //removes the cookies spent
        player.mul3=player.mul3.add(3)  
        document.getElementById('player.gen3').innerHTML = format(player.gen3);  //updates the number of cursors for the user
        document.getElementById('player.mul3').innerHTML = format(player.mul3);
        document.getElementById('player.points').innerHTML = format(player.points);  //updates the number of cookies for the user
    };                                                           //works out the cost of the next cursor
    document.getElementById('player.genCost3').innerHTML = format(player.genCost3);  //updates the cursor cost for the user
};
function buyGen4(){
    if(player.points.gte(player.genCost4)){                                   //checks that the player can afford the cursor
        player.gen4 = player.gen4.add(1);                                   //increases number of cursors
    	player.points = player.points.sub(player.genCost4) 
        player.genCost4 = player.genCost4.pow(1.01)                         //removes the cookies spent
        player.mul4=player.mul4.add(4)  
        document.getElementById('player.gen4').innerHTML = format(player.gen4);  //updates the number of cursors for the user
        document.getElementById('player.points').innerHTML = format(player.points);  //updates the number of cookies for the user
        document.getElementById('player.mul4').innerHTML = format(player.mul4);
    };                                                           //works out the cost of the next cursor
    document.getElementById('player.genCost4').innerHTML = format(player.genCost4);  //updates the cursor cost for the user
};
function buyGen5(){
    if(player.points.gte(player.genCost5)){                                   //checks that the player can afford the cursor
        player.gen5 = player.gen5.add(1);                                   //increases number of cursors
    	player.points = player.points.sub(player.genCost5) 
        player.genCost5 = player.genCost5.pow(1.01)                         //removes the cookies spent
        player.mul5=player.mul5.add(5)  
        document.getElementById('player.gen5').innerHTML = format(player.gen5);  //updates the number of cursors for the user
        document.getElementById('player.points').innerHTML = format(player.points);  //updates the number of cookies for the user
        document.getElementById('player.mul5').innerHTML = format(player.mul5);
    };                                                           //works out the cost of the next cursor
    document.getElementById('player.genCost5').innerHTML = format(player.genCost5);  //updates the cursor cost for the user
};
function format(x) {
    let power = Math.floor(Math.log10(x))
    let mantissa = x / Math.pow(10, power)
    if (power < 4) {
        return Number.parseFloat(x).toFixed(2);
    } else {
        return mantissa.toFixed(2) + "e" + power;
    }
}
