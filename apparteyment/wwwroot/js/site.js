// evento que adiciona a classe active aos container que possuem a classe revela, que junto com o css, faz aparecer o conteudo ao scrollar.
window.addEventListener('scroll', revelar);

function revelar() {
    let revelas = document.querySelectorAll('.revela');

    for(let i = 0; i < revelas.length; i++) {

        let tamanhoJanela = window.innerHeight;
        let revelarTop = revelas[i].getBoundingClientRect().top;
        let revelarPonto = 150;

        if(revelarTop < tamanhoJanela - revelarPonto) {
            revelas[i].classList.add('active');
         } //else {
        //     revelas[i].classList.remove('active');
        // }
    }
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function() {
  // Obtém todos os campos de telefone
  var telefoneInputs = document.querySelectorAll('.telefone');

  // Obtém todos os campos de e-mail
  var emailInputs = document.querySelectorAll('.email');

  // Obtém todos os campos de nome
  var nomeInputs = document.querySelectorAll('.nome');

  // Obtém o botão de envio
  var submitButton = document.querySelector('.submit');

  // Obtém a mensagem de erro
  var errorMessageElement = document.getElementById('mensagem-erro');

  // Define a função de validação do campo de telefone
  function validateTelefone() {
    var telefone = this.value;
    var submitEnabled = false;
    var errorMessage = "";

    // Remove todos os caracteres não numéricos do telefone
    telefone = telefone.replace(/\D/g, '');

    // Formata o telefone como (00)00000-0000
    telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1)$2-$3');

    // Atualiza o valor do campo de telefone
    this.value = telefone;

    // Verifica se o telefone tem o número máximo de caracteres
    if (telefone.length === 14) {
      submitEnabled = true;
    }

    // Define a mensagem de erro e o estado do botão de envio
    errorMessageElement.textContent = errorMessage;
    submitButton.disabled = !submitEnabled;
  }

  // Define a função de validação do campo de e-mail
  function validateEmail() {
    var email = this.value;
    var submitEnabled = false;
    var errorMessage = "";

    // Verifica se o e-mail contém "@" seguido de "gmail.com" ou "outlook.com"
    if (/@(gmail|outlook)\.com$/.test(email)) {
      submitEnabled = true;
    } else {
      errorMessage = "Por favor, adicione um e-mail válido (gmail.com ou outlook.com).";
    }

    // Define a mensagem de erro e o estado do botão de envio
    errorMessageElement.textContent = errorMessage;
    submitButton.disabled = !submitEnabled;
  }

  // Define a função de validação do campo de nome
function validateNome() {
  var nome = this.value;
  var submitEnabled = false;
  var errorMessage = "";

  // Remove espaços em branco do início e do fim do nome
  nome = nome.trim();

  // Limita o nome a um máximo de 20 caracteres
  if (nome.length > 20) {
    nome = nome.substring(0, 20);
    this.value = nome;
  }

  // Verifica se o nome contém apenas letras
  if (/^[A-Za-z]+$/.test(nome)) {
    submitEnabled = true;
  } else {
    errorMessage = "Por favor, adicione um nome válido (apenas letras).";
  }

  // Define a mensagem de erro e o estado do botão de envio
  errorMessageElement.textContent = errorMessage;
  submitButton.disabled = !submitEnabled;
}

  // Adiciona um ouvinte de evento de entrada para cada campo de telefone
  for (var i = 0; i < telefoneInputs.length; i++) {
    telefoneInputs[i].addEventListener('input', validateTelefone);
  }

  // Adiciona um ouvinte de evento de entrada para cada campo de e-mail
  for (var i = 0; i < emailInputs.length; i++) {
    emailInputs[i].addEventListener('input', validateEmail);
  }

  // Adiciona um ouvinte de evento de entrada para cada campo de nome
  for (var i = 0; i < nomeInputs.length; i++) {
    nomeInputs[i].addEventListener('input', validateNome);
  }
};





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Obtém referências para os elementos do formulário
const form = document.querySelector('#cadastro-form');
const inputs = form.querySelectorAll('.campo');
const senhaInput = form.querySelector('.senha');
const confirmarSenhaInput = form.querySelector('.senhaConf');
const submitButton = form.querySelector('.submitBtn');
const mensagemErro = form.querySelector('#mensagem-erro');

// Função para verificar se todos os campos estão preenchidos e as senhas coincidem
function verificarFormulario() {
  let todosPreenchidos = true;
  let senhasCoincidem = senhaInput.value === confirmarSenhaInput.value;

  inputs.forEach((input) => {
    if (input.value === '') {
      todosPreenchidos = false;
      return;
    }
  });

  if (todosPreenchidos && senhasCoincidem) {
    submitButton.disabled = false;
    mensagemErro.textContent = '';
  } else {
    submitButton.disabled = true;

    if (!todosPreenchidos) {
      mensagemErro.textContent = 'Preencha todos os campos';
    } else if (!senhasCoincidem) {
      mensagemErro.textContent = 'As senhas não coincidem';
    }

    mensagemErro.style.color = 'red';
  }
}

// Adiciona um ouvinte de evento 'input' para cada campo do formulário
inputs.forEach((input) => {
  input.addEventListener('input', verificarFormulario);
});

senhaInput.addEventListener('input', verificarFormulario);
confirmarSenhaInput.addEventListener('input', verificarFormulario);

// Verificar formulário ao carregar a página
window.addEventListener('DOMContentLoaded', verificarFormulario);

////////////////////////////////////////////////////////////////////////////////////////////////////////




