
var generateBtn = document.querySelector("#generate");
var randomSet = [];
function writePassword() {

 //find out how many charcters the user wants in their password
  var charNum = prompt("how many characters do you want your password to be? Eneter a number between 8 and 128");

  //confirm uppercase, lowercase, number, special characters
  //create arrays for passowrd to build random sequence from
  var confirmUpper = confirm("would you like your password to include uppercase letters?");
  if (confirmUpper){
    var upperSet = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];
    randomSet.push(upperSet)
  }
  
  var confirmLower = confirm("would you like your password to include lowercase letters?");
  if(confirmLower){
    var lowerSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    randomSet.push(lowerSet)
  }
  
  var confirmNumber = confirm("would you like your password to include numbers?");
  if(confirmNumber){
    var numberSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    randomSet.push(numberSet)
  }
  
  var confirmSpecial = confirm("would you like your password to include special characters?");
  if(confirmSpecial){
    var specialSet = [" ","!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-",".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~" ];
    randomSet.push(specialSet)
  } 
  console.log(randomSet);   
  //use password length to determin how many characters in password- must be integer value
  

// compile all the strings into one set 
//covert sets into strings so they can be used to make the password
  
  var passwordLength = parseInt(charNum);
  //use random formula to get a random selection from previous set// 
  
  var charPassword=[];
  //set password length
  for (var i = 0; i < passwordLength; i ++){
    var randomArray = randomSet[Math.floor(Math.random()* randomSet.length)];
    var randomChar = randomArray[Math.floor(Math.random()* randomArray.length)];
    console.log(randomChar);
    
    charPassword.push(randomChar);
    // return writePassword
  }
    var newPassword=charPassword.join('');

  //write the password... i know that something isnt working in the last few steps
  //my syntax or formulas are off but its getting close to due time so i want to have something turnedin


  //this points to the right place but isnt coming up, mostly because the above is buggy
document.querySelector("#password").textContent =newPassword;
// console.log(characterGen * 1);
// console.log(writePassword);
}
 

  
generateBtn.addEventListener("click", writePassword);


