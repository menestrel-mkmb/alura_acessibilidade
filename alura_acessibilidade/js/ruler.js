const rulerBtn = document.querySelector('#btn_ruler');

const rulerSection = document.createElement('section');
const rulerBefore = document.createElement('div');
const rulerAfter = document.createElement('div');
const ruler = document.createElement('div');

(function createFocusRuler () {
    rulerSection.classList.add('ruler__sect');

    rulerBefore.classList.add('ruler-dark');
    ruler.classList.add('ruler-light');
    rulerAfter.classList.add('ruler-dark');
    
    rulerBtn.addEventListener('click', function() {
        rulerSection.classList.toggle('ruler-focus');
    });

    document.body.appendChild(rulerSection);

    rulerSection.appendChild(rulerBefore);
    rulerSection.appendChild(ruler);
    rulerSection.appendChild(rulerAfter);
})();