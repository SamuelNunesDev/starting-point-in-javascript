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
    </div>
    <footer id="developer">
        <p>Desenvolvido por Samuel Nunes</p>
    </footer> `
}
function sobre()
{
    idSection.innerHTML = ` <h2>Sobre a Plataforma</h2>
    <p>Saiba mais sobre a plataforma e seus objetivos assistindo um breve vídeo:</p>
    <iframe width="820px" height="350" src="https://www.youtube.com/embed/vbI5LcMXlS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>Então é isto... para sugestões, críticas, elogios clique aqui &#x279C <input type="button" value="FALE CONOSCO" onclick="faleConosco()" class="bt_hyperlink_black"></p>
    <footer id="developer">
        <p>Desenvolvido por Samuel Nunes</p>
    </footer> `
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
                <li>Acesse também &#x279C <a href="https://univgx.vgxcontactcenter.com.br/" target="_blank" rel="next" class="univgx">UNIVGX</a></li>
                <li>Para mais informações sobre a plataforma clique aqui &#x279C <input type="button" value="SOBRE" onclick="sobre()" class="bt_hyperlink"></li>
            </ul>
        </aside>
    </article>
    <footer id="developer">
        <p>Desenvolvido por Samuel Nunes</p>
    </footer> `
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
    <p>Então é isto... para sugestões, críticas, elogios clique aqui &#x279C <input type="button" value="FALE CONOSCO" onclick="faleConosco()" class="bt_hyperlink_black"></p>
    <footer id="developer">
        <p>Desenvolvido por Samuel Nunes</p>
    </footer> `
}
function internet()
{
    idSection.innerHTML = ` <h2>Problemas com a Internet?</h2>
    <p>Entenda um pouco mais sobre a internet e programas de forma simples e didática: </p>
    <iframe width="820" height="330" src="https://www.youtube.com/embed/u0tDCvbjDK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>Então é isto... para sugestões, críticas, elogios clique aqui &#x279C <input type="button" value="FALE CONOSCO" onclick="faleConosco()" class="bt_hyperlink_black"></p>
    <footer id="developer">
        <p>Desenvolvido por Samuel Nunes</p>
    </footer> `
}
function instalacaoProgramas()
{
    idSection.innerHTML = ` <h2>Problemas com a Instalação dos Programas?</h2>
    <p>Veja o passo a passo de como instalar todos os programas: </p>
    <iframe width="820" height="330" src="https://www.youtube.com/embed/2NyVoBpq8vQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>Para fazer o download dos programas clique aqui &#x279C <a href="https://mega.nz/file/9Rl33QAb#tjKN6VXMOoxxkBhuER_Cu5qcFJEeRwcxMhaVlLEZ0Vg" rel="next" target="_blank" class="bt_hyperlink_black">DOWNLOAD<a>
    <footer id="developer">
        <p>Desenvolvido por Samuel Nunes</p>
    </footer> `
}
function extratoGSM()
{
    idSection.innerHTML = ` <h2>Problemas com o Extrato GSM?</h2>
    <p>Como solucionar os problemas mais comuns relacionados ao extrato GSM: </p>
    <iframe width="820" height="330" src="https://www.youtube.com/embed/S3JMZXPjeKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>Para acessar o extrato GSM clique aqui &#x279C <a href="http://extratogsm/extratoGSM/default.jsp" rel="next" target="_blank" class="bt_hyperlink_black">EXTRATO GSM</a></p>
    <footer id="developer">
        <p>Desenvolvido por Samuel Nunes</p>
    </footer> `
}
function erros()
{
    idSection.innerHTML = ` <h2>Problemas com Erros?</h2>
    <p>Entenda como lidar com erros sistêmicos de forma assertiva: </p>
    <iframe width="820" height="330" src="https://www.youtube.com/embed/6hGaE3ZFEhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>Agora para provar a si mesmo que está por dentro de como solucionar erros frequentes conclua os exercícios propostos clicando aqui &#x279C <input type="button" value="EXERCÍCIOS" onclick="exercicios()" class="bt_hyperlink_black"></p>
    <footer id="developer">
        <p>Desenvolvido por Samuel Nunes</p>
    </footer> `
}
function exercicios()
{
    let dev = document.querySelector('#developer')
    dev.parentNode.removeChild(dev)

    idSection.innerHTML = ` <article id="artigo">
        <h2>Vamos Exercitar os Conhecimentos Adquiridos?</h2>
        <h3>01 - Qual setor reponsável pela resolução do erro abaixo?</h3>
        <img class="img-exercicio" src="imagens/erros/erro01.jpeg" alt="imagem de erro">
        <p class="exercicio">
            <input type="radio" name="ex1" id="ex01-a"><label for="ex01-a">A - TI</label>       
        </p>
        <p class="exercicio">
            <input type="radio" name="ex1" id="ex01-b"><label for="ex01-b">B - Planejamento</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex1" id="ex01-c"><label for="ex01-c">C - Internet</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex1" id="ex01-d"><label for="ex01-d">D - Operação</label>
        </p>
        <br>
        <h3>02 - Qual o setor responsável pela resolução do erro abaixo?</h3>
        <img class="img-exercicio" src="imagens/erros/erro02.jpeg" alt="imagem de erro">
        <p class="exercicio">
            <input type="radio" name="ex2" id="ex02-a"><label for="ex02-a">A - TI</label>       
        </p>
        <p class="exercicio">
            <input type="radio" name="ex2" id="ex02-b"><label for="ex02-b">B - Planejamento</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex2" id="ex02-c"><label for="ex02-c">C - Internet</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex2" id="ex02-d"><label for="ex02-d">D - Operação</label>
        </p>
        <br>
        <h3>03 - Qual o setor responsável pela resolução do erro abaixo?</h3>
        <img class="img-exercicio" src="imagens/erros/erro03.jpeg" alt="imagem de erro">
        <p class="exercicio">
            <input type="radio" name="ex3" id="ex03-a"><label for="ex03-a">A - TI</label>       
        </p>
        <p class="exercicio">
            <input type="radio" name="ex3" id="ex03-b"><label for="ex03-b">B - Planejamento</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex3" id="ex03-c"><label for="ex03-c">C - Internet</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex3" id="ex03-d"><label for="ex03-d">D - Operação</label>
        </p>
        <br>
        <h3>04 - Qual o setor responsável pela resolução do erro abaixo?</h3>
        <img class="img-exercicio" src="imagens/erros/erro04.jpeg" alt="imagem de erro">
        <p class="exercicio">
            <input type="radio" name="ex4" id="ex04-a"><label for="ex04-a">A - TI</label>       
        </p>
        <p class="exercicio">
            <input type="radio" name="ex4" id="ex04-b"><label for="ex04-b">B - Planejamento</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex4" id="ex04-c"><label for="ex04-c">C - Internet</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex4" id="ex04-d"><label for="ex04-d">D - Operação</label>
        </p>
        <br>
        <h3>05 - Qual o setor responsável pela resolução do erro abaixo?</h3>
        <img class="img-exercicio" src="imagens/erros/erro05.jpeg" alt="imagem de erro">
        <p class="exercicio">
            <input type="radio" name="ex5" id="ex05-a"><label for="ex05-a">A - TI</label>       
        </p>
        <p class="exercicio">
            <input type="radio" name="ex5" id="ex05-b"><label for="ex05-b">B - Planejamento</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex5" id="ex05-c"><label for="ex05-c">C - Internet</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex5" id="ex05-d"><label for="ex05-d">D - Operação</label>
        </p>
        <br>
        <h3>06 - O que deve ser feito para resolver o erro abaixo?</h3>
        <img class="img-exercicio" src="imagens/erros/erro06.jpeg" alt="imagem de erro">
        <p class="exercicio">
            <input type="radio" name="ex6" id="ex06-a"><label for="ex06-a">A - Reiniciar a máquina e abrir o programa normalmente.</label>       
        </p>
        <p class="exercicio">
            <input type="radio" name="ex6" id="ex06-b"><label for="ex06-b">B - Abrir o CRM antes de executar o discador.</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex6" id="ex06-c"><label for="ex06-c">C - Executar o programa como administrador.</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex6" id="ex06-d"><label for="ex06-d">D - Reinstalar o programa, pois o mesmo está corrompido.</label>
        </p>
        <br>
        <h3>07 - O que deve ser feito para resolver o erro abaixo?</h3>
        <img class="img-exercicio" src="imagens/erros/erro07.jpeg" alt="imagem de erro">
        <p class="exercicio">
            <input type="radio" name="ex7" id="ex07-a"><label for="ex07-a">A - Alternar a VPN.</label>       
        </p>
        <p class="exercicio">
            <input type="radio" name="ex7" id="ex07-b"><label for="ex07-b">B - Trocar o provedor de internet.</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex7" id="ex07-c"><label for="ex07-c">C - Abrir o gerenciador de tarefas e finalizar os processos do mesmo.</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex7" id="ex07-d"><label for="ex07-d">D - Reinstalar o programa, pois o mesmo pode estar corrompido.</label>
        </p>
        <br>
        <h3>08 - O que deve ser feito para resolver o erro abaixo?</h3>
        <img class="img-exercicio" src="imagens/erros/erro08.jpeg" alt="imagem de erro">
        <p class="exercicio">
            <input type="radio" name="ex8" id="ex08-a"><label for="ex08-a">A - Validar o acesso com o planejamento ou supervisor.</label>       
        </p>
        <p class="exercicio">
            <input type="radio" name="ex8" id="ex08-b"><label for="ex08-b">B - Reinstalar o EVAMIND.</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex8" id="ex08-c"><label for="ex08-c">C - Executar o EVAMIND como administrador.</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex8" id="ex08-d"><label for="ex08-d">D - Reinstalar o programa, pois o mesmo pode estar corrompido.</label>
        </p>
        <br>
        <h3>09 - O que deve ser feito para resolver o erro abaixo?</h3>
        <img class="img-exercicio" src="imagens/erros/erro09.jpeg" alt="imagem de erro">
        <p class="exercicio">
            <input type="radio" name="ex9" id="ex09-a"><label for="ex09-a">A - Executar o programa como administrador.</label>       
        </p>
        <p class="exercicio">
            <input type="radio" name="ex9" id="ex09-b"><label for="ex09-b">B - Reinstalar o programa, pois o mesmo pode estar corrompido.</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex9" id="ex09-c"><label for="ex09-c">C - Validar o acesso com o planejamento ou supervisor.</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex9" id="ex09-d"><label for="ex09-d">D - Reinstalar o EVAMIND.</label>
        </p>
        <br>
        <h3>10 - Qual a melhor forma dentre as abaixo para avaliar a situação e resolver o problema?</h3>
        <p class="exercicio">
            <input type="radio" name="ex10" id="ex010-a"><label for="ex010-a">A - Reiniciar o computador - Executar todos programas como administrador - Deixar a internet somente por conta dos sistemas - Excluir os programas da área de trabalho</label>       
        </p>
        <p class="exercicio">
            <input type="radio" name="ex10" id="ex010-b"><label for="ex010-b">B - Verificar se a VPN está conectada - Verificar a versão dos programas - Avaliar a qualidade da conexão - Em casos de erros pontuais, acionar o setor responsável</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex10" id="ex010-c"><label for="ex010-c">C - Ligar no planejamento - Pedir ajuda imediatamente no grupo do TI - Ligar no provedor e reclamar da internet - Acionar o superior hierarquico</label>
        </p>
        <p class="exercicio">
            <input type="radio" name="ex10" id="ex010-d"><label for="ex010-d">D - Reinstalar o programas executando com administrador - Fazer o teste de internet - Limpar o cache do navegador - Reiniciar a máquina</label>
        </p>
        <br>
        <input type="button" value="Finalizar Teste" id="bt-exercicio" onclick="finalizarTeste()">
        <footer>
            <p>Desenvolvido por Samuel Nunes</p>
        </footer>
    </article> `
}
function finalizarTeste()
{

    let questoes = []
    let acertos = 0

    for (let q = 1; q <= 10; q++)
    {
        questoes[q] = document.getElementsByName(`ex${q}`)
    }
    if (questoes[1][1].checked)
    {
        acertos++
    }
    if (questoes[2][1].checked)
    {
        acertos++
    }
    if (questoes[3][0].checked)
    {
        acertos++
    }
    if (questoes[4][0].checked)
    {
        acertos++
    }
    if (questoes[5][0].checked)
    {
        acertos++
    }
    if (questoes[6][2].checked)
    {
        acertos++
    }
    if (questoes[7][3].checked)
    {
        acertos++
    }
    if (questoes[8][0].checked)
    {
        acertos++
    }
    if (questoes[9][2].checked)
    {
        acertos++
    }
    if (questoes[10][1].checked)
    {
        acertos++
    }
    if (acertos <= 3)
    {
        idSection.innerHTML = ` <article id="artigo">
            <h2>Você acertou ${acertos} questões de 10</h2>
            <p class="resultado">Seria interessante assistir os vídeos novamente com mais atenção...</p>
            <p class="resultado">Talvez algo não ficou claro ou bem explicado o suficiente... </p>
            <p class="resultado">Nos envie uma mensagem clicando aqui &#x279C <input type="button" value="FALE CONOSCO" onclick="faleConosco()" class="bt_hyperlink"></p>
            <p class="resultado">Acesse também &#x279C <a href="https://univgx.vgxcontactcenter.com.br/" target="_blank" rel="next" class="univgx">UNIVGX</a></p>
            <p class="resultado">Acesse também &#x279C <a href="http://172.30.204.2:8085/" target="_blank" rel="next" class="univgx">Feedback Web</a></p>
            <p class="resultado"> Para fazer o download das imagens dos erros clique aqui &#x279C <a class="univgx" href="https://mega.nz/file/hsBFlYDY#v27LtibeZJ6sFJQoTe6SToDc2juVYEMW-5wo32aS2jo" rel="next" target="_blank">DOWNLOAD</a></p>
            <footer>
                <p>Desenvolvido por Samuel Nunes</p>
            </footer>
        </article> `
    }
    else if (acertos < 7)
    {
        idSection.innerHTML = ` <article id="artigo">
        <h2>Você acertou ${acertos} questões de 10</h2>
        <p class="resultado">Você já é capaz de resolver alguns erros por conta própria, mas rever os videos seria bom...</p>
        <p class="resultado">Talvez algo não ficou claro ou bem explicado o suficiente... </p>
        <p class="resultado">Nos envie uma mensagem clicando aqui &#x279C <input type="button" value="FALE CONOSCO" onclick="faleConosco()" class="bt_hyperlink"></p>
        <p class="resultado">Acesse também &#x279C <a href="https://univgx.vgxcontactcenter.com.br/" target="_blank" rel="next" class="univgx">UNIVGX</a></p>
        <p class="resultado">Acesse também &#x279C <a href="http://172.30.204.2:8085/" target="_blank" rel="next" class="univgx">Feedback Web</a></p>
        <footer>
            <p>Desenvolvido por Samuel Nunes</p>
        </footer>
    </article> `
    }
    else if (acertos < 10)
    {
        idSection.innerHTML = ` <article id="artigo">
        <h2>Você acertou ${acertos} questões de 10</h2>
        <p class="resultado">Muito bom! Você consegue identificar e solucionar erros com agilidade...</p>
        <p class="resultado">Que tal colaborar para o crescimento do projeto?</p>
        <p class="resultado">Nos envie uma mensagem clicando aqui &#x279C <input type="button" value="FALE CONOSCO" onclick="faleConosco()" class="bt_hyperlink"></p>
        <p class="resultado">Acesse também &#x279C <a href="https://univgx.vgxcontactcenter.com.br/" target="_blank" rel="next" class="univgx">UNIVGX</a></p>
        <p class="resultado">Acesse também &#x279C <a href="http://172.30.204.2:8085/" target="_blank" rel="next" class="univgx">Feedback Web</a></p>
        <footer>
            <p>Desenvolvido por Samuel Nunes</p>
        </footer>
    </article> `
    }
    else
    {
        idSection.innerHTML = ` <article id="artigo">
        <h2>Você acertou ${acertos} questões de 10</h2>
        <p class="resultado">Parabéns! Você entendeu e absorveu bem conteúdo, além de ágil é capaz de resolver possíveis futuros erros!</p>
        <p class="resultado">Que tal colaborar para o crescimento do projeto?</p>
        <p class="resultado">Nos envie uma mensagem clicando aqui &#x279C <input type="button" value="FALE CONOSCO" onclick="faleConosco()" class="bt_hyperlink"></p>
        <p class="resultado">Acesse também &#x279C <a href="https://univgx.vgxcontactcenter.com.br/" target="_blank" rel="next" class="univgx">UNIVGX</a></p>
        <p class="resultado">Acesse também &#x279C <a href="http://172.30.204.2:8085/" target="_blank" rel="next" class="univgx">Feedback Web</a></p>
        <footer>
            <p>Desenvolvido por Samuel Nunes</p>
        </footer>
    </article> `
    }
}