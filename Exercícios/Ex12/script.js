var hora = new Date().getHours()
        var minutos = new Date().getMinutes()
        var fundo = document.getElementsByTagName('body')[0]
        var img = document.querySelector('div#img')
        var msg = document.getElementsByTagName('h2')[0]
        var link = document.querySelector('a')

        msg.innerText = `Agora são ${hora}:${minutos}`

        if (hora < 2)
        {
            fundo.style.background = 'rgba(0, 0, 0, 0.747)'
            fundo.style.color = 'white'
            link.style.color = 'white'
            img.innerHTML = '<img src="imagens/noite.jpg" alt="imagem da noite">'
        }
        else if (hora < 12)
        {
            fundo.style.background = 'rgba(222, 184, 135, 0.61)'
            fundo.style.color = 'white'
            link.style.color = 'white'
            img.innerHTML = '<img src="imagens/manha.jpg" alt="imagem da manha">'
        }
        else if (hora < 18)
        {
            fundo.style.background = '#D97904'
            fundo.style.color = 'white'
            link.style.color = 'white'
            img.innerHTML = '<img src="imagens/tarde.jpg" alt="imagem da tarde">'
        }