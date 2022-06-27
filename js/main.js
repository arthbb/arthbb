const dataNameContainers = document.querySelectorAll('[data-container]');

function openMore(name) {
    [...dataNameContainers].forEach(container => {
       return container.dataset.container === name ? container.classList.toggle('open') : '';
    })
}

function changeBtn(btn) {
    if (!btn.classList.contains('read-more--open')) {
        btn.classList.add('read-more--open');
        btn.textContent = "Скрыть"
    } else {
        btn.classList.remove('read-more--open');
        btn.textContent = "Показать все"
    }
}

document.addEventListener('click', (e) => {
    openMore(e.target.dataset.name);

    if (e.target.classList.contains('read-more')) {
        changeBtn(e.target)
    }
})









