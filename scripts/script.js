
fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  });

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}