const btn1 = document.querySelector("#myBtn1");
const btn2 = document.querySelector("#myBtn2");
const buttons = document.querySelectorAll("button");
const btn3 = buttons[2]; // fancy way to get a reference...
const btn4 = document.querySelector("#myBtn4");

btn1.addEventListener("click", () => {
  btn1.innerText = "I have been clicked !";
  console.log("onClickHandlerForBtn1::click");
});
btn2.addEventListener("click", onClickHandlerForBtn2);
btn2.addEventListener("click", onClickHandlerForBtnExtra);
btn3.addEventListener("click", onClickHandlerForBtn3);

function onClickHandlerForBtn2() {
  btn2.innerText = "I have also been clicked";
  console.log("onClickHandlerForBtn2::click");
}

function onClickHandlerForBtn3() {
  console.log("onClickHandlerForBtn3::click");
  btn2.removeEventListener("click", onClickHandlerForBtnExtra);
}

function onClickHandlerForBtnExtra() {
  console.log("onClickHandlerForBtnExtra::click");
}

const divs = document.querySelectorAll(".message");

divs.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.innerText = "Hello world!";
  });

  div.addEventListener("mouseout", (e) => {
    div.innerText = `You have left the div wit id ${e.target.id}`;
  });
});

// code to get the reference to the form shall be imagined

const onSubmit = (e) => {
    console.log("onSubmit::");
    e.preventDefault();
  };
  
  myForm.addEventListener("submit", onSubmit);

  btn1.addEventListener("click", delayedAlert);
btn2.addEventListener("click", clearAlert);

var timeoutId;
const delayInSeconds = 2;
const delayInMiliSeconds = delayInSeconds * 1000;

function delayedAlert() {
  timeoutID = setTimeout(() => {
    alert(`You asked for this popup ${delayInSeconds}s ago!`);
  }, delayInMiliSeconds);
}

function clearAlert() {
  clearTimeout(timeoutID);
}

