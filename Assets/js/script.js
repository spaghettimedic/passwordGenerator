// Assignment code here

const keys = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "`~!@#$%^&*()-_=+[]{}|\\:;<>,./?"
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var getLength = function () {
  var length = "";
  while (length === "" || length === null) {
    length = prompt("How long would you like your password to be? It must be between 8 and 128 characters in length.");
  };
  if (length < 8 || length > 128) {
    window.alert("Your password length must be between 8 and 128 characters. Please try again.");
    return getLength();
  };
  return length;
};


// Randomized functions
const getKey = [

  function randomLower() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function randomUpper() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function randomNumber() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function randomSymbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  },
  console.log(randomLower(), randomUpper(), randomNumber(), randomSymbol())
];


// Write password to the #password input
function writePassword() {

  getLength();

  var confirmLower = window.confirm("Would you like to include lower case letters?");
  if (confirmLower) {
    randomLower();
    console.log(randomLower());
  };

  var confirmUpper = window.confirm("Would you like to include upper case letters?");
  if (confirmUpper) {
    randomUpper();
    console.log(randomUpper());
  };

  var confirmNumber = window.confirm("Would you like to include numbers?");
  if (confirmNumber) {
    randomNumber();
    console.log(randomNumber());
  };
  
  var confirmSymbol = window.confirm("Would you like to include symbols?");
  if (confirmSymbol) {
    randomSymbol();
    console.log(randomSymbol());
  };
  };

  function generatePassword() {

  };
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
