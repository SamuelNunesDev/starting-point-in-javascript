let array = [1]

array.push(7)
array.sort()
console.log(array.length)
console.log(array)

for (let num in array)
{
    console.log(`teste for... ${num}`)
}
console.log('textando index...')
console.log(array.indexOf(4))
