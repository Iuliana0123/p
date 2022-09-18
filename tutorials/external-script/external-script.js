alert("Pop-up thanks to an external JS file.");

let btn2 = document.querySelector("#myBtn2"); // HTML id attribute
let msg = document.querySelector(".message"); // CSS class name
let duplicateMsg = document.querySelector("div"); // HTML tag name

btn2.innerHTML = "I have been clicked";

let btn1 = document.getElementById("myBtn1");

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    btn.innerText = "Hacked!";
});