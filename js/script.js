let btn = document.querySelector("#btn-enviar");

btn.onclick = function validation() {
    let nome = cadastro.nome.value;
    let email = cadastro.email.value;
    let senha = cadastro.senha.value;
    let confirmaSenha = cadastro.repetesenha.value;

    if(nome==""){
        alert("Por favor preencha o seu nome");
        cadastro.nome.focus();
        return;
    }

    if(email==""){
        alert("Por favor preencha o seu e-mail");
        cadastro.email.focus();
        return; 
    }

    if(senha != confirmaSenha){
        alert("As senhas são diferentes");
        cadastro.confirmaSenha.focus();
        return;
    } else {
        alert("Formulário enviado com sucesso!");
    }  
}