function firstAndLastLetter(sentence){
    const letters = (sentence[0] + sentence.charAt(sentence.length -1)).toUpperCase();
    const reverseResult = letters.split("").reverse().join("");
    return reverseResult
}

const sentence = prompt("Enter your sentence");
const result = firstAndLastLetter(sentence);
// console.log(result)

function callout(){
  const fullSentence = sentence.concat(result);
  // console.log(fullSentence)
}

callout()

function sentenceLength(){
  const newSentence = (sentence.length / 2).toFixed(0);
  const anotherSentence = sentence[newSentence];
  const addLetter = anotherSentence + sentence + result;
  const final = addLetter.split("").reverse().join("");
  alert(final)
  // console.log(final)
}

sentenceLength()

