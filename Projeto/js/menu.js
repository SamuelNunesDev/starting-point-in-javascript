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