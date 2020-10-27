    
    window.onload = changeTeam();
    function calcular() {
        var a = Number(valora.value);
        var b = Number(valorb.value);
        var c = Number(valorc.value);

        div_conta.innerHTML = '';

        var valorperdas = (b * c);

        div_conta.innerHTML += `<br>Multiplicando os pedaços perdidos pelo custo por quilograma,
        você perdeu <b>R$${valorperdas}</b>!`;

        var perdastotais = a - valorperdas;

        div_conta.innerHTML += `<br> Em outras palavras, você investiu realmente <b>R$${perdastotais}.</b>`;

        var porcentagem1 = valorperdas * 100;
        var porcentagem2 = porcentagem1 / a;

        div_conta.innerHTML += `<br>Isto significa que você perdeu <b>${porcentagem2.toFixed(2)}%</b> do seu investimento
        total<br>`;

        var nossaempresa = valorperdas * 0.2;

        div_conta.innerHTML += `<br> Você não acha que já perdeu muito por culpa do mau refrigeramento
        das carnes? <b>Nós acreditamos que sim!</b><br> Por isso, nós da Frigologia, oferecemos um serviço onde 
        temos como <b><u>OBJETIVO</u></b> fazer com que 80% destas perdas não existam!<br> O valor que você 
        perderia usando nosso produto, seria: <b>R$${nossaempresa.toFixed(2)}</b>`;
    }
