function decrypt(word) {
  if (word === '') return ''

  let decryptedString = ''

  // first letter
  let encryptedFirst = word.charCodeAt(0)
  let decryptedFirst = encryptedFirst - 1
  decryptedString += String.fromCharCode(decryptedFirst)

  // other letters
  let encryptedPrevious = encryptedFirst
  for (let i = 1; i < word.length; i++) {
    let encryptedLetter = word.charCodeAt(i)
    let currentVal = encryptedLetter - encryptedPrevious
    // while ascii value isn't with valid range continue to add 26
    while (currentVal < 97) {
      encryptedLetter += 26
      currentVal = encryptedLetter - encryptedPrevious
    }
    encryptedPrevious += currentVal
    decryptedString += String.fromCharCode(currentVal)
  }

  return decryptedString
}
