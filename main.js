document.querySelector('.fa-bars').addEventListener('click', e => {
    console.log(e.target.className);
        document.getElementById('nav-bar').style.display = 'flex';
        document.querySelector('.fa-times').style.display = 'block';
        document.querySelector('.fa-bars').style.display = 'none';
});

document.querySelector('.fa-times').addEventListener('click', e => {
        document.getElementById('nav-bar').style.display = 'none';
        document.querySelector('.fa-times').style.display = 'none';
        document.querySelector('.fa-bars').style.display = 'block';
});

let header = document.getElementById('header');
let sticky = header.offsetTop;

document.addEventListener('scroll', e => {
    //console.log(window);
    if(window.pageYOffset > sticky) {
        header.classList.add('stick');
    } else {
        header.classList.remove('stick');
    }
});

document.getElementById("submit").addEventListener("click", e => {
    const email = document.getElementById("email").value;
    if(email == "") {
        e.preventDefault();
        alert("Please enter a valid email");
    }
});