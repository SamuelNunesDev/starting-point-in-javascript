let idSection = document.querySelector('#section')

function home()
{
    idSection.innerHTML = ` <div id="op1">
        <input type="button" value="Montar o PC"  onclick="montandoPC()">
        <input type="button" value="Extrato GSM" id="bt1" onclick="extratoGSM()">
    </div>
    <div id="op2">
        <input type="button" value="Internet" onclick="internet()">
        <input type="button" value="Erros" id="bt2" onclick="erros()">
    </div>
    <div id="op3">
        <input type="button" value="Instalação dos Programas" id="bt4" onclick="instalacaoProgramas()">
        <input type="button" value="Colaborar" id="bt3" onclick="faleConosco()">
    </div> `
}
function sobre()
{
    idSection.innerHTML = ` <h2>Sobre a Plataforma</h2>
    <p>Saiba mais sobre a plataforma e seus objetivos assistindo um breve vídeo:</p>
    <iframe width="820px" height="350" src="https://www.youtube.com/embed/vbI5LcMXlS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>Então é isto... para sugestões, críticas, elogios clique aqui &#x279C <input type="button" value="FALE CONOSCO" onclick="faleConosco()" id="faleconosco"></p> `
}
function faleConosco()
{
    idSection.innerHTML = ` <article id="artigo">
        <h2>Que tal colaborar para o crescimento do projeto?</h2>
        <p>Surgiu alguma dúvida ou erro?<br>Gostaria de colaborar com uma sugestão ou crítica?</p>
        <p>Fale conosco através do whatsapp! Sua mensagem será respondida do possível.</p>
        <form action="https://wa.me/553888451471" target="_blank" id="formulario">
            <textarea id="msg" cols="30" name="text" rows="9"></textarea>
            <input type="button" value="Enviar Mensagem" onclick="bt_msg()">
        </form>
        <aside>
            <ul>
                <li>Acesse também &#x279C <a href="https://univgx.vgxcontactcenter.com.br/" target="_blank" rel="next">UNIVGX</a></li>
                <li>Para mais informações sobre a plataforma clique aqui &#x279C <input type="button" value="SOBRE" onclick="sobre()" id="sobre"></li>
            </ul>
        </aside>
    </article> `
}
function bt_msg()
{
    let form = document.querySelector('#formulario')
    let txt = document.querySelector('#msg')
    let article = document.querySelector('#artigo')
    let agradecimento = document.createElement('p')

    agradecimento.innerText = 'Obrigado por colaborar!'
    article.appendChild(agradecimento)

    txt.value += '\n\n _by: Projeto Mão na Roda_'
    form.submit(txt.value)
    form.parentNode.removeChild(form)
}
function montandoPC()
{
    idSection.innerHTML = ` <h2>Montagem do PC</h2>
    <p>Aprenda a montar a máquina disponibilizada de forma ágil e simples com o vídeo a seguir: </p>
    <iframe width="820" height="360" src="https://www.youtube.com/embed/6hGaE3ZFEhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>Então é isto... para sugestões, críticas, elogios clique aqui &#x279C <input type="button" value="FALE CONOSCO" onclick="faleConosco()" id="faleconosco"></p> `
}
function internet()
{
    idSection.innerHTML = ` <h2>Problemas com a Internet?</h2>
    <p>Entenda um pouco mais sobre a internet e programas de forma simples e didática: </p>
    <iframe width="820" height="330" src="https://www.youtube.com/embed/u0tDCvbjDK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>Então é isto... para sugestões, críticas, elogios clique aqui &#x279C <input type="button" value="FALE CONOSCO" onclick="faleConosco()" id="faleconosco"></p> `
}
function instalacaoProgramas()
{
    idSection.innerHTML = ` <h2>Problemas com a Instalação dos Programas?</h2>
    <p>Veja o passo a passo de como instalar todos os programas: </p>
    <iframe width="820" height="330" src="https://www.youtube.com/embed/2NyVoBpq8vQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>Para fazer o download dos programas clique aqui &#x279C <a href="https://mega.nz/file/9Rl33QAb#tjKN6VXMOoxxkBhuER_Cu5qcFJEeRwcxMhaVlLEZ0Vg" rel="next" target="_blank">DOWNLOAD<a> `
}
function extratoGSM()
{
    idSection.innerHTML = ` <h2>Problemas com o Extrato GSM?</h2>
    <p>Como solucionar os problemas mais comuns relacionados ao extrato GSM: </p>
    <iframe width="820" height="330" src="https://www.youtube.com/embed/S3JMZXPjeKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>Para acessar o extrato GSM clique aqui &#x279C <a href="http://extratogsm/extratoGSM/default.jsp" rel="next" target="_blank">EXTRATO GSM</a></p> `
}
function erros()
{
    idSection.innerHTML = ` <h2>Problemas com Erros?</h2>
    <p>Entenda como lidar com erros sistêmicos de forma assertiva: </p>
    <iframe width="820" height="330" src="https://www.youtube.com/embed/6hGaE3ZFEhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>Então é isto... para sugestões, críticas, elogios clique aqui &#x279C <input type="button" value="FALE CONOSCO" onclick="faleConosco()" id="faleconosco"></p> `
}