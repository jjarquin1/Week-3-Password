// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
 
  //Variables generate random characters using CharCodes 
  var UpperCase_Char = String.fromCharCode(Math.floor(Math.random()*26)+65)
  var LowerCase_Char = String.fromCharCode(Math.floor(Math.random()*26)+97)
  var Number_Char = String.fromCharCode(Math.floor(Math.random()*10)+48)
  var Symbol_Char = String.fromCharCode(Math.floor(Math.random()*14)+33)
 
  //Prompt windows and confirm windows define the criteria 
  var pswdLength = Number(prompt("How many characters in your password?"));
  //Checks to see if user input meets criteria before moving on
  if (pswdLength<8||pswdLength>128){
    return("Not a Valid Input");
  } else {
    console.log(pswdLength);
  }
   var upperCase = confirm("Ok confirms uppercase characters");

   var lowerCase = confirm("Ok confirms lowercase characters");
  
   var spclChar= confirm("Ok confirms special chacratcers");
  
   var numeric = confirm("Ok connfirms numbers");
   
   var passWrd="";
   
   function generate (){
  
   var Type= UpperCase_Char+LowerCase_Char+Number_Char+Symbol_Char;

   if (upperCase===true) {
    passWrd += UpperCase_Char;
    console.log (UpperCase_Char);
  }

  if (lowerCase===true) {
    passWrd += LowerCase_Char;
    console.log (LowerCase_Char);
  }

  if (spclChar===true){
    passWrd += Symbol_Char;
    console.log(Symbol_Char);
  }

  if (numeric===true) {
    passWrd += Number_Char;
    console.log (Number_Char);
    }
   
   for(i=passWrd.length; i < pswdLength; i++) {
       passWrd += Type;
   }
  
  }
 
generate();

return passWrd; 

};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


