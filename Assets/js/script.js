// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


const randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
};

// Generator functions
function randomLower() {
  const lowers = 'abcdefghijklmnopqrstuvwxyz'
  return lowers[Math.floor(Math.random() * lowers.length)];
};
function randomUpper() {
  const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return uppers[Math.floor(Math.random() * uppers.length)];
};
function randomNumber() {
  const numbers = '0123456789'
  return numbers[Math.floor(Math.random() * numbers.length)];
};
function randomSymbol() {
  const symbols = '`~!@#$%^&*()-_=+[]{}|\\:;<>,./?'
  return symbols[Math.floor(Math.random() * symbols.length)];
};

var getLength = function (length) {
  var length = "";
  while (length === "" || length === null) {
    length = prompt("How long would you like your password to be? It must be between 8 and 128 characters in length.");
  }
  if (length < 8 || length > 128) {
    window.alert("Your password length must be between 8 and 128 characters. Please try again.");
    return getLength();
  }
  if (isNaN(length)) {
    window.alert("Enter numbers only please.");
    return getLength();
  }
  console.log("Your password will be " + length + " characters in length.");
  return +length;
};


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

  if (confirmLower, confirmUpper, confirmNumber, confirmSymbol === false ) {
    window.alert("You did not choose any characters to include. Please try again.");
    writePassword();
  }
  console.log(generatePassword());
};

  function generatePassword(lower, upper, number, symbol, length) {
    let passwordText = '';
  };
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
