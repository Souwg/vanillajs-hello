const letras = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const iconos = ['♦', '♥', '♠', '♣']

function randomletra(){
  const indiceAleatorio = Math.floor(Math.random() * letras.length);
  return letras[indiceAleatorio];
}
function randomIcono(){
  const iconoAleatorio = Math.floor(Math.random() * iconos.length);
  return iconos[iconoAleatorio];
}
window.onload = function () {
  let letterNumber1 = document.querySelector("#letterNUMBER")
  letterNumber1.innerHTML = randomletra()
  let iconorow1 = document.querySelector("#iconos2")
  let prueba = iconorow1.innerHTML = randomIcono()
  let iconorow2 = document.querySelector("#iconos1")
  iconorow2.innerHTML = prueba
}