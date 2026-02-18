const btn = document.querySelector('.toggle');

btn.onclick = () => {
  document.body.classList.toggle('light');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('light') ? 'light' : 'dark'
  );
};

window.onload = () => {
  if(localStorage.getItem('theme') === 'light'){
    document.body.classList.add('light');
  }
};
