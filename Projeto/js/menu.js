let idSection = document.querySelector('#section')

function home()
{
    idSection.innerHTML = ` <div id="op1">
        <input type="button" value="Montar o PC">
        <input type="button" value="Extrato GSM" id="bt1">
    </div>
    <div id="op2">
        <input type="button" value="Internet">
        <input type="button" value="Erros" id="bt2">
    </div>
    <div id="op3">
        <input type="button" value="Instalação dos Programas" id="bt4">
        <input type="button" value="Colaborar" id="bt3">
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
        <p>Fale conosco através do whatsapp! sua mensagem será respondida do possível.</p>
        <form action="https://wa.me/553888451471" target="_blank" id="formulario">
            <textarea id="msg" cols="30" name="text" rows="9"></textarea>
            <input type="button" value="Enviar Mensagem" onclick="bt_msg()">
        </form>
        <aside>
            <ul>
                <li>Acesse também &#x279C <a href="https://univgx.vgxcontactcenter.com.br/" target="_blank" rel="next">UNIVGX</a></li>
                <li>Para mais informações sobre a plataforma &#x279C <input type="button" value="SOBRE" onclick="sobre()" id="sobre"></li>
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

    form.submit(txt.value)
    form.parentNode.removeChild(form)
}