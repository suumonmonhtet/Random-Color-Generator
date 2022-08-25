 //let generatecolor = document.getElementById("randomcolor");
 function generateColor(){            
    document.body.style.backgroundColor = randomColor();
}

function randomColor () {
    let red = Math.floor(Math.random() * 256 );
    let green = Math.floor(Math.random() * 256 );
    let blue = Math.floor(Math.random() * 256 );
    let randomcolor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    //alert(randomcolor);
    document.getElementById("colorcode").innerHTML = randomcolor;
    //alert(red);
    let r = red.toString(16);
    //alert(r);
    let g = green.toString(16);
    let b = blue.toString(16);

    //alert(r);
    //alert(g);
    //alert(b);

    if(r.length == 1){
        r = "0" + r;
    }
    if(g.length == 1){
        g = "0" + g;
    } if(b.length == 1){
        b = "0" + b;
    }

    document.getElementById("hexcode").innerHTML = "#" + r + g + b;
    return randomcolor;
}