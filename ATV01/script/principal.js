import { validarFormulario } from "./validacaoFormulario.js";

document.getElementById('formularioRegistro').addEventListener('submit',function(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    const { valido, mensagem } = validarFormulario(nome, email, senha, confirmarSenha);
    
    if(!valido){
        alert(mensagem);
    }else{
        ('Login bem-sucedido!');
        window.location.href = 'bemvindo.html';
    }

    

})