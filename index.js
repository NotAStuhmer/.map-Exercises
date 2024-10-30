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

// Exercise 3: Capitalize Each Word
// Write a function capitalizeWords that takes an array of lowercase words and returns a new array where each word is capitalized.

function capitalizeWords(words) {
  // Your code here
  return words.map(function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  });
}

// // Test it
console.log(capitalizeWords(["hello", "world", "javascript"])); // Should output: ["Hello", "World", "Javascript"]

// Exercise 4: Initials Extractor
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
  

// Exercise 5: Reverse Each Word
// Write a function reverseWords that takes an array of words and returns a new array with each word reversed.
  
//   function reverseWords(words) {
//     // Your code here
//     return words.map (function (string) {
//         const arrayOfChars = string.split(""); // Splits the words into characters
//         const reversedArray = arrayOfChars.reverse(); // Reverse the array of characters
//         return reversedArray.join(""); // Join the characters back into a string
//         });
//   }

  function reverseWords(words) {
    return words.map(function (string) {
        return string.split("").reverse().join("");
    });
  }
  
// Test it
console.log(reverseWords(["apple", "banana", "cherry"])); // Should output: ["elppa", "ananab", "yrrehc"]
//   Hint: You can split each word into an array of characters, reverse the array, and join it back into a string.

// Exercise 6: Add Exclamation Marks
// Write a function addExclamation that takes an array of sentences and returns a new array with 
// an exclamation mark added to the end of each sentence.

function addExclamation(sentences) {
    // Your code here
    return sentences.map(function (strings) {
        console.log(strings);
        return strings + "!";
    });
  }
  
  // Test it
  console.log(addExclamation(["I love JavaScript", "Higher-order functions are great", "Coding is fun"]));
  // Should output: ["I love JavaScript!", "Higher-order functions are great!", "Coding is fun!"]
  // Hint: You just need to add "!" to the end of each sentence.
  