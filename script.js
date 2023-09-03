// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A","B","C"]
var lowercase = ["a","b","c"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  // var anything1 = confirm("Say yes or no")

  // var anything2 = prompt("say something")

 var pwdlength = prompt("How many characters do you want your password?")
 console.log("PWDLENGTH=> ", pwdlength )

 //if(CONDITION){LOGIC}
 
 if(pwdlength < 8 && pwdlength > 128){
  alert("NOOOOOO!!!!!!!")
  // return "PRESS THE BUTTON AGAIN"
  return generatePassword()
 }


 var charuppercase = confirm("Do you want to use uppercase characters?")
 console.log("charupper=> ", charuppercase )
 var charlowercase =  prompt("Do you want to use lowercase characters?")
 console.log("charlower=> ", charlowercase )

 var passwordToReturn = ''

 //LOGIC THAT BUILDS THE PASSWORD


  return passwordToReturn
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
