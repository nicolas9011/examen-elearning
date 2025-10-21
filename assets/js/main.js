/* Back to top visible al hacer scroll y scroll suave */
(function () {
  const backTop = document.querySelector('.back-to-top');
  const showAt = 280;

  const onScroll = () => {
    if (window.scrollY > showAt) {
      backTop.classList.add('is-visible');
    } else {
      backTop.classList.remove('is-visible');
    }
  };

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  document.addEventListener('scroll', onScroll, { passive: true });
  backTop.addEventListener('click', toTop);
})();
