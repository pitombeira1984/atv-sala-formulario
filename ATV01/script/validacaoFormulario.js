export function validarFormulario(nome, email, senha, confirmarSenha){

    const criteriosSenha =  [
        /[A-Z]/, /[a-z]/, /\d/, /[\W_]/

    ];

    if(!nome || !email || !senha || !confirmarSenha){
        return{valido:false, mensagem:'Todos os campos são obrigatórios!'};
    }
    for (const criterio of criteriosSenha) {
        if (!criterio.test(senha)){
            return{valido: false , mensagem:'A senha deve conter pelo menos uma letra minuscula,uma maiuscula, um numero e um caracter especial'}
        }
    }
    if(senha.length < 8){
        return{valido:false, mensagem:'A senha deve conter no mínimo 8 caracteres'};
    }
    if(senha !== confirmarSenha){
        return{valido:false, mensagem:'As senhas não coincidem.'};
    }
    return{valido:true, mensagem:''}
}