function selecionar(selected) {
    var selecionado = document.getElementById('actived');
    selecionado.src = `img/icons/${selected}-white.svg`;
}

function toogleCardOption() {
    var state = document.getElementById('card_option').style.display;
    
    if(state == "none"){
        document.getElementById('card_option').style.display = 'block';
    } else if(state == "block") {
        document.getElementById('card_option').style.display = 'none';
    }
}

document.getElementById('user_option').onclick = function () {
    // card_option.style.display = 'block';
    toogleCardOption();
}