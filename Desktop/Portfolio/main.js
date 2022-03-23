const toggleMenu = document.querySelector('.toggle-menu');
const toggle = document.querySelector('.toggle');
const ul = document.querySelector('.header ul');
let toggleOpen = false;

toggleMenu.addEventListener('click', () => {
    if(!toggleOpen) {
        toggleMenu.classList.add('open');
        toggleOpen = true;
        ul.classList.add('open');
        ul.classList.add('slide-in');
} else {
    toggleMenu.classList.remove('open');
    toggleOpen = false;
    ul.classList.remove('open');
    ul.classList.remove('slide-in');
}
});

    