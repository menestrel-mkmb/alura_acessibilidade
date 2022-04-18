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
      suggestionSpan.textContent = "Você quis dizer " + suggestion.full + "?";
      suggestionString = suggestion.full;
    },
  });
});

suggestionSpan.addEventListener('click', function(){
  campoEmail.value = suggestionString;
  validEmail();
});

function validEmail(){
  if (campoEmail.validity.valid) {
    suggestionSpan.classList.add('escondeVisualmente');
    campoEmail.classList.remove('contatoCampo--validouErro');
    campoEmail.parentNode.classList.remove('contatoCampo--erro');
  }
}
