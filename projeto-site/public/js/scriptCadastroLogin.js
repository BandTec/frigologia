function login() {

    if (usuario.value == 'frigologia@gmail.com' && senha.value == 'frigologia') {
        window.location.href = "../Dashboard/dashboard.html";
        limpar();
    } else {
        alert("Senha ou usuário incorreto!");
        limpar();
    }

}

// setTimeout ele executa algo depois que o tempo determinado acabar
// setTimout = ele pega o id, configura a propriedade style e depois configura a opacidade do style
function abrir() {
    limpar();
    popup.style.display = 'block';
    form.style.display = 'none';
    setTimeout(() => {
        popup.style.opacity = '1';
        form.style.display = '0';
    }, 200);

}
function fechar() {
    form.style.display = '1';
    popup.style.opacity = '0';
    setTimeout(() => {
        popup.style.display = 'none';
        form.style.display = 'block';
    }, 200);
}
function cadastro() {
    form.style.opacity = '1';
    popup.style.display = '0';
    setTimeout(() => {
        popup.style.display = 'none';
        form.style.display = 'block';
    }, 200);
    
}

function limpar() {
    usuario.value = '';
    senha.value = '';
}