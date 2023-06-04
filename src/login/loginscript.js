function validarFormulario(){
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    
    const email = emailInput.value;
    const senha = senhaInput.value;
    
    if (email.trim().length < 1) {
        emailInput.style.borderColor = "red";
        exibirMensagemErro("Por favor, informe seu e-mail.", "erroEmail");
        return false;
    } else {
        emailInput.style.borderColor = ""; 
        exibirMensagemErro("", "erroEmail"); 
    }
    
    if (!email.includes("@")) {
        emailInput.style.borderColor = "red";
        exibirMensagemErro("O e-mail informado não é válido. Certifique-se de incluir o caractere '@'.", "erroEmail");
        return false;
    } else {
        emailInput.style.borderColor = ""; 
        exibirMensagemErro("", "erroEmail"); 
    }
    
    if (senha.trim().length < 8) {
        senhaInput.style.borderColor = "red";
        exibirMensagemErro("A senha deve ter no mínimo 8 caracteres.", "erroSenha");
        return false;
    } else {
        senhaInput.style.borderColor = ""; 
        exibirMensagemErro("", "erroSenha"); 
    }
}

function exibirMensagemErro(mensagem, campoErroId) {
    const mensagemErro = document.getElementById(campoErroId);
    mensagemErro.style.color = "red";
    mensagemErro.textContent = mensagem;
}