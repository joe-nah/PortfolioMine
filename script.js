let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
}

document.querySelector('form').addEventListener('submit', function(e) { 
    e.preventDefault();
    alert('Message sent!');
});