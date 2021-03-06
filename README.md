# Notas Importantes

## Projeto

Clique no link para ser desviado para o projeto ->  [https://samuelnunesdev.github.io/starting-point-in-javascript/Projeto/](https://samuelnunesdev.github.io/starting-point-in-javascript/Projeto/)

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

10. Estruturas condicionais aninhadas: `else if`

11. Praticando condições com o `Switch`. *Obs: O case só funciona com números inteiros e/ou caracteres, não serve para testar intervalos também!*

12. Modularizando scripts e criando um site que mostra a hora em tempo real e modifica estilos dinamicamente.

13. Criando um site para verificar a idade do usuário e mostrar mensagens e imagens de forma dinamica.

14. Aprendendo a sintaxe das estruturas de repetições em javascript.

15. Fazendo um contador utilzando estruturas de repetições.

16. Criando elementos html de forma dinamica.

17. Entendendo como funcionam as arrays em javascript, alguns comandos básicos:
    * `array.push(n)` -> Adiciona um elemento 'n' ao ultimo índice do vetor.
    * `array.sort()` -> Orgazniza os índices do vetor.
    * `array.length` -> Acesso a quantidade de itens no vetor *Não é um método e sim um atributo*
    * `for (let num in array)`
           `{`
               `console.log(num)` -> foreach
            `}`
    * `array.indexOf(n)` -> Busca dentro do vetor o índice que contém o elemento 'n'.

18. Aprendendo um pouco mais sobre funções, como passar parâmetros, utilizar parametros e deixá-los com valores pré-definidos e usar funções de forma recursiva.
    -> Comentários adicionados no próprio exercício exemplificando a utilização.

19. Análisador de numeros, como criar interatividade entre várias funções, adicionar elementos html, validação de dados e armazenar valores obtidos em vetores.

20. Aprendendo um pouco sobre objetos, definições, como acessar atributos e etc... *é interessante seguir os pilares de POO para definí-los quando o foco é a reutilização*
