
var generateBtn = document.querySelector("#generate");

function writePassword() {

 
  var charNum = prompt("how many characters do you want your password to be? Eneter a number between 8 and 128");

  var confirmUpper = confirm("would you like your password to include uppercase letters?");
  if (confirmUpper){
    var upperSet = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"]
  }
  
  var confirmLower = confirm("would you like your password to include lowercase letters?");
  if(confirmLower){
    var lowerSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }
  
  var confirmNumber = confirm("would you like your password to include numbers?");
  if(confirmNumber){
    var numberSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }
  
  var confirmSpecial = confirm("would you like your password to include special characters?");
  if(confirmSpecial){
    var specialSet = [" ","!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-",".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~" ];
  }    
  
  var passwordLength = parseInt(charNum);

  var randomSet = [upperSet.toString|| lowerSet.toString, numberSet.toString, specialSet.toString];
  console.log(randomSet)
  
  var randomChar = randomSet[Math.floor(Math.random()* randomSet.length)];
  console.log(randomChar)
  
  charGen()

  for (var i = 0; i < passwordLength; i ++){
    console.log(charGen(i))}

  writePassword();
  console.log(writepassword)

writePassword = document.querySelector("#password");
console.log(characterGen * 1);
console.log(writePassword)
}
 

  
generateBtn.addEventListener("click", writePassword);


// passwordText.value = password;





// var password = generatePassword();
// for (var i = 0; i < length; i++){
//   password += (carSet + charSet2 + charSet3 + charSet4).charAt(Math.floor(Math.random() *charNumber));
// }

// console.log(password)


// // Add event listener to generate button
// ;

// // //GIVEN I need a new, secure password
// // WHEN I click the button to generate a password


// // THEN I am presented with a series of prompts for password criteria
// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password

// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters


// // WHEN prompted for character types to include in the password
// // THEN I choose lowercase, uppercase, numeric, and/or special characters


// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type should be selected
// // WHEN all prompts are answered
// // THEN a password is generated that matches the selected criteria
// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page

// //var num = Math.floor(Math.random() * 10) + 1
// // string leters







// // var retVal = "";
// //   for (var i = 0; i < length; i++) {
// //     //picks a character within charSet at index of random number
// //     retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
// //   }

// // console.log(retVal)
// //gernerate random password

// // Write password to the #password input

  
      //     function userChar(){
//       var userUpper = upperSet[Math.floor(Math.random()* upperSet.length)];
//       var userLower = lowerSet[Math.floor(Math.random()* lowerSet.length)];
//       var userNumber = numberSet[Math.floor(Math.random()* numberSet.length)];
//       var  userSpecial = specialSet[Math.floor(Math.random()* specialSet.length)];
//     return passwordText.value; 
//     }{
//       
//     }
// }
// function characterGen(){