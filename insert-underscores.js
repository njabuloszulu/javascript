
const findOdd = (number) => {
  let newNumber = number.toString().split('')
  for (var i = 0; i < newNumber.length; i++) {
    if (newNumber[i] % 2 && newNumber[i - 1] % 2) {
      newNumber.push(newNumber.splice(i, 0, '_'))
    }
  }
  return newNumber.join('')
}
console.log(findOdd(135679))