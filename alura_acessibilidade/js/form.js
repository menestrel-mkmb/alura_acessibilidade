var cep = document.querySelector('#inp_forms-cep');
var formFields = document.querySelectorAll('.contatoCampo');

formFields.forEach(function(form){
    
})

cep.oninvalid = function(){
    this.setCustomValidity('');
    if(!this.validity.valid){
        this.parentNode.classList.add('contatoCampo-msg--erro');
        this.parentNode.classList.remove('contatoCampo--sucesso');
        this.setCustomValidity('CEP inválido.');
    } else {
        this.parentNode.classList.add('contatoCampo--sucesso');
        this.parentNode.classList.remove('contatoCampo-msg--erro');
    }
}