const navOpen = document.getElementById('navOpen');
const navClose = document.getElementById('navClose');
const nav = document.getElementById('nav-bar');

navOpen.addEventListener('click', () => {
        nav.style.display = 'flex';
        navClose.style.display = 'block';
        navOpen.style.display = 'none';
});

navClose.addEventListener('click', () => {
        nav.style.display = 'none';
        navClose.style.display = 'none';
        navOpen.style.display = 'block';
});

let header = document.getElementById('header');
let sticky = header.offsetTop;

document.addEventListener('scroll', () => {
    if(window.pageYOffset > sticky) {
        header.classList.add('stick');
    } else {
        header.classList.remove('stick');
    }
});

document.getElementById("submit").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    if(email == "") {
        alert("Please enter a valid email");
    }
});