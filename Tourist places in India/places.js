"use strict";
document.querySelector(".btngoa").addEventListener("click", function () {
  document.querySelector(".goa").classList.remove("hidden");
});
document.querySelector(".btnvaranasi").addEventListener("click", function () {
  document.querySelector(".varanasi").classList.remove("hidden");
});
document.querySelector(".btnmunnar").addEventListener("click", function () {
  document.querySelector(".munnar").classList.remove("hidden");
});
document.querySelector(".close1").addEventListener("click", function () {
  document.querySelector(".goa").classList.add("hidden");
});
document.querySelector(".close2").addEventListener("click", function () {
  document.querySelector(".varanasi").classList.add("hidden");
});
document.querySelector(".close3").addEventListener("click", function () {
  document.querySelector(".munnar").classList.add("hidden");
});
document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".munnar").classList.add("hidden");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelector(".goa").classList.add("hidden");
    document.querySelector(".varanasi").classList.add("hidden");
    document.querySelector(".munnar").classList.add("hidden");
  }
});
