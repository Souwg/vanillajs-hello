const letras = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const iconos = ['♦', '♥', '♠', '♣']

function randomletra(){
  const indiceAleatorio = Math.floor(Math.random() * letras.length);
  return letras[indiceAleatorio];
}

function randomIcono(){
  const iconos = ['♦', '♥', '♠', '♣']
  const iconoAleatorio = Math.floor(Math.random() * iconos.length);
  const icono = iconos[iconoAleatorio];
  if (icono === '♥' || icono === '♦') {
    return `<span class="red">${icono}</span>`;
  } else {
    return icono;
  }
}

window.onload = function () {
  let letterNumber1 = document.querySelector("#letterNUMBER")
  letterNumber1.innerHTML = randomletra()
  let iconorow1 = document.querySelector("#iconos2")
  let igualarAmbosIconos = iconorow1.innerHTML = randomIcono()
  let iconorow2 = document.querySelector("#iconos1")
  iconorow2.innerHTML = igualarAmbosIconos
}