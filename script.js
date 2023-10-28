// function firstAndLastLetter(sentence){
//     const letters = (sentence[0] + sentence.charAt(sentence.length -1)).toUpperCase();
//     const reverseResult = letters.split("").reverse().join("");
//     return reverseResult
// }

// const sentence = prompt("Enter your sentence");
// const result = firstAndLastLetter(sentence);
// // console.log(result)

// function callout(){
//   const fullSentence = sentence.concat(result);
//   // console.log(fullSentence)
// }

// callout()

// function sentenceLength(){
//   const newSentence = (sentence.length / 2).toFixed(0);
//   const anotherSentence = sentence[newSentence];
//   const addLetter = anotherSentence + sentence + result;
//   const final = addLetter.split("").reverse().join("");
//   alert(final)
//   // console.log(final)
// }

// sentenceLength()

const sentence = prompt("Enter your sentence");

function firstAndLastLetter(sentence){
  const firstAndLast = (sentence[0] + sentence.charAt(sentence.length -1)).toUpperCase();
  return firstAndLast
}


const capitalizedLetters = firstAndLastLetter(sentence);

function reverse(letters){
  return letters[1] + letters[0];
}

const reverseLetters = reverse(capitalizedLetters);

function callout(){
  const capitalizedLetters = firstAndLastLetter(sentence);
  const reverseLetters = reverse(capitalizedLetters);
  return reverseLetters
}

function concatenate(){
  const concat = sentence + reverseLetters
  return concat
}

function countNumbers(sen){
  const counting = Math.floor(sentence.length / 2);
  const countingLetter = sentence[counting];
  const final = countingLetter + sentence + reverseLetters;
  const finalReverse = final.split('').reverse().join("")
  alert(finalReverse)
}
countNumbers()



