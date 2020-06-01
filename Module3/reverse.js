function reverseString(str) {
//split string
var splitString = str.split("");

//reverse string
var reverseStr = splitString.reverse();

// join
var joined = reverseStr.join("");

//return 
return joined;
}

var output = reverseString("No justice no peace");

console.log("original string: no justice no peace");

console.log(`reversed string: ${output}`);

