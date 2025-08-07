//                          JavaScript Practice Questions

// 1. Conditional Statement Questions 


// 1. Check if a number is positive or negative.
     

//   if (num > 0) {
// console.log ("positive");
//   }
//   else if (num<0) {
//     console.log("negative");
//   }
//   else {
//     console.log ("zero");
//   }


// 2. Check if a number is even or odd
  //  if (%2===0);{
  //  console.log("even");
  //  } else{
  //   console.log("odd");
  //  }

// 3. Check if a person is eligible to vote (age >= 18)

// if age ( age >=18) {
// console.log("eligible to vote");
// }else{
//   console.log("not elegible to vote ");
// }


// 4 Find the greatest of two numbers.
// let a=30 , b = 10;
// if (a>b) {
//   console.log(a+"is greater");
// } else{
//   consol.log(b+"is smaller")
// }

// 5. Find the greatest of three numbers
// let a = 10, b = 20, c = 15;
// if (a > b && a > c) {
//   console.log(a + " is greatest");
// } else if (b > c) {
//   console.log(b + " is greatest");
// } else {
//   console.log(c + " is greatest");
// }

// 6. Check if a year is a leap year or not
// let year = 2024;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Leap year");
// } else {
//   console.log("Not a leap year");
// }

// 7. Check whether a character is a vowel or consonant
// let char = 'e';
// if ("aeiouAEIOU".includes(char)) {
//   console.log("Vowel");
// } else {
//   console.log("Consonant");
// }

// 8. Assign grades based on marks (A, B, C, F)


















// 9. Check if a number is divisible by 5 and 11 

// if (%5===O && % 11 === 0){
//   console.log(divisible by 5 and 11);
// }else{
//   console.log(not divisible by 5 and 11);
// }


// 10. Use ternary operator to check if a number is even or odd
// let result = (num % 2 === 0) ? "Even" : "Odd";
// console.log(result);

                    
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
                  


//                              2. Loop Questions (for / while)




// 1. Print numbers from 1 to 10
// for ( let i=1 ; i<=10; i++){
//   console.lopg("print");
// }


// 2. Print the sum of numbers from 1 to 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log("Sum:", sum);
 

// 4. Print the multiplication table of a number (e.g., 7)







// 5. Print reverse numbers from 10 to 1
// for(i=1 ; i>1; : i--){
// console.log(i);
// }


// 6. Find the factorial of a number




// 7. Reverse a given number.




// 8. Check if a number is a palindrome.




// 9. Find the sum of digits of a number.





// 10. Print Fibonacci series up to N terms.




// ---------------------------------------------------------------------------------------------------------------------------------------------------------------



                                //  10 Easy String Questions Using String Methods


// 1. Take a string input and convert it to uppercase using a string method.

// let string prompt("omkar");
// console.log( "uppercase:", string.uppercase());


// 2. Take a string input and convert it to lowercase

// let string prompt("omkar");
// console.log( "lowercase:", string.lowerrcase());


// 3. Ask the user for a string and print its length
// let str = prompt("omkarshinde:");
// console.log("Length:", str.length);


// 4. Count how many times the word 'the' appears







// 5 Check if it ends with a particular word
// let str = prompt(" ragivgandhi:");
// let word = prompt("i:");
// console.log("Ends with word:", str.endsWith(i));


// 6. Check whether it starts with a specific word
// let str = prompt(" ragivgandhi:");
// let word = prompt("r:");
// console.log("Ends with word:", str.endsWith(r));

// 7. Remove leading and trailing spaces using trim()
// let str = prompt("Enter a string with spaces:");
// let trimmed = str.trim();
// console.log("Trimmed string:", trimmed);

// 8. Replace all spaces with hyphens -
// let str = prompt("Enter a sentence:");
// let replaced = str.replace(/ /g, "-");
// console.log("With hyphens:", replaced);


// 9. Print each character of name on a new line
// let name = prompt("omkar:");
// for (let i = 0; i < 5; i++) {
//   console.log(name[omkar]);
// }


// 10. Split a string into a list of words
// let str = prompt("Enter a sentence:");
// let words = str.split(" ");
// console.log("List of words:", words);



// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


                                                      //  JavaScript Array Programming Questions


//   1. Create an array and print all elements


// let array =[1,2,3,4,5,];
// console.log( array);


// 2. Find the length of an array

// let array =[1,2,3,4,5,];
// console.log("Length of array:", arr.length);


// 4. Add a new element to the end of the array

// ArrayBuffer.pop (  enter arrey adding );
// console.log(array);


// 5. Remove the last element from the array

// arr.pop();
// console.log("After removing last element:", arr);


// 6. Find the sum of all elements in a numeric array
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log("Sum of elements:", sum);


// 7  Check if an element exists in an array



// 8. Count how many even numbers are in the array
// let evenCount = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenCount++;
//   }
// }
// console.log("Number of even elements:", evenCount);


// 9. Print array elements in reverse order
// let reversed = reverse(); 
// console.log("Reversed array:", reversed);


// 10. Find the largest number in an array
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log("Largest number:", max);

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                            

//                                                             JavaScript Function Programming Questions – Solutions

// 1. Function to print 'Hello, World!'
// javascript
// Copy code
// function sayHello() {
//   console.log("Hello, World!");
// }
// sayHello();



// 2. Function that takes two numbers and returns their sum
// javascript
// Copy code
// function add(a, b) {
//   return a + b;
// }
// console.log("Sum:", add(5, 3));



// 3. Function that checks if a number is even or odd
// javascript
// Copy code
// function checkEvenOdd(num) {
//   return (num % 2 === 0) ? "Even" : "Odd";
// }
// console.log(checkEvenOdd(4));



// 4. Function that returns the square of a number
// javascript
// Copy code
// function square(num) {
//   return num * num;
// }
// console.log("Square:", square(6));



// 5. Function that takes a name as input and prints a greeting
// javascript
// Copy code
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }
// greet("Omkar");



// 6. Function that returns the largest of three numbers
// javascript
// Copy code
// function largest(a, b, c) {
//   return Math.max(a, b, c);
// }
// console.log("Largest:", largest(10, 25, 17));



// 7. Function to calculate the factorial of a number






// 8. Function that reverses a given string


// 9. Function to check if a number is prime
// javascript
// Copy code
// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// console.log("Is Prime?", isPrime(7));



// 10. Function that counts the number of vowels in a string
