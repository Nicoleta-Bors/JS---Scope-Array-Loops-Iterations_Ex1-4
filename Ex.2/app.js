//prettier-ignore
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);

secretMessage.pop(); //remove the last string of the array

secretMessage.push('to', 'Program'); //add the words to and Program as separate strings to the end of the array

secretMessage[7] = 'right'; //Change the word easily to the word right by accessing the index and replacing it

secretMessage.shift(); //remove the first string of the array.

secretMessage.unshift('Programming'); // add a string to the beginning of the array.

secretMessage.splice(6, 5, 'know,'); //remove 5 strings starting from 6th index and adds the 'know,' string

console.log(secretMessage.join(' '));
