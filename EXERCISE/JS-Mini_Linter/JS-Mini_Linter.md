# Mini Linter

In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.

This is the same type of work that word processing software does. Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application. In this project, you will create a miniature version of a linter using array methods that you have learned.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

Giving Code

```javascript
let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];
```

## Task

1. In the code editor, there is a string called story. We want to gather some information about the individual words and sentences in the string. Let’s **split the string** into individual words and **save them in a new array called storyWords**.

   ```javascript
   
   const storyWords = story.split(" ");
   console.log(storyWords);
  
   ```

2. **Log how many words** there are in this story to the **console**.

   ```javascript
   console.log(storyWords.length); 
   ```

3. There is **an array of words that are unnecessary**. Iterate over your array to **filter out these words**. Save the remaining words in an **array called betterWords**. There are several ways that you could achieve this.

   ```javascript
   
   const filterUnnecessaryWords = (word) => {
     
     if (unnecessaryWords.includes(word)) {
       
       return false;
     } else {
       
       return true;
     }
   };

   let betterWords = storyWords.filter(filterUnnecessaryWords);

   console.log(betterWords);
   ```

4. There is an **array of words called overusedWords**. These are words overused in this story. You want to let the user of your program know **how many times they have used** these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.

   ```javascript
  
   function checkWordNum(inputWord) {
     
     function countWord(wordNum, word) {
       
       if (inputWord === word) {
         
         return ++wordNum;
       } else {
        
         return wordNum;
       }
     }

    
     return storyWords.reduce(countWord, 0);
   }

   
   for (let overusedWord of overusedWords) {
     console.log(`${overusedWord} : ${checkWordNum(overusedWord)}`);
    
   }
   ```

5. Now, count **how many sentences** are in the paragraph.

   This may seem tricky, but remember that all of the sentences in this paragraph **end with a period (.) or an exclamation mark (!)**. You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.

   ```javascript
   const numOfSentences = betterWords.reduce((numOfSentences, word) => {
     let lastWord = word[word.length - 1];
     if (lastWord === "." || lastWord == "!") {
       return ++numOfSentences;
     } else return numOfSentences;
   }, 0);

   console.log(numOfSentences); 
   ```

6. Log these items to the console:

- The word count
- The sentence count
- The number of times each overused word appears

  You could choose to simply log them one by one or, for a challenge, create a function that logs all of them with some formatting.

  ```javascript
  console.log(`The word count: ${storyWords.length}`);

  console.log("The number of times each overused word appears:");
  for (let overusedWord of overusedWords) {
    console.log(`  ${overusedWord} : ${checkWordNum(overusedWord)}`);
  }

  console.log(`The sentence count: ${numOfSentences}`);
  
  ```

7.  Now, log the betterWords array to the console as a single string.

    ```javascript
    console.log(betterWords);
    
    ```

8.  Congratulations! You’ve improved the original paragraph and given the user some important information about his or her work. Think about ways in which you can extend this project, potentially by using other JavaScript knowledge you have.

    Here are some ideas:

    - For the overused words, remove it every other time it appears.

    - Replaced overused words with something else.

    ```javascript
    
    function removeAndReplaceOverUsedWord(words, overusedWords, replaceWord) {
      
      let result = [];

      for (const word of words) {
        
        let isOveruseWord = overusedWords.includes(word);

   
        if (isOveruseWord && replaceWord) {
          result.push(replaceWord);
        }

       
        if (!isOveruseWord) {
          result.push(word);
        }
      }
      return result;
    }

    let bestWord = removeOverUsedWord(betterWords, overusedWords, "very");

    console.log(betterWords.length);
    console.log(bestWord);
    console.log(betterWords.length - bestWord.length);
    ```

    - Write a function that finds the word that appears the greatest number of times.

    ```javascript
    
    function checkWordNum(inputWord) {
      function countWord(wordNum, word) {
        if (inputWord === word) {
          return ++wordNum;
        } else {
          return wordNum;
        }
      }

      return storyWords.reduce(countWord, 0);
    }
    
    let maxNumOfWord = 0;
    let greatestOfWord = "";

    
    for (let word of storyWords) {
      let wordNum = checkWordNum(word);
      
      if (wordNum > maxNumOfWord) {
        maxNumOfWord = wordNum;
        greatestOfWord = word;
      }
    }

    
    console.log(greatestOfWord);
    console.log(maxNumOfWord);
    ```
