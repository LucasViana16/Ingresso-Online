function comprar(){
    let tipo = document.getElementById("tipo-ingresso");
    let qtd = parseInt(document.getElementById("qtd").value);

    //Verificar se o número é positivo
    if(isNaN(qtd) || qtd <= 0){
        alert("Por Favor, insira um valor válido.");
        return
    }
    
    if(tipo.value == "pista"){
        ComprarPista(qtd);
    } else if (tipo.value == "superior") {
        ComprarSuperior(qtd);
    } else {
        tipo.value == "inferior"
        comprarInferior(qtd);
    }
}

function ComprarPista(qtd){
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if(qtd > qtdPista){
        alert("Quantidade indisponível para o tipo pista");
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert("Compra realizada com sucesso"); 
    }
}

function ComprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if(qtd > qtdSuperior){
        alert("Quantidade indisponível para o tipo superior");
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        alert("Compra realizada com sucesso"); 
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if(qtd > qtdInferior){
        alert("Quantidade indisponível para o tipo superior");
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        alert("Compra realizada com sucesso"); 
    }
}