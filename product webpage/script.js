//thumbnails function
function change_image(image) {
  var container = document.querySelector(".main-image");
  container.src = image.src;
}
document.addEventListener("DOMContentLoaded", function (event) {});

function dispalyText() {
  var text = document.getElementById("textField");
  text.style.display = "block";
}
//quantity function
let data = 1;
document.querySelector(".counting").innerText = data;

//quantity increment function
function increment() {
  data = data + 1;

  document.querySelector(".counting").innerText = data;
}
//quantity decrement function
function decrement() {
  if (data > 0) {
    data = data - 1;
    document.querySelector(".counting").innerText = data;
  }
}
document.querySelector(".cartButton").addEventListener("click", function () {
  document.querySelector(".popupText").classList.remove("hidden");
});
