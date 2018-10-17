// 1. Write a JavaScript program to display the current day and time.
const todaysDate = new Date();
console.log(todaysDate);


// 2. Write a JavaScript program to convert a number to a string.
const numberConvert = 500;
numberConvert.toString();


// 3. Write a JavaScript program to convert a string to the number.
Number('50');


// 4. Write a JavaScript program that takes in different datatypes and prints out whether they are a...
console.log (typeof true);
console.log (typeof p);
console.log (typeof vsvs);
console.log (typeof 200);
console.log (typeof IEEE754);
console.log (typeof 'words');


// 5. Write a JavaScript program that adds 2 numbers together.
const add =(num1, num2)=> {
  return num1 + num2
}
add(6,8)


// 6. Write a JavaScript program that runs only when 2 things are true.
const a = 15;
if (a>10 && a<16) {
  console.log('Thats a good number.')
} else {
  console.log('Thats a bad number.')
}


// 7. Write a JavaScript program that runs when 1 of 2 things are true.
const varB = 'words on words on words';
if (typeof varB === 'string') {
  console.log('This is a string!');
} else {
  console.log('This is not a string.')
}


// 8. Write a JavaScript program that runs when both things are not true.
const varC = 1000000;
if (varC > 2000000 && varC < 100) {
  console.log('This is a small number!');
} else {
  console.log('This is a big number!')
}