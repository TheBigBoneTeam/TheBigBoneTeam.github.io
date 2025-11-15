const carrusel = document.querySelector('.carrusel_enemigos');
const flechaIzq = document.querySelector('.flecha_izq');
const flechaDer = document.querySelector('.flecha_der');


window.addEventListener('load', () => {
  const carrusel = document.querySelector('.carrusel_enemigos');
  
  carrusel.scrollLeft = 150;  
});

flechaIzq.addEventListener('click', () => {
  const item = carrusel.querySelector('.enemigo');
  const gap = parseInt(getComputedStyle(carrusel).gap);
  const distancia = item.offsetWidth + gap;

  carrusel.scrollBy({ left: -distancia, behavior: 'smooth' });
});

flechaDer.addEventListener('click', () => {
  const item = carrusel.querySelector('.enemigo');
  const gap = parseInt(getComputedStyle(carrusel).gap);
  const distancia = item.offsetWidth + gap;

  carrusel.scrollBy({ left: distancia, behavior: 'smooth' });
});