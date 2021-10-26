// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


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


// Write password to the #password input
function writePassword() {
  var randFuncs = [];
  var length = getLength();
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var confirmLower = window.confirm("Would you like to include lower case letters?");
  if (confirmLower) {
    randFuncs.push(randomLower);
  };

  var confirmUpper = window.confirm("Would you like to include upper case letters?");
  if (confirmUpper) {
    randFuncs.push(randomUpper);
  };

  var confirmNumber = window.confirm("Would you like to include numbers?");
  if (confirmNumber) {
    randFuncs.push(randomNumber);
  };
  
  var confirmSymbol = window.confirm("Would you like to include symbols?");
  if (confirmSymbol) {
    randFuncs.push(randomSymbol);
  };

  if (confirmLower, confirmUpper, confirmNumber, confirmSymbol === false ) {
    window.alert("You did not choose any characters to include. Please try again.");
    writePassword();
  }
  console.log(randFuncs);
  return randFuncs;

  function getLength() {
    var passLength = "";
    while (passLength === "" || passLength === null) {
      passLength = prompt("How long would you like your password to be? It must be between 8 and 128 characters in length.");
    }
    if (passLength < 8 || passLength > 128) {
      window.alert("Your password length must be between 8 and 128 characters. Please try again.");
      return getLength();
    }
    if (isNaN(passLength)) {
      window.alert("Enter numbers only please.");
      return getLength();
    }
    console.log("Your password will be " + passLength + " characters in length.");
    return +passLength;
  };
  
  function generatePassword(length, randFuncs) {
    let passwordValue = '';
    for (let i = 0; i < length; i++) {
      randFuncs = randFuncs[Math.floor(Math.random() * randFuncs.length)]();

      // passwordValue = ;
    }
    console.log(randFuncs);
    console.log(passwordValue);
    return passwordValue;
  };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
