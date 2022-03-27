const ham = document.querySelector(".ham"),
  enlaces = document.querySelector(".main-nav__list"),
  barras = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
  enlaces.classList.toggle("activado");

  barras.forEach((child) => {
    child.classList.toggle("animado");
    console.log(child);
  });
});

let i = 0;
const espacios = document.querySelector("#i9"),
  contenedor = document.querySelector(".numeros"),
  num = document.querySelector("#num");

espacios.addEventListener("click", () => {
  let texto = document.createElement("input");
  let clase = `input-${i}`;
  texto.classList.add("input--pract");
  texto.classList.add(clase);

  i++;
  contenedor.appendChild(texto);
});

mostrar.addEventListener("click", () => {
  let valores = [],
    elementos = document.querySelectorAll(".input--pract"),
    total = 0,
    
    
    displayProm = document.querySelector('#prom'),
    displayMax = document.querySelector('#mayor'),
    displayMin = document.querySelector('#menor');


  let min = Number(elementos[0].value),
    max = Number(elementos[0].value);


  elementos.forEach((element) => {
    let val = Number(element.value);
    
    total += val;

    if (val > max) {
      displayMax.value = val;
      max = val;

    }

    if (val < min) {
      displayMin.value = val;
      min = val;
    }
  });
  let prom = total / elementos.length;
  displayProm.value = prom;
  
  displayMax.value = max;
  displayMin.value = min;
});
