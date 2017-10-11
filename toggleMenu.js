const menu = document.getElementById('menu')
const arrow = document.getElementById('arrow')
const button = document.getElementById('btn')
const burger = document.getElementById('nav')


const toggleMenu = () => {
    if (menu.className === 'expanded') {
        menu.classList.remove('expanded')
        menu.classList.add('collapsed')
        arrow.classList.remove('openArrow')
        arrow.classList.add('closeArrow')
        burger.setAttribute("src", 'img/nav.png');
        arrow.setAttribute('src', 'img/arrow-grey.png')

    }
    else {
        menu.classList.remove('collapsed')
        menu.classList.add('expanded')
        arrow.classList.remove('closeArrow')
        arrow.classList.add('openArrow')
        burger.setAttribute("src",'img/nav-white.png');
        arrow.setAttribute('src','img/arrow-white.png')
    }
}

button.addEventListener('click', toggleMenu);


