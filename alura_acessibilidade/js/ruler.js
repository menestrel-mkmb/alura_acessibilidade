const rulerBtn = document.querySelector('#btn_ruler');

const rulerSection = document.createElement('section');
const rulerBefore = document.createElement('div');
const rulerAfter = document.createElement('div');
const ruler = document.createElement('div');

document.addEventListener('mousemove', (e) => followCursorHorizontal(e));

function followCursorHorizontal (e) {
    rulerSection.style.flexDirection = 'column';

    rulerBefore.style.height = Number(e.clientY - ruler.offsetHeight/2) + 'px';
    rulerAfter.style.height = (window.innerHeight - e.clientY - ruler.offsetHeight/2) + 'px';
}

// A título de teste de modularidade e nome de classes
// document.addEventListener('mousemove', (e) => followCursorVertical(e));
// function followCursorVertical (e) {
//     rulerSection.style.flexDirection = 'row';

//     rulerBefore.style.width = Number(e.clientX - ruler.offsetWidth/2) + 'px';
//     rulerAfter.style.width = (window.innerWidth - e.clientX - ruler.offsetWidth/2) + 'px';
// }

(function createFocusRuler () {
    rulerSection.classList.add('ruler__sect');

    rulerBefore.classList.add('ruler-dark');
    ruler.classList.add('ruler-light');
    rulerAfter.classList.add('ruler-dark');

    const lineHeight = window.getComputedStyle(body).lineHeight;
    ruler.style.height = typeof(lineHeight) === 'number' ? (lineHeight + 'px') : (5 + '%');
    
    rulerBtn.addEventListener('click', function() {
        rulerSection.classList.toggle('ruler-focus');
    });

    document.body.appendChild(rulerSection);

    rulerSection.appendChild(rulerBefore);
    rulerSection.appendChild(ruler);
    rulerSection.appendChild(rulerAfter);
})();