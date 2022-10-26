function toPigLatin(e) {
  e.preventDefault();
  //define text
  text = document.getElementById('english-input').value;
  const inputArray = text.split(" ");
  let pigOutArray = [];
  console.log('inputArray', inputArray)
  vowelStart(text);
  
//grab input & declare variables
  // qu permutations
  //quick -> ickquay
  //grab qu store as suffix, assign remaining to prefix
  //concat 'ay'

//if string contains no vowels
// string plus way

//elif string starts with consonants
  // code -> odecay
  // select initial consonant and store as suffix, assign remaining to prefix


//Test: "It will add 'way' to the end of words that begin with a vowel."
function vowelStart(text) {
for (let i = 0; i <= inputArray.length; i++) {
  if (/^[aeiou]/gi.test(inputArray.value));
  pigOutArray.push(inputArray + "way");
  console.log('loop output', pigOutArray);
  }
}

//concat + add 'ay'
  //elif string starts with vowels (DO NOT use 'y' as vowel)
  //add 'way'
}

window.addEventListener("load", function() {
  document.querySelector("form#pig-latin").addEventListener("submit", toPigLatin);
});