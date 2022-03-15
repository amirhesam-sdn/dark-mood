const btnOff_On = document.querySelector(".mood");
const logo = document.querySelector(".logo i");
const titr = document.querySelector(".left h1");
const text = document.querySelector(".left p");
const icons = document.querySelectorAll(".icons i");
const btn = document.querySelector(".btn button");

btnOff_On.addEventListener("click", function () {
  btnOff_On.classList.toggle("day");
  btnOff_On.classList.toggle("white");
  document.body.classList.toggle("bgblack");
  logo.classList.toggle("white");
  titr.classList.toggle("white");
  text.classList.toggle("white");
  btn.classList.toggle("btnday");

  for (let i = 0; i < list.length; i++) {
    icons[i].classList.toggle("white");
  }
});
