// 1. Write a JavaScript program to display the current day and time.
const todaysDate = () => { 
  const dateAndTime = new Date(); 
  // console.log(dateAndTime); 
  return dateAndTime;
}
console.log(todaysDate()); //run todaysDate

// 2. Write a JavaScript program to convert a number to a string.
const numToString = (num1) => {
  const toString = num1.toString(); 
  return toString; 
}
console.log(typeof numToString(200));

// 3. Write a JavaScript program to convert a string to the number.
const stringToNum = (str1) => {
  const toNum = Number(str1);
  console.log(toNum)
}
stringToNum('25')

// 4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String
const pickDataType = (dataType) => {
  console.log (typeof dataType)
}
pickDataType(true)

// 5. Write a JavaScript program that adds 2 numbers together.
const sumNums = (num1, num2) => {
  console.log(num1+num2)
}
sumNums(2,8)

// 6. Write a JavaScript program that runs only when 2 things are true.
const isTrue = (num1, num2) => {
  if (num1 > 400 && num2 > 400) {
  console.log('it is true!');
} else {
  console.log('is not true!');
}
  }
isTrue(550, 200)

// 7. Write a JavaScript program that runs when 1 of 2 things are true.
const maybeTrueTest = (num1, num2) => {
  if (num1 === 100 || num2 === 50) {
    console.log('yea it is true');
  } else {
    console.log('not true')
  }
console.log(maybeTrueTest(50,30))
}

// 8. Write a JavaScript program that runs when both things are not true.
const isNotTrue = (num1, num2) => {
   if (!(num1 > 400) && !(num2 > 400)) {
     return 'good work both not true';
} else {
    return 'bad work one or both are true'
}
}
console.log(isNotTrue(200,200))
