/* Back-to-top visible al hacer scroll */
const backTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  const show = window.scrollY > 320;
  backTop.classList.toggle('show', show);
});

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* (Opcional) marca el link activo de navegación si lo necesitas */
document.querySelectorAll('.nav__link').forEach(a => {
  a.addEventListener('click', e => {
    document.querySelectorAll('.nav__link').forEach(x => x.classList.remove('is-active'));
    e.currentTarget.classList.add('is-active');
  });
});
