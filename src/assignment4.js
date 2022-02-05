//style="color:black"
/*
background-color:black;
font-size:18px;
*/
var myName;
var a;
a=7;
var b;
b=a;
var a=9; //Initializing Variables with the Assignment Operator
var myFirstName="Utkarsh"; //Declare String Variables
var myLastName="patel";
var a=5; //Understanding Uninitialized Variables
var b=10;
var c="I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

var studlyCapVar;  //Understanding Case Sensitivity in Variables
var properCamelCase;
var titleCaseOver;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";  //Explore Differences Between the var and let Keywords
let catSound = "Meow!";

const FCC = "freeCodeCamp"; //Declare a Read-Only Variable with the const Keyword

let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 

const sum = 10 + 10;  //Add Two Numbers with JavaScript

const difference = 45 - 33;//Subtract One Number from Another with JavaScript

const product = 8 * 10; //Multiply Two Numbers with JavaScript

const quotient = 66 / 33;  //Divide One Number by Another with JavaScript

let myVar = 87; //Increment a Number with JavaScript
myVar++;

let myVar = 11;  //Decrement a Number with JavaScript
myVar--;

const myDecimal = 5.7; //Create Decimal Numbers with JavaScript

const product = 5.0 * 1.0; //Multiply Two Decimals with JavaScript

const quotient = 4.4 / 2.0; //Divide One Decimal by Another with JavaScript

const remainder = 8%3;  //Finding a Remainder in JavaScript


let a = 3;  //Compound Assignment With Augmented Addition
let a = 3;  
let b = 17;
let c = 12;
a +=12;
b += 9 ;
c += 7;

let a = 11; //Compound Assignment With Augmented Subtraction
let b = 9;
let c = 3;
a -=  6;
b -= 15;
c -=  1;

let a = 5; //Compound Assignment With Augmented Multiplication
let b = 12;
let c = 4.6;
a *= 5;
b *= 3 ;
c *= 10;

let a = 48;  //Compound Assignment With Augmented Division

let b = 108;
let c = 33;
a /= 12;
b /= 4;
c /= 11;

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; //Escaping Literal Quotes in Strings

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>'; //Quoting Strings with Single Quote

const myStr ="FirstLine\n\t\\SecondLine\nThirdLine"; // Escape Sequences in Strings

const myStr = "This is the start."+" This is the end."; //Concatenating Strings with Plus Operator

let myStr="This is the first sentence.";//Concatenating Strings with the Plus Equals Operator
myStr+=" This is the second sentence.";

const myName = "Utkarsh";  //Constructing Strings with Variables
const myStr = "My name is "+myName+" and I am well!";

const someAdjective = "Hello"; //Appending Variables to Strings
let myStr = "Learning to code is ";
myStr +=someAdjective;

let lastNameLength = 0;//Find the Length of a String
const lastName = "Lovelace";
lastNameLength = lastName.length;

let firstLetterOfLastName = ""; //Use Bracket Notation to Find the First Character in a String
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; 

let myStr = "Jello World"; //Understand String Immutability
myStr = "Hello World.";


const lastName = "Lovelace"; //Use Bracket Notation to Find the Nth Character in a String
const thirdLetterOfLastName = lastName[2]; 


const lastName = "Lovelace"; //Use Bracket Notation to Find the Last Character in a String
const lastLetterOfLastName = lastName[lastName.length-1]; 


const lastName = "Lovelace";  //Use Bracket Notation to Find the Nth-to-Last Character in a String
const secondToLastLetterOfLastName = lastName[lastName.length-2]; 

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly"; //Word Blanks
const wordBlanks = myNoun+"+"+myAdjective+"+"+myVerb+"+"+myAdverb; 


const myArray = ["Utkarsh",24]; //Store Multiple Values in one Variable using JavaScript Arrays


const myArray = [["utkarsh",24]]; //Nest one Array within Another Array

const myArray = [50, 60, 70]; //Access Array Data with Indexes
var myData=myArray[0];


const myArray = [18, 64, 99]; //Modify Array Data With Indexes
myArray[0]=45;

const myArray = [ //Access Multi-Dimensional Arrays With Indexes
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];


  const myArray = [["John", 23], ["cat", 2]]; //Manipulate Arrays With push()
myArray.push(["dog",3]);


const myArray = [["John", 23], ["cat", 2]];  //Manipulate Arrays With pop()
const removedFromMyArray=myArray.pop();


const myArray = [["John", 23], ["dog", 3]];  //Manipulate Arrays With shift()
const removedFromMyArray=myArray.shift();


const myArray = [["John", 23], ["dog", 3]];   //Manipulate Arrays With unshift()
myArray.shift();
myArray.unshift(["Paul",35]);


const myList = [["jeans", 345],["trousers",43],["Tshirt",535],["shirt",434],["lowers",4534]]; //Shopping List


function reusableFunction(){  //Write Reusable JavaScript with Functions
    console.log("Hi World");
  }
  reusableFunction();

  function functionWithArgs(x,y){ //Passing Values to Functions with Arguments
    console.log(x+y);
    }
    functionWithArgs(1,2);
    functionWithArgs(7,9);

    function timesFive(x){ //Return a Value from a Function with Return
        return x*5;
      }
      timesFive(5);
      timesFive(2);
      timesFive(0);


let myGlobal=10;  //Global Scope and Functions
var oopsGlobal;
function fun1() {
 
oopsGlobal=5;
}


function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {  //Local Scope and Functions

    let myVar;
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();


const outerWear = "T-Shirt";  //Global vs. Local Scope in Functions

function myOutfit() {
  
let outerWear="sweater";
 
  return outerWear;
}

myOutfit();
  
  
  console.log('outside myLocalScope', myVar);



let sum = 0;   //Understanding Undefined Value returned from a Function
function addFive(){
  sum+=5;
  return;
}
function addThree() {
  sum = sum + 3;
}
addThree();
addFive();



let processed = 0;  //Assignment with a Returned Value

function processArg(num) {
  return (num + 3) / 5;
}
processed=processArg(7);


function nextInLine(arr, item) {  //Stand in Line

    arr.push(item);
  item=arr.shift();
  
  return item;
  }
const testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));



function welcomeToBooleans() { //Understanding Boolean Values
    return true; 
   }

   function trueOrFalse(wasThatTrue) { //Use Conditional Logic with If Statements
    if(wasThatTrue)
  return "Yes, that was true";
  
  return "No, that was false";
  }
  trueOrFalse(true);
  trueOrFalse(false);


function testEqual(val) { //Comparison with the Equality Operator
    if (val==12) { 
      return "Equal";
    }
    return "Not Equal";

  }
  
  testEqual(10);
  testEqual(12);



function testStrict(val) { //Comparison with the Strict Equality Operator

    if (val===7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  testStrict(7);


function compareEquality(a, b) { //Practice comparing different values
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
  compareEquality("20",20);


function testNotEqual(val) {  //Comparison with the Inequality Operator
    if (val!=99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(99);
  testNotEqual("99");
  testNotEqual(12);
  testNotEqual("12");
  testNotEqual("bob");