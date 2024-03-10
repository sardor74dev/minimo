const menu = document.querySelector('.burger_menu'),
    menuItems = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    navToggle = document.querySelector('.nav-toggle')

const higherPart = document.getElementById('higherPart'),
    meat = document.getElementById('meat'),
    lowerPart = document.getElementById('lowerPart')

function toggleMenu(){
    if (menu.classList.contains('showMenu')){
        menu.classList.remove('showMenu')
        higherPart.classList.remove('rotateto45')
        meat.classList.remove('disappear')
        lowerPart.classList.remove('rotateto-45')
        // hamburger.style.transform = 'rotate(-180deg)'
        // hamburger.style.transition = "all 0.5s";
        hamburger.style.position = 'relative'
    } else {
        menu.classList.add('showMenu')
        higherPart.classList.add('rotateto45')
        meat.classList.add('disappear')
        lowerPart.classList.add('rotateto-45')
        // hamburger.style.transform = 'rotate(180deg)'
        // hamburger.style.transition = "all 0.5s";
    }
}
navToggle.addEventListener('click', toggleMenu)

menuItems.forEach(
    function (menuItem){
        menuItem.addEventListener('click', toggleMenu)
    }
)