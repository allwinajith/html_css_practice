const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Update CSS variables based on the theme
  if (body.classList.contains('dark-theme')) {
    body.style.setProperty('--bg-color', '#333');
    
    body.style.setProperty('--text-color', '#fff');
  } else {
    body.style.setProperty('--bg-color', '#fff');
    body.style.setProperty('--text-color', '#333');
  }
});