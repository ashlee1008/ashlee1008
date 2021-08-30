const secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage)
console.log(secretMessage.length)


secretMessage.pop();
console.log(secretMessage)


console.log(secretMessage.length)


secretMessage.push("to", "Program")
console.log(secretMessage)


secretMessage[secretMessage.findIndex(element => element == 'easily')] = 'right';
console.log(secretMessage)


secretMessage.shift()
console.log(secretMessage)


secretMessage.unshift('Programming')
console.log(secretMessage)


const stringSet = new Set(['get', 'right', 'the', 'first', 'time,'])
let revisedMessage = secretMessage.map(item => {
    if (stringSet.has(item)) {
        return 'know, '
    } else {
        return item
    }
})
console.log(revisedMessage)


printMessage = revisedMessage.join(' ')
console.log(printMessage)