let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let fblink = document.getElementsByClassName('bx bxl-facebook-circle')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

fblink.onclick = () =>{
    
}


