(function () {
  const linkEl = document.getElementById('theme-link');
  const btn = document.getElementById('styleToggle');

  const A = 'theme-a.css';
  const B = 'theme-b.css';

  const stored = localStorage.getItem('theme') || A;
  if (linkEl && (stored === A || stored === B)) linkEl.href = stored;

  function toggle() {
    if (!linkEl) return;
    const next = linkEl.href.endsWith(A) ? B : A;
    linkEl.href = next;
    localStorage.setItem('theme', next);
  }

  if (btn) btn.addEventListener('click', toggle);
})();