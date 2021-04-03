// Assignment Code
var generateBtn = document.querySelector("#generate");
var pswdLength = prompt("How many characters in your password?")
var upperCase = confirm("Ok confirms uppercase characters")
var lowerCase = confirm("Ok confirms lowercase characters")
var spclChar= confirm("Ok confirms special chacratcers")
var numeric = confirm("Ok confirms numeric chacracters")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 if (upperCase===true) {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
 }
 if (lowerCase===true) {
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
 }
 if (spclChar===true) {
    const symbols = '!@#$%^&*(){}[]=<>/';
    return symbols[Math.floor(Math.random()*symbols.length)];
 }
 if (numeric===true) {
  return  Math.floor(Math.random() * 10);
 }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


