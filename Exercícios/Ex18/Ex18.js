// Sintaxe básica das funções

function parImpar(n)
{
    if (n % 2 == 0)
    {
        return `O número ${n} é par!`
    }
    return `O número ${n} é ímpar!`
}
console.log(parImpar(21))

// Colocando parametros pré-definidos, para que o programa seja executado mesmo na falta da passagem dos mesmos

function soma(n1=0, n2=0)
{
    return n1 + n2
}
console.log(soma(4))

// Criando uma função dentro de uma variavel e recebendo seus parametros

let v = function(n)
{
    return n**2
}
console.log(v(5))