// Assignment code here
function generatePassword() {
  // Set the password length
  let passwordLength = 8;

  // Set character list to include in password
  let characterList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  // Ask user if they want to include special characters in password
  let includeSpecialCharacters = confirm("Do you want to include special characters in the password?");
  if (includeSpecialCharacters) {
    // Add special characters to character list
    characterList += "!@#$%^&*()_+";
  }
  

  // Generate password
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characterList.charAt(Math.floor(Math.random() * characterList.length));
  }

  // Return generated password
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
