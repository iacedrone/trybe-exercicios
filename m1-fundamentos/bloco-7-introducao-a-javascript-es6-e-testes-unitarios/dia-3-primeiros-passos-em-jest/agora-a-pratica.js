const encode = (string) => {
  let newString = string.toLowerCase().replaceAll('a', '1')
  newString = newString.replaceAll('e', '2')
  newString = newString.replaceAll('i', 3)
  newString = newString.replaceAll('o', 4)
  newString = newString.replaceAll('u', 5)

  return(newString)
}

const decode = (number) => {
  let newNumber = number.toString().replaceAll('1', 'a')
  newNumber = newNumber.replaceAll('2', 'e')
  newNumber = newNumber.replaceAll('3', 'i')
  newNumber = newNumber.replaceAll('4', 'o')
  newNumber = newNumber.replaceAll('5', 'u')

  return(newNumber)
}

module.exports = {encode, decode};
