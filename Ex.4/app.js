const ARR1 = [1, -2, 3, -4, 5, 5, -8, -8, -9, 10];
const ARR2 = [1, 3, 5, 99];

//ex.1 Display numbers from 1 to 10
const ex1 = () => {
  for (let i = 1; i <= 10; i++) console.log(i);
};

//ex.2 Print the odd numbers less than 100
const ex2 = () => {
  // for (let i = 1; i < 100; i += 2) console.log(i);

  for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) console.log(i);
  }
};

//ex.3 Print the multiplication table with 7
const ex3 = () => {
  for (let i = 1; i <= 10; i++) console.log(`7 * ${i} = ${7 * i}`);
};

//ex.4 	Print all the multiplication tables with numbers from 1 to 10
const ex4 = () => {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) console.log(`${i} * ${j} = ${i * j}`);
    console.log('\n');
  }
};

//ex.5 Calculate the sum of numbers from 1 to 10
const ex5 = () => {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) console.log(`${i} + ${j} = ${i + j}`);
    console.log('\n');
  }
};

//ex.6 Calculate 10!
const ex6 = () => {
  let produs = 1;
  for (let i = 1; i <= 10; i++) {
    produs *= i;
  }
  console.log(`10! = ${produs}`);
};

//ex.7 Calculate the sum of odd numbers greater than 10 and less than 30
const ex7 = () => {
  let sum = 0;
  // for (let i = 11; i < 30; i += 2) sum += i;

  for (let i = 10; i < 30; i++) if (i % 2 !== 0) sum += i;
  console.log(sum);
};

//ex.8 Calculate the sum of numbers in an array of numbers
const ex8 = (arr) => {
  console.log(arr.reduce((previousValue, currentValue) => previousValue + currentValue));
};

//ex.9 Calculate the average of the numbers in an array of numbers
const ex9 = (arr) => {
  // sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue);
  // console.log(sum / arr.length);

  //shorter version
  console.log(
    arr.reduce((previousValue, currentValue) => previousValue + currentValue) / arr.length,
  );
};

//ex.10 Create a function that receives an array of numbers and returns an array containing only the positive numbers
const ex10 = (arr) => {
  // positiveArr = arr.filter((element) => element > 0);
  // console.log(positiveArr);

  // shorter version
  console.log(arr.filter((element) => element > 0));
};

//ex.11 Find the maximum number in an array of numbers
const ex11 = (arr) => {
  let max = arr.reduce((max, currentValue) => Math.max(max, currentValue));
  console.log(max);
};

//ex.12 Create a function that will return a Boolean specifying if a number is prime
const ex12 = () => {
  const num = parseInt(prompt('Introduceti un numar pozitiv: '));

  if (num < 0) return 'Ati introdus un numar negativ!';

  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0 && num !== i) {
      isPrime = false;
    }
  }
  console.log(num + ' e prim: ' + isPrime);
};

//ex.13 Calculate the sum of digits of a positive integer number
const ex13 = () => {
  const num = prompt('Introduceti un numar pozitiv: ');

  if (parseInt(num) < 0) return 'Ati introdus un numar negativ!';

  //let sum = 0;
  // for (number of num) sum += parseInt(number);
  // console.log(sum);

  result = num
    .split('')
    .map((element) => parseInt(element))
    .reduce((previousValue, currentValue) => previousValue + currentValue);
  return result;
};

//ex.14 Print the first 100 prime numbers
const ex14 = () => {
  for (let i = 2; i < 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0 && j !== i) {
        isPrime = false;
      }
    }
    if (isPrime) console.log(i + ' e prim');
  }
};

//ex.15 Rotate an array to the left 1 position
const ex15 = (arr) => {
  const rotatedArr = arr.slice(1);
  rotatedArr.push(arr[0]);
  console.log(rotatedArr);
};

//ex.16 Reverse an array
const ex16 = (arr) => console.log(arr.reverse());

//ex.17 Create a function that will merge two arrays and return the result as a new array
const ex17 = (arr1, arr2) => console.log(arr1.concat(arr2));

//ex.18 Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
const ex18Support = (arr1, arr2) =>
  arr1.filter((element) => {
    let isntSame = arr2.indexOf(element);
    if (isntSame == -1) return true;
    else return false;
  });

//prettier-ignore
const ex18 = (arr1, arr2) => console.log(`Elements that are in first arr and aren't in second: ${ex18Support(arr1, arr2)}\nElements that are in second arr and aren't in first: ${ex18Support(arr2, arr1)}`);

//ex.19 Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
const ex19 = (arr) => {
  const distinctArr = arr.filter((element, index, arr) => arr.indexOf(element) === index);
  console.log(distinctArr);
}; //remove dublicates

//ex.20 Create a function that will return the number of words in a text
const ex20 = () => {
  const text = 'This is my text';
  console.log(text.split(' ').length);
};

const menu = () => {
  let pickEx;
  do {
    pickEx = parseInt(prompt('Introduceti numarul exercitiului (1-20): '));
    console.clear();
    //prettier-ignore
    switch (pickEx) {
      case 1: ex1(); break;
      case 2: ex2(); break;
      case 3: ex3(); break;
      case 4: ex4(); break;
      case 5: ex5(); break;
      case 6: ex6(); break;
      case 7: ex7(); break;
      case 8: ex8(ARR2); break;
      case 9: ex9(ARR2); break;
      case 10: ex10(ARR1); break;
      case 11: ex11(ARR1); break;
      case 12: ex12(); break;
      case 12: ex12(); break;
      case 13: console.log(ex13()); break;
      case 14: ex14(); break;
      case 15: ex15(ARR1); break;
      case 16: ex16(ARR1); break;
      case 17: ex17(ARR1,ARR2); break;
      case 18: ex18(ARR1, ARR2); break;
      case 19: ex19(ARR1); break;
      case 20: ex20(); break;
      case 0 : console.log('Cu bine!'); break;
      default: console.log('Nu exista asa exercitiu!'); break;
    }
  } while (pickEx);
};

menu();
