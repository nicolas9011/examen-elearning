// Back-to-top visible al hacer scroll
const back = document.getElementById('backToTop');
const onScroll = () => {
  if (window.scrollY > 180) {
    back.classList.add('is-visible');
  } else {
    back.classList.remove('is-visible');
  }
};
window.addEventListener('scroll', onScroll);

// Click -> scroll suave arriba
back.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// (Opcional) si más adelante conectas carrusel, aquí tienes handlers de los botones:
const prev = document.querySelector('.hero__navbtn--prev');
const next = document.querySelector('.hero__navbtn--next');
prev?.addEventListener('click', () => console.log('prev slide'));
next?.addEventListener('click', () => console.log('next slide'));
