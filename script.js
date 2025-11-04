const dropdowns = document.querySelectorAll('.dropdown button');

dropdowns.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const arrow = btn.querySelector('.arrow');
    const isOpen = content.classList.contains('open');

    // Close other dropdowns and reset arrows
    document.querySelectorAll('.dropdown-content').forEach(el => el.classList.remove('open'));
    document.querySelectorAll('.arrow').forEach(a => a.classList.remove('rotate'));

    if (!isOpen) {
      content.classList.add('open');
      arrow.classList.add('rotate');
    }
  });
});
