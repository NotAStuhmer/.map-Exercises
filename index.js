// Exercise 1: Basic Callback Function
// Create a function called sayHello that takes a name as a parameter and logs "Hello, [name]!" to the console. Then, create another function called greetUser that takes a callback function and a name as parameters, and uses the callback to greet the user.



function sayHello(name) {
  console.log(`Hello ${name}!`);
}

function greetUser(callback, name) {
  return callback(name);
}

// // Test it
greetUser(sayHello, "Alice"); // Should output: "Hello, Alice!"


// Exercise 2: Array Manipulation with .map()
// Using the .map() method, write a function called squareNumbers that takes an array of numbers as input and returns a new array with each number squared.

function squareNumbers(numbers) {
  return numbers.map(function (num) {
    return num ** 2;
  });
}

// // Test it
console.log(squareNumbers([1, 2, 3, 4])); // Should output: [1, 4, 9, 16]

// Exercise 1: Capitalize Each Word
// Write a function capitalizeWords that takes an array of lowercase words and returns a new array where each word is capitalized.

function capitalizeWords(words) {
  // Your code here
  return words.map(function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  });
}

// // Test it
console.log(capitalizeWords(["hello", "world", "javascript"])); // Should output: ["Hello", "World", "Javascript"]

// Exercise 2: Initials Extractor
// Write a function getInitials that takes an array of full names (e.g., "John Doe") and returns an array with just the initials of each name (e.g., "J.D.").

function getInitials(names) {
    // Your code here
    return names.map (function (name) {
      // Split the full name into parts
      const parts = name.split(" ");
      
      // Map over each part to get the first letter, then join with "."
      return parts.map(function (part){
        return part[0].toUpperCase();
      }).join(".");
    });
  }
  
  // Test it
  console.log(getInitials(["John Doe", "Jane Smith", "Alice Johnson"])); // Should output: ["J.D.", "J.S.", "A.J."]
  

