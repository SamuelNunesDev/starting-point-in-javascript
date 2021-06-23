let array = [1, 3, 4, 5, 6]

array.push(7)
array.sort()
console.log(array.length)
console.log(array)

for (let num in array)
{
    console.log(num)
}
console.log('textando index...')
console.log(array.indexOf(4))