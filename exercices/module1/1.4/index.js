const red = document.querySelector("#red");
const orange = document.querySelector("#orange");
const green = document.querySelector("#green");

let directionColor = "down";

startColor();

function startColor() {
    setInterval(lightUp, 2000);
}

function lightUp() {
    if(red.style.backgroundColor === "" && orange.style.backgroundColor === "" && green.style.backgroundColor === ""){
        red.style.backgroundColor = "red";
    } else {
        if (red.style.backgroundColor === "red"){
            red.style.backgroundColor = "";
            orange.style.backgroundColor = "orange";
            directionColor = "down";
        }else if (orange.style.backgroundColor === "orange" && directionColor === "down") {
            orange.style.backgroundColor = "";
            green.style.backgroundColor = "green";
            directionColor = "down";
        } else if (orange.style.backgroundColor === "orange" && directionColor === "up") {
            green.style.backgroundColor = "";
            red.style.backgroundColor = "red";
        } else {
            green.style.backgroundColor = "green";
            orange.style.backgroundColor = "";
            directionColor = "up";
        }
    }
}


  
  