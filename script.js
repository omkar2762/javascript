// 1)Arithmatic operator 
// a=10
// b=20
// console.log(a+b);
// op=30

// 2) find reminder 
// console.log(17%3);
// op=2

// 3) multiply three number 
// console.log(2*3*4);
// op=24

// 4)subtract 100 from 250 and diuvide 5
// console.log (250-100) / 5);
// op=30

// 5) what will be the output
// let a=5;
// let b=++a;
// consol.log(a,b);
//  op=6


// 6)  use += operator add 10 varable ineteliza as s20
// let x =20;
// x + = 10;
// consol.log (x);
// OP=30

// 7)use *= double the value of varable inetelize as 7
// let y=7;
// y *=2;
// console.log(y);
// op=14


// 8)  what will be the output
// let x=10;
// x -=3;
// console.log9(x);
// op=7

// 9)  check if two number are equal using ==or==
// console.log(10 == '10');
// console.log(10=="10");


//     10) greater number 
// console.log(25>15);

   
// 11) compare two number and print true 
// a=10
// b=20
// console.log(a<b);
// op=true


// 12)what is the output 
// consol.log (5=="5")
//  op=equal



//  2) even or odd number check 
//  num=4
//  consol.log(num%2===0 && "even" || "odd");
//  op= even


// * if else 

    // 1)even or odd checker 
    // num=prompt("enter a number")
    // if (num % 2 == 0){
    //     consol.log("this is even")
    // }
    // else{
    //     consol.log("the number is odd")
    // }



    // 2)positive negative or zero
    // let num=prompt("enter any number:");
    // if (num>0)  {
    //     consol.log("number is positive")
    // }
    // else {
    //     if (num<0){
    //         console.log("number is negative");
    //     }else{
    //         consol.log("number is zero");
    //     }
    // }



    // 4)greater of two number 

    // a=prompt("enter first number:");
    // b=prompt("enter second number:");

    // if (a>b) {
    //     consol.log(a+"is greater");
    // } else{
    //     consol.log(b+"is greater");
    // }




    // 7) age eligibility for voting 

    // let age =prompt("enter your age :");
    // if (age >= 18 ) {
    //     consol.log("you are eligibal to vote ");

    //  } else {
    //     consol.log(you arre not elegibal to vote )
    //  }




                                   TERNERY OPERATOR 


// 1) check number even or odd in ternery OPERATOR
// let num = 4;
// let result =(num% 2==0) "even ": "odd";
// consol.log(result);


// 2) elegible for waight 
// let age =20 ;
// result =(age>=18) ? "eligible for vote" ;: "not eligible to vote"

// 3)print greater num in ternary OPERATOR
// let a=10 ,b=20;
// consol.log(a>b ? a: b ) ;

// 4) check divisible by 5 
// let num = 15 
// consol.log(num % 5===0 ? "divisible by 5 " : "not divisible by 5 ");



                                        //   NESTED IF ELSE 
  
// 1)check num positive ,negative or zero 

//  let num = -3;
// if (num > 0) {
//   console.log("Positive");
// } else {
//   if (num < 0) {
//     console.log("Negative");
//   } else {
//     console.log("Zero");
//   }
// }


// 2) largest of three num 

// let a=5,b=15,c=10 ;
// if (a>b){
//     if (a>c) consol.log(a);
//     else consol.log(c);
// } else {
//   if (b>c) consol.log (b);
//   else consol.log(c);
// }



// 4)check if even if divisible by 4

// num=8;
// if (num %2===0 ){
//   if (num % 4 === 0) consol.log("Even but not divisible by 4");
// }else{
//   consol.log("not even");
// }



// 10 Easy Looping Programming Questions for Logical Practice

// 1) Print numbers from 1 to 10
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }


// 2️) Print even numbers between 1 and 20
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }


// 3️) Sum of first N natural numbers
// let n = parseInt(prompt("Enter a number:"));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log("Sum =", sum);



// 10 Easy String Questions Using String Methods


// 1️) Convert a string to uppercase
// let str = prompt("Enter a string:");
// console.log(str.toUpperCase());

// 2️) Convert a string to lowercase
// let str = prompt("omkar:");
// console.log(str.toLowerCase());
 

// 3) Print the length of a string
// let str = prompt("omkar:");
// console.log("Length of the string:", str.length);


// 8️) Replace all spaces with hyphens using replace()
// let str = prompt("omkar:");
// let result = str.replaceAll("k", "s");
// console.log(result);

                 





//                                       string method 
//  1. Convert input to uppercase
//     let text = prompt("Enter :");
// console.log("Uppercase:", text.toUpperCase());


// 2. Convert input to lowercase
//    let text = prompt("Enter a string:");
// console.log("Lowercase:", text.toLowerCase());


// 3. Print length of the string
// let text = prompt("Enter a string:");
// console.log("Length of the string:", text.length);


// 4. Count how many times 'the' appears
// let sentence = prompt("Enter a sentence:");
// let count = sentence.toLowerCase().split("the").length - 1;
// console.log("Occurrences of 'the':", count);


// 5. Check if string ends with a specific word
// let text = prompt("Enter a string:");
// let word = prompt("Enter the word to check if it ends with:");
// console.log("Ends with word?", text.endsWith(word));


// 6. Check if string starts with a specific word
// let text = prompt("Enter a string:");
// let word = prompt("Enter the word to check if it starts with:");
// console.log("Starts with word?", text.startsWith(word));


// 7. Remove leading and trailing spaces
// let text = prompt("Enter a string with spaces:");
// console.log("Trimmed string:", text.trim());


//  8. Replace spaces with hyphens
//  let text = prompt("Enter a string:");
// console.log("With hyphens:", text.replaceAll(" ", "-"));


//  10. Split a sentence into words
 let sentence = prompt("Enter a sentence:");
 let words = sentence.split(" "); console.log("List of words:", words);

?

