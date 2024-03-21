document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const theme = localStorage.getItem('theme');

  // Check if theme is set to dark or if it's the first visit
  if (theme === 'dark') {
    body.classList.add('dark_theme');
  } else {
    // If it's the first visit or theme is set to light, apply light theme
    body.classList.remove('dark_theme');
    localStorage.setItem('theme', 'light');
  }

  const btnLightMode = document.querySelector('.btn_light_mode');
  const btnDarkMode = document.querySelector('.btn_dark_mode');
  btnLightMode.addEventListener('click', function () {
    body.classList.remove('dark_theme');
    localStorage.setItem('theme', 'light');
  });

  btnDarkMode.addEventListener('click', function () {
    body.classList.add('dark_theme');
    localStorage.setItem('theme', 'dark');
  });
});
