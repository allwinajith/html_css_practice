const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.style.backgroundColor = '#333';
toggleButton.style.color = '#fff';

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  const isDarkTheme = body.classList.contains('dark-theme');
  const bgColor = isDarkTheme ? '#333' : '#fff';
  const textColor = isDarkTheme ? '#fff' : '#333';
  const buttonColor = isDarkTheme ? '#fff' : '#333';
  const buttonTextColor = isDarkTheme ? '#333' : '#fff';
  const buttonText = isDarkTheme ? 'Click here for Light theme' : 'Click here for Dark theme';

  body.style.setProperty('--bg-color', bgColor);
  body.style.setProperty('--text-color', textColor);
  toggleButton.style.backgroundColor = buttonColor;
  toggleButton.style.color = buttonTextColor;
  toggleButton.innerText = buttonText;
});