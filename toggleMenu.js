const menu = document.getElementById('menu')
const arrow = document.getElementById('arrow')

const toggleMenu = () => {
    if (menu.className === 'expanded') {
        menu.classList.remove('expanded')
        menu.classList.add('collapsed')
        arrow.classList.remove('openArrow')
        arrow.classList.add('closeArrow')

    }
    else {
        menu.classList.remove('collapsed')
        menu.classList.add('expanded')
        arrow.classList.remove('closeArrow')
        arrow.classList.add('openArrow')
    }
}

menu.addEventListener('click', toggleMenu);


