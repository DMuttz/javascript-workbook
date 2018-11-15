for loop - Use a for loop to console.log each item in the array carsInReverse.
const carsInReverse = ['Impala', 'Ferrari', 'Toyota', 'Honda']
// i is the index that you want to start at (Impala), 
//as long as I <carsinreverse.length is true it will run. 
for (let i = 0; i < carsInReverse.length; i++) {
 console.log(carsInReverse[i])
}

// Use a for...in loop to console.log each key.
  const persons = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female',
}
for (key in persons) {
  console.log(key)
}

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
for (key in persons) {
  if (key === 'birthDate') {
  console.log(persons[key])
  }
}


// while loop... Use a while loop to console.log the numbers 1 to 1000.
let numTest = 0;
while(numTest <= 999) {
   numTest += 1;
  //  numtest = numtest + 1
   console.log(numTest);
}

// Use a do...while loop to console.log the numbers from 1 to 1000.

let i = 0;
do {
   i += 1;
   console.log(i)
  //  result += i + ' ';
} while (i <= 999);

// When is a for loop better than a while loop?
// For loops and while loops run until the condition ealuates as false. A for loop is usually better when you want a piece of code to run a certain number of times, and a while loop is better when the condition for the code to keep running is more general, such as having a boolean flag that is only set to true when a certain condition is met in the code block.

// How is the readability of the code affected?
// The importance is using the right loop for the right instance.

// What is the difference between a for loop and a for...in loop?
// A for loop is for Arrays. A for in loop is more precise, for object, targets a specific part inside an object.

// What is the difference between a while loop and a do...while loop?
// A while statement executes its statements as long as a specified condition evaluates to true. A do while loop always executes the first time and repeats something until the condition is evaluated as false. 