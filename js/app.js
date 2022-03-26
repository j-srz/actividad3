const ham = document.querySelector(".ham"),
  enlaces = document.querySelector(".main-nav__list"),
  barras = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
  enlaces.classList.toggle("activado");

  barras.forEach((child) => {
    child.classList.toggle("animado");
    console.log(child)
  });
});
