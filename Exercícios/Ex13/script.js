var res = document.querySelector('#main')
        var idade = document.querySelector('#ano')
        var sexo = document.querySelector('form')

        function verificar()
        {
            var img = null

            if (new Date().getFullYear() - idade.value < 16 && sexo.sexo.value == 'Homem')
            {
                img = '<img src="imagens/crianca-menino.jpg" alt="imagem de uma criança homem">'
            } else if (new Date().getFullYear() - idade.value < 50 && sexo.sexo.value == 'Homem')
            {
                img = '<img src="imagens/homem-adulto.jpg" alt="imagem de um homem adulto">'
            } else if (sexo.sexo.value == 'Homem')
            {
                img = '<img src="imagens/homem-idoso.jpg" alt="imagem de um homem idoso">'
            } else if (new Date().getFullYear() - idade.value < 16 && sexo.sexo.value == 'Mulher')
            {
                img = '<img src="imagens/crianca-mulher.jpg" alt="imagem de uma criança mulher">'
            } else if (new Date().getFullYear() - idade.value < 50 && sexo.sexo.value == 'Mulher')
            {
                img = '<img src="imagens/mulher-adulta.jpg" alt="imagem de um mulher adulta">'
            } else if (sexo.sexo.value == 'Mulher')
            {
                img = '<img src="imagens/mulher-idosa.jpg" alt="imagem de um mulher idosa">'
            } else
            {
                alert('Verifique os dados e tente novamente!')
            }
            res.innerHTML += `<p>Detectamos: ${sexo.sexo.value} com ${new Date().getFullYear() - idade.value} anos.</p> <p>${img}</p>`
        }