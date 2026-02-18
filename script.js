const btn = document.querySelector('.toggle');
const icon = document.querySelector('#theme-icon');

btn.onclick = () => {
  document.body.classList.toggle('light');
  if(document.body.classList.contains('light')){
    icon.textContent='🌞';
    localStorage.setItem('theme','light');
  } else {
    icon.textContent='🌙';
    localStorage.setItem('theme','dark');
  }
};

window.onload = () => {
  if(localStorage.getItem('theme')==='light'){
    document.body.classList.add('light');
    icon.textContent='🌞';
  } else {
    icon.textContent='🌙';
  }
};
