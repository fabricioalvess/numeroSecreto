function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute
    if(chuteForInvalido(numero)){
        console.log('Numero Invalido.')
    }
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        console.log(`Valor invalido: O valor digitado precisa estar entre ${menorValor} e ${maiorValor}`)
    }
    

}

function chuteForInvalido(numero){
    Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

