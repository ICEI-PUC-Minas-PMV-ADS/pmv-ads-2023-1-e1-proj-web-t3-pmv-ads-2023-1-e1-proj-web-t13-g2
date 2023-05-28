function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    if (nome.trim().length < 1) {
        alert("Por favor, informe seu nome completo (nome e sobrenome).");
        return false;
    }

    var nomeSplit = nome.split(" ");
    if (nomeSplit.length < 2 || nomeSplit[1] === "") {
        alert("Por favor, informe seu sobrenome.");
        return false;
    }

    if (email.length < 1) {
        alert("Por favor, informe seu e-mail.");
        return false;
    }

    if (!email.includes("@")) {
        alert("O e-mail informado não é válido. Certifique-se de incluir o caractere '@'.");
        return false;
    }

    if (senha.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return false;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return false;
    }

    // Simulação do envio de e-mail para autenticação
    alert("Cadastro efetuado com sucesso! Um e-mail de autenticação foi enviado para " + email + ". Por favor, verifique sua caixa de entrada.");

    // Restante do código de envio do formulário...
}
