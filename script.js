// Assignment Code
var generateBtn = document.querySelector("#generate");

//these functions are being used to pull random integers from my lists
function randomint(min, max) {
  if (!max) {
    max = min
    min = 0
  }

  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}


function getrandomitem(list) {
  return list[randomint(list.length)]
}

function generatePassword() {
  //when the user clicks on the generate password button they will be prompted with the question "how many characters do you want in your password?"
  var Input = prompt("How many characters do you want in your password?")
  //Assigning a variable to the information that the user inputs for how long they want their password to be
  var length = parseInt(Input)
  //if the user inputs anything that is not a number it will prompt them with this message
  if (isNaN(length)) {
    alert("That's not a number.")
    return generatePassword()
  }
  //if the user enters a length less than 8 they will be prompted with an alert
  if (length < 8) {
    alert("Must be between 8 and 128 characters")
    return generatePassword()
  }
  //if the user enters a length greater than 128 they will be prompted with an alert
  if (length > 128) {
    alert("Must be between 8 and 128 characters")
    return generatePassword()
  }
  //making this variable to prompt the user if they want to include numbers in the password by using confirm
  var confirmnumbers = confirm("Did you want to include numbers in your password?")
  //making this variable to prompt the user if they want to include lowercase letters in the password by using confirm
  var confirmlowercase = confirm("Did you want to include lowercase letters in your password?")
  //making this variable to prompt the user if they want to include uppercase letters in the password by using confirm
  var confirmuppercase = confirm("Did you want to include uppercase letters in your password?")
  //making this variable to prompt the user if the want to include symbols in the password by using confirm
  var confirmsymbols = confirm("Did you want to include symbols in your password?")

  //created arrays that hold the value of every number, lowercase letter, uppercase letter, and symbol
  var numberslist = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var lowercaselist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaselist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var symbolslist = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", "'", ",", "<", ".", ">", "/", "?"]

  //this variable is what my lists will go in if the vars above are true and pull from this list to form a password"
  var passwordlist = []

  //this states that if the user selects ok when prompted if they want these in their password then var password list will select from the lists in these arrays
  if (confirmnumbers === true) {
    passwordlist.push(numberslist)
  }
  if (confirmlowercase === true) {
    passwordlist.push(lowercaselist)
  }
  if (confirmuppercase === true) {
    passwordlist.push(uppercaselist)
  }
  if (confirmsymbols === true) {
    passwordlist.push(symbolslist)
  }

  //if the user selects no character type options it will default to all symbols
  if (passwordlist.length === 0) {
    //added an alert letting the user know since they selected no character types then their password will be all symbols
    alert("Your password will be just symbols since you selected no character types")
    passwordlist.push(symbolslist)
  }

  //empty string for password to go into
  var generatedPassword = ""

  //this for loop pulls my random integers and puts them into a random list
  for (var i = 0; i < length; i++) {
    var randomlist = getrandomitem(passwordlist)
    var randomchar = getrandomitem(randomlist)

    //this adds the random character that we have selected and adds it to our generated password string 
    generatedPassword += randomchar
  }
  //after all of the functions above which have compiled a list of items to choose from, pulled random characters from the lists the user selects and then using the for loop arranging those random characters into a random order, this will make the text box display the generated password.
  return generatedPassword
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
