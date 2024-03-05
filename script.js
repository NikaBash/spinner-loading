const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
});