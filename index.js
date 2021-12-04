// NAVBAR
window.onscroll = () => {
    scrollNavbar()
};

scrollNavbar = () => {
    const navbar = document.getElementById('navbar');
    const logo = document.querySelector('.navbar-brand');
    const navlink = document.querySelectorAll('.nav-item a');
    if (document.documentElement.scrollTop > 100) {
        navbar.style.backgroundColor = 'gray';
        navbar.style.transition = 'all .5s';
        logo.style.color = "white";
        navlink.style.color = "white";
    } else {
        navbar.style.backgroundColor = 'inherit';
        logo.style.color = "black";
        navlink.style.color = "black";
    }
}

