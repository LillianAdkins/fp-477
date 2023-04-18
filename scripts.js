//quote
document.querySelector("h1").innerHTML =
  "“My silences had not protected me. Your silence will not protect you.”";

//name
document.querySelector("p").innerHTML = "Audre Lorde";
//make text red start
//lets red effect css style
let addRed = document.querySelector("style");

//uses addred to make redcolor a useabel class that makes text red
addRed.innerText += ".redColor { color: red}";

//makes change color select quote
let changeColor = document.querySelector("h1");

//uses changecolor/h1 to use the red color class
changeColor.classList.add("redColor");

//on/off switch
//makered selects h1
let makeRed = document.querySelector("h1");

//makered watches for a click to execute the toggle of the redcolor class on makered/h1
makeRed.addEventListener("click", function () {
  document.querySelector("h1").classList.toggle("redColor");
});

// let quoteFade =
// window.setTimeOut( setOpacity, 1500)

// if (countDownTimer = 0) ("load", function(){document.querySelector("h1").style.opacity = 0});
