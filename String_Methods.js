let text = "My Self Surbhi Sakhiya"
console.log("Original String  : " , text)

// length
console.log("Length : " , text.length)

// trim
let trim_text = text.trim()
console.log("After trim : " , trim_text)

// toUpperCase
console.log("Uppercase : " , trim_text.toUpperCase())

// toLowerCase
console.log("Lowercase : " , trim_text.toLowerCase())

// charAt
console.log("Character at index 4:", trim_text.charAt(4));

// indexOf
console.log("Index of 'Surbhi':", trim_text.indexOf("Surbhi"));

// slice
console.log("Slice :", trim_text.slice(0, 15));

// replace
console.log("Replace :", trim_text.replace("Surbhi", "Siya"));

// includes
console.log("Includes :" , trim_text.includes("Siya"));

// split
let words = trim_text.split(" ");
console.log("Split into words:", words);

// concat
let newText = trim_text.concat(" for Beginners");
console.log("Concat:", newText);