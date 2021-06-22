function verificar()
{
    var res = document.querySelector('#res')
    var ano = document.querySelector('#ano')
    var Rsexo = document.getElementsByName('sexo')
    var idade = new Date().getFullYear() - ano.value
    var sexo = ''
    var img = document.createElement('img')
    
    if (Rsexo[0].checked)
    {
        sexo = 'Homem'
    } else
    {
        sexo = 'Mulher'
    }
    if (ano.value <= 0)
    {
        alert('Verifique os dados e tente novamente!')
    } else
    {
        if (idade < 15 && sexo == 'Homem')
        {
            img.setAttribute('src', 'imagens/crianca-menino.jpg')
            img.setAttribute('alt', 'foto de um menino')
        } else if (idade < 40 && sexo == 'Homem')
        {
            img.setAttribute('src', 'imagens/homem-adulto.jpg')
            img.setAttribute('alt', 'foto de um homem')
        } else if (sexo == 'Homem')
        {
            img.setAttribute('src', 'imagens/homem-idoso.jpg')
            img.setAttribute('alt', 'foto de um idoso')
        } else if (idade < 15)
        {
            img.setAttribute('src', 'imagens/crianca-mulher.jpg')
            img.setAttribute('alt', 'foto de uma menina')
        } else if (idade < 40)
        {
            img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            img.setAttribute('alt', 'foto de uma mulher')
        } else if (sexo == 'Mulher')
        {
            img.setAttribute('src', 'imagens/mulher-idosa.jpg')
            img.setAttribute('alt', 'foto de uma idosa')
        }
        img.hidden = false
        res.innerHTML = `<p>Detectamos: ${sexo} com ${idade} anos</p>`
        res.appendChild(img)
    }
}