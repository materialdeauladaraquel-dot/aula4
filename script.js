// rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// alternância de tema claro/escuro
document.getElementById('theme-toggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
