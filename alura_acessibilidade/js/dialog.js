// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');
var dialogInert = document.querySelector('#conteudoForaDialog');
var video = document.querySelector('.secaoInstitucional-video');

btnAbreDialog.style.display = 'block';

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-campo').focus();
  video.removeAttribute('controls');
  dialogInert.inert = true;
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');
  dialogInert.inert = false;
  video.setAttribute('controls', true);
  btnAbreDialog.focus();
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);

document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) 
    isEscape = (evt.key === "Escape" || evt.key === "Esc");
  
  if(isEscape && dialog.classList.contains('dialogNewsletter--aberto'))
    fechandoDialog();
}
