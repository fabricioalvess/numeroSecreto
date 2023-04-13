
const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatoro()

function gerarNumeroAleatoro(){
    return parseInt(Math.random()* maiorValor + 1)
}

console.log('numero secreto: ',numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

