export function getRandomArrayItem (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function parseCardNumber (number) {
  const numberStr = String(number)
  return [...new Array(16)]
    .map((_, index) => {
      const numberChar = numberStr.charAt(index)
      if (numberChar !== '') {
        if (index > 3 && index < 12) {
          return '*'
        } else {
          return numberChar
        }
      }
      return '#'
    })
    .join('')
}
