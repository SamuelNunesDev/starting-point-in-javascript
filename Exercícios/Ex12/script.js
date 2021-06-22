  function carregar()
  {
    var hora = String(new Date().getHours())
    var minutos = String(new Date().getMinutes())
    var fundo = document.getElementsByTagName('body')[0]
    var img = document.querySelector('#img')
    var msg = document.querySelector('#msg')
    var link = document.querySelector('a')

    if (hora.length == 1)
    {
        hora = `0${hora}`
    }
    if (minutos.length == 1)
    {
        minutos = `0${minutos}`
    }

    msg.innerHTML = `<h2>Agora são ${hora}:${minutos}</h2>`

    if (hora < 2 || hora >= 18)
    {
        fundo.style.background = 'rgba(0, 0, 0, 0.747)'
        img.src = 'imagens/noite.jpg'
        img.alt = 'foto da noite'
    }
    else if (hora < 12)
    {
        fundo.style.background = 'rgba(222, 184, 135, 0.61)'
        img.src = 'imagens/manha.jpg'
        img.alt = 'foto da manha'
    }
    else if (hora < 18)
    {
        fundo.style.background = '#D97904'
        img.src = 'imagens/tarde.jpg'
        img.alt = 'foto da tarde'
    }
}