import {test,expect} from '@playwright/test'


test('String methods', async({page})=>{

 const sentence = "Hello world from JavaScript";

 //Count Characters in a String
 const charCount = sentence.length;
 console.log(charCount)

 //Trim a String
const str = '   Hello World!   ';
const trimmedStr = str.trim();
console.log(trimmedStr); // Output: 'Hello World!'

// Separate the words in the Styring
const str2 = "apple,banana,orange";
const arr = str2.split(",");
console.log(arr); // Output: ["apple", "banana", "orange"]

const sentence2= "Hello world from JavaScript";
const words = sentence2.split(" ");
console.log(words); // Output: ["Hello", "world", "from", "JavaScript"]

//Count Words in a String
console.log(words.length)
const wordCount = str.trim().split(/\s+/).length; 
console.log(wordCount)

const strCommon = "Wireless Earbuds";
//Convert String to Lowercase
const lower = strCommon.toLowerCase(); // "wireless earbuds"

//Convert String to Uppercase
const upper = strCommon.toUpperCase(); // "WIRELESS EARBUDS"

//Check if String Includes a Word
const hasWord = strCommon.includes("Earbuds"); // true

// Replace a Word in a String
const replaced = strCommontr.replace("Earbuds", "Headphones"); // "Wireless Headphones"

//Split String into Array of Words
const wordsArr = strCommon.trim().split(/\s+/); // ["Wireless", "Earbuds"]

//Get Substring
const sub = strCommon.substring(0, 8); // "Wireless"

// Find Index of a Word
const idx = strCommon.indexOf("Earbuds"); // 9









})