# Notas Importantes

## Exercícios

01. Enviando caixas de mensagens ao usuário pelo navegador usando os comandos:
    * `window.alert(message)` : Exibe uma mensagem que requer uma confimação do usuário
    * `window.confirm(message)` : Exibe uma mensagem e retorna a escolha do usuário
    * `window.prompt(message)` : Exime uma mensagem e retorna um input do tipo string

02. Concatenando strings utilizando o '+'

03. Convertendo strings para números utilizando os comandos:
    * `Number.parseInt(n)` : Converte a string para um número inteiro
    * `Number.parseFloat(n)` : Converte a string para um número real
    * `Number(n)` : Análisa a string e converte para um número do seu tipo
    * `String(n)` : Converte de número para string
    * `typeof var` : Retorna o tipo primitivo da variavel
    * `n1 / n2 | 0` : Divisão inteira em JavaScript

04. Imprimindo textos na tela com placeholders utilizando os comandos:
    * `document.write('string ${var/method}')` : Escreve imediatamente na tela o que estiver entre crases, inclusive podem ser implementadas tags html. *Os placeholders só podem ser utilizados quando a string estiver entre crases*
    * `string.toUpperCase()` : Converte todas as letras minúsculas da string para letras maiúsculas
    * `string.toLowerCase()` : Converte todas as letras Maiúsculas da string para letras minúsculas
    * `string.replace('a', 'n')` : Troca os valores 'a' pelos valores 'b' dentro de uma string
    * `string.length()` : Retorna a quantidade de caracteres que a string contém
    * `n.toFixed(p)` : Fixa a quantidade de casas decimas 'p' a serem exibidas em um número real 'n'.
    * `n.toLocaleString('pt-br', {style: 'currency', 'currency' : 'BRL'})` : Converte o número para valor monetário.

05. Acessando os elementos do site através do DOM, aprendendo os 5 principais métodos:
    * `getElementsByTagName` -> Retorna os objetos pela tag HTML
    * `getElementByID` -> Retorna o objeto pelo ID
    * `getElementsByName` -> Retorna os objetos pelo name
    * `getElementsByClassName` -> Retorna os objetos pelo nome da classe
    * `getElementBySelector` -> Retorna o objeto referente ao seletor CSS
    Comentários adicionados no próprio exercício exemplificando a utilização.

06. Manipulando os eventos DOM pelo html e direto pelo javascript, principais eventos:
    * `mouseenter` : é acionado quando o cursor entra dentro da div
    * `mouseout` : é acionado quando o cursos sai para fora da div
    * `mousemove` : é acionado quando o cursor se move dentro da div
    * `mousedown` : é acionado quando a div está sob o clique do cursor
    * `mouseup` : é acionado quando o clique termina
    * `click` : é acionado quando a div recebe um clique rapido/simples
    Comentários adicionados no próprio exercício exemplificando a utilização.

07. Criando inputs de numeros e fazendo uma soma entre eles.

08. Estruturas condicionais em JavaScript e criação de arquivos .js

09. Praticando estruturas condicionais e capturando dados de inputs HTML
