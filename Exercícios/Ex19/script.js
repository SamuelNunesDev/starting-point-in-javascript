let valores = document.querySelector('#valores')
let valores_cadastrados = []
let res = document.querySelector('#res')
let bt_analisar = document.querySelector('#bt_analisar')

function validar(num)
{
    let numero = document.querySelector('#num')
    let numero_convertido = Number(numero.value)

    if (numero.value.length == 0 || numero_convertido < 0 || numero_convertido > 100)
    {
        alert('Valor inválido! Digite um número válido e tente novamente!')
    }
    else if (valores_cadastrados.length != 0)
    {
        if (valores_cadastrados.indexOf(numero_convertido) != -1)
        {
            alert('Valor já cadastrado! Digite um número que não esteja cadastrado!')
        }
        else 
        {
            return numero_convertido
        }
    }
    else if (numero_convertido == 0)
    {
        return '0'
    }
    else
    {
        return numero_convertido
    }
    return false
}

function adicionar()
{
    let n = validar(num)

    if (n)
    {
        let op = document.createElement('option')
        op.value = n
        op.text = `Valor ${n} adicionado`
        valores.appendChild(op)
        valores.hidden = false
        bt_analisar.hidden = false
        res.innerHTML = ''
        num.value = ''
        num.focus()

        valores_cadastrados.push(n)

    }
}
function analisar()
{
    let total = document.createElement('p')
    total.innerText = `Ao todo temos ${valores_cadastrados.length} elementos.`
    res.appendChild(total)

    let maior = document.createElement('p')
    maior.innerText = `O maior valor encontrado foi ${maior_num(valores_cadastrados)}`
    res.appendChild(maior)

    let menor = document.createElement('p')
    menor.innerText = `O menor valor encontrado foi ${menor_num(valores_cadastrados)}`
    res.appendChild(menor)

    let soma = document.createElement('p')
    soma.innerText = `A soma de todos os elementos é: ${somar(valores_cadastrados)}`
    res.appendChild(soma)

    let media = document.createElement('p')
    media.innerText = `A média dos valores é de: ${calcular_media(valores_cadastrados)}`
    res.appendChild(media)
}
function maior_num(array)
{
    let maior = 0

    for (let pos = 0; pos <= valores_cadastrados.length; pos++)
    {
        if (valores_cadastrados[pos] > maior)
        {
            maior = valores_cadastrados[pos]
        }
    }
    return maior
}
function menor_num(array)
{
    let menor = 101

    for (pos = 0; pos <= valores_cadastrados.length; pos++)
    {
        if (valores_cadastrados[pos] < menor)
        {
            menor = valores_cadastrados[pos]
        }
    }
    return menor
}
function somar(array)
{
    let soma = 0

    for (pos = 0; pos < valores_cadastrados.length; pos++)
    {
        console.log(valores_cadastrados[pos])
        soma += valores_cadastrados[pos]
    }
    return soma
}
function calcular_media(array)
{
    let sum = somar(valores_cadastrados)
    let quant = valores_cadastrados.length
    return sum / quant
}