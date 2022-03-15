const btn_Off_On = document.querySelector(".mood");

btn_Off_On.addEventListener("click", function () {
  document.body.classList.toggle("theme-dark");

  if (document.body.classList.contains("theme-dark")) {
    btn_Off_On.src = "./image/sun.png";
  } else {
    btn_Off_On.src = "./image/moon.png";
  }
});
