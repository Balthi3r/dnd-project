
let d20;


document.getElementById("initiative").onclick = function(){

    x = Math.floor(Math.random() * 20) + 1;

    document.getElementById("d20label").innerHTML = x;
}