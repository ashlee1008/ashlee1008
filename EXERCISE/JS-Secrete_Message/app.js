let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log('-- Raw Secret Message --')
console.log(secretMessage)


secretMessage.pop()
console.log('-- Question 1 --')
console.log(secretMessage)


console.log('-- Question 2 --')
console.log(secretMessage.length)


console.log('-- Question 3 --')
secretMessage.push('to')
secretMessage.push('Program')
console.log(secretMessage)


console.log('-- Question 4 --')
secretMessage[7] = 'right'
console.log(secretMessage)


console.log('-- Question 5 --')
secretMessage.shift()
console.log(secretMessage)


console.log('-- Question 6 --')
secretMessage.unshift('Programming')
console.log(secretMessage)


console.log('-- Question 7 --')
console.log(secretMessage)
console.log(secretMessage.splice(6, 5, 'know, ', 'know, ', 'know, ', 'know, ', 'know, '))
console.log(secretMessage)

