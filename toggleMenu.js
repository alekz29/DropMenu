const toggleMenu = () => {
    const menu = document.getElementById('menu');

    if (menu.className === 'expanded') {
        menu.classList.remove('expanded');
        menu.classList.add('collapsed')
    }
    else {
        menu.classList.remove('collapsed');
        menu.classList.add('expanded')
    }
    console.log(menu.classList)
};
 