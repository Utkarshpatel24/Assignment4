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
