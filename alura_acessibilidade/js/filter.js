var body = document.querySelector('body');
var filterBtn = document.querySelector('#btn_filter');

filterBtn.addEventListener('click', function() {
    body.classList.toggle('filter');
})