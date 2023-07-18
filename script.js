let ruleta = document.querySelector(".ruleta");
let botonGiro = document.querySelector(".boton-giro");
let valor = Math.ceil(Math.random()* 3600); //Math.ceil me devuelve el entero mas proximo al numero que le pase por parametro.

botonGiro.onclick = ()=>{
   ruleta.style.transform = "rotate(" + valor + "deg)";
   valor += Math.ceil(Math.random()* 3600); /* Cambio el valor */
}