function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
      elementoChute.innerHTML += '<div> Valor Invalido! </div>'
    }
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
       elementoChute.innerHTML =`<div> Valor invalido: Fale um Numero entre ${menorValor} e ${maiorValor}</div>`
    }
    

}

function chuteForInvalido(numero){
    Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

