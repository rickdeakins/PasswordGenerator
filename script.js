// Assignment Code
var generateBtn = document.querySelector("#generate");
var charuppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var charlowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numberchars = ["0","1","2","3","4","5","6","7","8","9"]
var specialchar = ["!","@","#","$","%","^","&","*","(",")","_","+"]
var pwordLength;
var upperCase;
var lowerCase;
var numbers;
var specials;
var randIndex;

// Write password to the #password input
function writePassword() {
  passwordChoices();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword(){
  console.log("generatePassword")

var upperCase = confirm("Do you want to use uppercase characters?")
console.log("upperCase=> ", upperCase )
if(upperCase){
randIndex = Math.floor(Math.random() * charuppercase.length);
var tempPassword = tempPassword + charuppercase[randIndex];
console.log("tempPassword=> ",tempPassword);
}
//repeat generatepassword for all vars
var lowerCase =  confirm("Do you want to use lowercase characters?")
console.log("lowerCase=> ", lowerCase )
if(lowerCase){
randIndex = Math.floor(Math.random() * charlowercase.length);
var tempPassword = tempPassword + charlowercase[randIndex];
console.log("tempPassword=> ",tempPassword);
}

var numbers =  confirm("Do you want to use number characters?")
console.log("numbers=> ", numbers )
if(numbers){
randIndex = Math.floor(Math.random() * numberchars.length);
var tempPassword = tempPassword + numberchars[randIndex];
console.log("tempPassword=> ",tempPassword);
}

var specials =  confirm("Do you want to use special characters?")
console.log("specials=> ", specials )
if(numbers){
  randIndex = Math.floor(Math.random() * specialchar.length);
  var tempPassword = tempPassword + specialchar[randIndex];
  console.log("tempPassword=> ",tempPassword);
}
  
function passwordChoices(){
 var pwdlength = prompt("How many characters do you want your password?")
 console.log("PWDLENGTH=> ", pwdlength )

if(pwdlength < 8 || pwdlength > 128){
  console.log("bad password link"); 
  alert("Please choose a number between 8 and 128.")
  writePassword(); 
} }
return
}


var passwordToReturn = ''
 //LOGIC THAT BUILDS THE PASSWORD



//return passwordToReturn


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)