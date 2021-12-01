const lowers = 'abcdefghijklmnopqrstuvwxyz'
const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '`~!@#$%^&*()-_=+[]{}|\\:;<>,./?'

function generatePassword() {
  let passwordLength = prompt("How long would you like your password to be? It must be between 8 and 128 characters in length.");
  passwordLength = Number(passwordLength);
  // check if number is between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password length must be between 8 and 128 characters. Please try again.");
    return generatePassword();    
  }
  // check if number was entered for password length
  if (isNaN(passwordLength)) {
    alert("Only numbers can be entered for password length. Please try again.");
    return generatePassword();
  }

  const includeLowerCase = confirm("Would you like to include lower case letters?");
  const includeUpperCase = confirm("Would you like to include upper case letters?");
  const includeNumbers = confirm("Would you like to include numbers?");
  const includeSymbols = confirm("Would you like to include symbols?");
  // check if no characters selected
  if (includeLowerCase === false && includeUpperCase === false && includeNumbers === false && includeSymbols === false) {
    alert("You did not choose any characters to include. Please try again.");
    return generatePassword();
  };

  let possibleCharacters = "";
  if (includeLowerCase) {possibleCharacters += lowers}
  if (includeUpperCase) {possibleCharacters += uppers}
  if (includeNumbers) {possibleCharacters += numbers}
  if (includeSymbols) {possibleCharacters += symbols}

  let password = ""
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * (possibleCharacters.length - 1))
    password += possibleCharacters[randomIndex]
  }
  return password
}

function writePassword() {
  const password = generatePassword();
  document.querySelector("#password").textContent = password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
