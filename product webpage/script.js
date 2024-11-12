function change_image(image) {
  var container = document.getElementById("main-image");
  container.src = image.src;
}
document.addEventListener("DOMContentLoaded", function (event) {});

function dispalyText() {
  var text = document.getElementById("textField");
  text.style.display = "block";
}
const btn4Text = document.getElementById("btn4-text");
const btn4 = document.getElementById("btn4");

btn4.addEventListener("click", () => {
  btn4Text.classList.remove("hidden");
  btn4Text.classList.add("popup-message");
});

btn4Text.addEventListener("animationend", () => {
  btn4Text.classList.remove("popup-message");
  btn4Text.classList.add("hidden");
});

let data = 1;

//printing default value of data that is 0 in h2 tag

document.getElementById("counting").innerText = data;

//creation of increment function

function increment() {
  data = data + 1;

  document.getElementById("counting").innerText = data;
}
//creation of decrement function

function decrement() {
  if (data > 0) {
    data = data - 1;

    document.getElementById("counting").innerText = data;
  }
}
