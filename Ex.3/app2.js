const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const input = 'This text will be translated in the whale talk';

console.log(
  `The phrase “${input}” in 'whale talk': “${input
    .split('')
    .filter((el) => VOWELS.includes(el.toLowerCase()))
    .map((el) => {
      if (el.toLowerCase() === 'e' || el.toLowerCase() === 'u') return `${el}${el}`;
      return el;
    })
    .join('')
    .toUpperCase()}”`,
);
