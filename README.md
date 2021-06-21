# Notas Importantes

## Exercícios

01. Enviando caixas de mensagens ao usuário pelo navegador usando os comandos:
    -> `window.alert(message)` : Exibe uma mensagem que requer uma confimação do usuário
    -> `window.confirm(message)` : Exibe uma mensagem e retorna a escolha do usuário
    -> `window.prompt(message)` : Exime uma mensagem e retorna um input do tipo string

02. Concatenando strings utilizando o '+'

03. Convertendo strings para números utilizando os comandos:
    -> `Number.parseInt(n)` : Converte a string para um número inteiro
    -> `Number.parseFloat(n)` : Converte a string para um número real
    -> `Number(n)` : Análisa a string e converte para um número do seu tipo
    -> `String(n)` : Converte de número para string

04. Imprimindo textos na tela com placeholders utilizando os comandos:
    -> `document.write(`string ${var/method}`)` : Escreve imediatamente na tela o que estiver entre crases, inclusive podem ser implementadas tags html. *Os placeholders só podem ser utilizados quando a string estiver entre crases*
    -> `string.toUpperCase()` : Converte todas as letras minúsculas da string para letras maiúsculas
    -> `string.toLowerCase()` : Converte todas as letras Maiúsculas da string para letras minúsculas
    -> `string.replace('a', 'n')` : Troca os valores 'a' pelos valores 'b' dentro de uma string
    -> `string.length()` : Retorna a quantidade de caracteres que a string contém
    -> `n.toFixed(p)` : Fixa a quantidade de casas decimas 'p' a serem exibidas em um número real 'n'.
    -> `n.toLocaleString('pt-br', {style: 'currency', 'currency' : 'BRL'})` : Converte o número para valor monetário.
