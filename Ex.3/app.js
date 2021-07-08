const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const input = 'This text will be translated in the whale talk';

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  const letter = input[i];

  // for (let j = 0; j < VOWELS.length; j++) {
  //   const vowel = VOWELS[j];
  //   if (letter === vowel) {
  //     resultArray.push(vowel);
  //     if (letter === 'e' || letter === 'u') {
  //       resultArray.push(vowel);
  //     }
  //   }
  // }

  for (const vowel of VOWELS) {
    if (letter === vowel) {
      resultArray.push(vowel);
      if (letter === 'e' || letter === 'u') {
        resultArray.push(vowel);
      }
    }
  }
}

console.log(`The phrase “${input}” in 'whale talk': “${resultArray.join('').toUpperCase()}”`);
