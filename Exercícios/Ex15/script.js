function contar()
{
    var inicio = document.querySelector('#inicio')
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#passo')
    var res = document.querySelector('#res')
    res.innerText = 'Contando: '
    
    if (String(inicio.value).length == 0 || String(fim.value).length == 0 || String(passo.value).length == 0)
    {
        res.innerText = 'Impossível contar! Preencha todos os campos e tente novamente!'
    } 
    else
    {
        if (Number(passo.value) <= 0)
        {
            alert('Passo inválido! Considerando PASSO 1!')
            passo.value = 1
        } 
        else if (Number(inicio.value) > Number(fim.value))
        {
            for (var c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value))
            {
                res.innerText += ` ${c} 👉 `
            }
        }
        for (var c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value))
        {
            res.innerText += ` ${c} 👉 `
        }
        res.innerText += '🏁'
    }
}
