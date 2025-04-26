
fetch('/components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  });

fetch('/components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });

  fetch('/components/float-btn.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('float-btn').innerHTML = data;
  });



function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

