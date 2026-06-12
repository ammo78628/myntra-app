function mainfunc(){
    setTimeout("display()",1500);
}
function display(){
    document.getElementById("spins").style="display:none;";
    document.getElementById("hide").style="display:block;";
}

function toggleMenu() {
    const menu = document.querySelector('.navbar-nav');
    const button = document.getElementById('navbarToggler');
    const icon = button.querySelector('.bi');
    
    menu.classList.toggle('show-mobile-menu');
    
    // Toggle icon between hamburger and close
    if (menu.classList.contains('show-mobile-menu')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x-lg');
    } else {
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-list');
    }
}