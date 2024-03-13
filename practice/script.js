const addBoton = document.getElementById("addBoton");
const delBoton = document.getElementById("delBoton")
const parrafo = document.querySelector("p");

let contador = 0;

addBoton.addEventListener("click", () => {
    contador++;
    parrafo.textContent = contador;

})

delBoton.addEventListener('click', () => {
    contador--;
    parrafo.textContent = contador;
})