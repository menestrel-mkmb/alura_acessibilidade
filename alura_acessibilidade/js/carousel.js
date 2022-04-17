var new0 = document.querySelector('#new0');
new0.style.display = 'block';

var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var news = document.querySelectorAll('.listaDeArtigos-item');

var indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.id = 'escondeVisualmente';
indicadorSlideAtual.textContent = ' (Slide Atual)';

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    btn.href = 'javascript:void(0)';
    
    news.forEach(function(_new){
      _new.style.display = 'none';
      
      if(this.getAttribute('data-sliderItem') === _new.getAttribute('data-noticia'))
      _new.style.display= 'block';
    }.bind(this));
    
    if(document.querySelector('#escondeVisualmente'))
      document.querySelector('#escondeVisualmente').remove();
    this.append(indicadorSlideAtual);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo');
    })
    this.classList.add('listaDeArtigos-slider-item--ativo');
  })
})