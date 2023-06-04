function validarFormulario() {
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const confirmarSenhaInput = document.getElementById("confirmarSenha");

    const nome = nomeInput.value;
    const email = emailInput.value;
    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;

    if (nome.trim().length < 1) {
        nomeInput.style.borderColor = "red";
        exibirMensagemErro("Por favor, informe seu nome completo (nome e sobrenome).", "erroNome");
        return false;
    } else {
        nomeInput.style.borderColor = ""; // Limpa a cor de borda
        exibirMensagemErro("", "erroNome"); // Limpa a mensagem de erro
    }

    var nomeSplit = nome.split(" ");
    if (nomeSplit.length < 2 || nomeSplit[1].trim().length < 1) {
        nomeInput.style.borderColor = "red";
        exibirMensagemErro("Por favor, informe seu sobrenome.", "erroNome");
        return false;
    } else {
        nomeInput.style.borderColor = ""; // Limpa a cor de borda
        exibirMensagemErro("", "erroNome"); // Limpa a mensagem de erro
    }

    if (email.trim().length < 1) {
        emailInput.style.borderColor = "red";
        exibirMensagemErro("Por favor, informe seu e-mail.", "erroEmail");
        return false;
    } else {
        emailInput.style.borderColor = ""; // Limpa a cor de borda
        exibirMensagemErro("", "erroEmail"); // Limpa a mensagem de erro
    }

    if (!email.includes("@")) {
        emailInput.style.borderColor = "red";
        exibirMensagemErro("O e-mail informado não é válido. Certifique-se de incluir o caractere '@'.", "erroEmail");
        return false;
    } else {
        emailInput.style.borderColor = ""; // Limpa a cor de borda
        exibirMensagemErro("", "erroEmail"); // Limpa a mensagem de erro
    }

    if (senha.trim().length < 8) {
        senhaInput.style.borderColor = "red";
        exibirMensagemErro("A senha deve ter no mínimo 8 caracteres.", "erroSenha");
        return false;
    } else {
        senhaInput.style.borderColor = ""; // Limpa a cor de borda
        exibirMensagemErro("", "erroSenha"); // Limpa a mensagem de erro
    }

    if (senha !== confirmarSenha) {
        senhaInput.style.borderColor = "red";
        confirmarSenhaInput.style.borderColor = "red";
        exibirMensagemErro("As senhas não coincidem.", "erroConfirmarSenha");
        return false;
    } else {
        senhaInput.style.borderColor = ""; // Limpa a cor de borda
        confirmarSenhaInput.style.borderColor = ""; // Limpa a cor de borda
        exibirMensagemErro("", "erroConfirmarSenha"); // Limpa a mensagem de erro
    }

    // Simulação do envio de e-mail para autenticação
    alert("Cadastro efetuado com sucesso! Um e-mail de autenticação foi enviado para " + email + ". Por favor, verifique sua caixa de entrada.");

    // Restante do código de envio do formulário...
}

function exibirMensagemErro(mensagem, campoErroId) {
    const mensagemErro = document.getElementById(campoErroId);
    mensagemErro.style.color = "red";
    mensagemErro.textContent = mensagem;
}
