let input = 'Hi, Human';
let vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];


for (let i = 0; i < input.length; i++){
  
    
    for (let j = 0; j < vowels.length; j++){
     
        if (input[i] == vowels[j]){
            resultArray.push(input[i])
            if (vowels[j] == 'u'){
                resultArray.push(vowels[j])
            } else if (vowels[j] == 'e'){
                resultArray.push(vowels[j])
            }
        }
    }
}
console.log(resultArray.join('').toUpperCase())


