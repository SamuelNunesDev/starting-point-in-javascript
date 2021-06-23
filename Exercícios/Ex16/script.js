function tabuada()
{
    let num = document.querySelector('#num')
    let sel = document.querySelector('#tabuada')

    if (num.value.length == 0)
    {
        alert('Digite um número por favor!')
    }
    sel.innerHTML = ''
    for (let c = 0; c <= 10; c++)
    {
        let newElement = document.createElement('option')
        newElement.text = `${c} x ${num.value} = ${c * Number(num.value)}`
        newElement.value = c
        sel.appendChild(newElement)
    }
    sel.hidden = false
}