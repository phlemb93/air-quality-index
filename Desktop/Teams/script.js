const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    const box = btn.parentElement;
    btn.addEventListener('click', () => {
        box.style.display = "none";
    })

})