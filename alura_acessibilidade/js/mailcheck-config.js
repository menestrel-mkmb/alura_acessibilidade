var campoEmail = document.querySelector('#inp_forms-email');
var suggestionSpan = document.querySelector('#suggestion-mailcheck');

var domains = ['gmail.com', 'aol.com'];
var secondLevelDomains = ['hotmail'];
var topLevelDomains = ["com", "net", "org", "br"];

var suggestionString = '';

campoEmail.addEventListener('blur', function() {
  validEmail();
  Mailcheck.run({
    email: campoEmail.value,
    domains: domains,                       // optional
    topLevelDomains: topLevelDomains,       // optional
    secondLevelDomains: secondLevelDomains, // optional
    suggested: function(suggestion) {
      suggestionSpan.classList.remove('escondeVisualmente');
      campoEmail.classList.add('contatoCampo--validouErro');
      campoEmail.parentNode.classList.add('contatoCampo--erro');
      suggestionSpan.textContent = "Erro encontrado. Você quis dizer " + suggestion.full + "?";
      suggestionString = suggestion.full;
      suggestionSpan.setAttribute('tabindex','0');
      suggestionSpan.focus();
    },
  });
});

suggestionSpan.addEventListener('click', function(){
  validEmail();
  campoEmail.value = suggestionString;
  campoEmail.title = 'Correção executada';
  campoEmail.focus();
});

function validEmail(){
  if (campoEmail.validity.valid) {
    suggestionSpan.classList.add('escondeVisualmente');
    suggestionSpan.textContent = '';
    suggestionSpan.removeAttribute('tabindex');
    campoEmail.classList.remove('contatoCampo--validouErro');
    campoEmail.parentNode.classList.remove('contatoCampo--erro');
  }
}
