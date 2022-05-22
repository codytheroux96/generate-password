// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //when the user clicks on the generate password button they will be prompted with the question "how many characters do you want in your password?"
 var Input= prompt("How many characters do you want in your password?")
 //Assigning a variable to the information that the user inputs for how long they want their password to be
var length = parseInt(Input)
//if the user inputs anything that is not a number it will prompt them with this message
if (isNaN(length)){
  alert("That's not a number.")
  return
}
//if the user enters a length less than 8 they will be prompted with an alert
if (length < 8){
  alert("Must be between 8 and 128 characters")
  return
}
//if the user enters a length greater than 128 they will be prompted with an alert
if (length > 128){
  alert("Must be between 8 and 128 characters")
  return
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
