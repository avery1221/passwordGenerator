var pLength = 0
var upperCalc = ["Q","W","E","R","T","Y","U","I","O","P"]
var lowerCalc = Boolean
var numberCalc = Boolean
var specialCalc = Boolean
var returnValue = []
var x = 0
var fullPassword = []
var pLength = prompt('How long is your password?',  '8-128')
var pUpper = confirm('Would you like uppercase letters?')
var pLower = confirm('Would you like lowercase letters?')
var pNumber = confirm('Would you like numbers?')
var pSpecial = confirm('Would you like special characters?')
console.log(pUpper,pLength,pLower,pNumber,pSpecial)
const hasUpper = pUpper
const hasLower = pLower
const hasNumber = pNumber
const hasSpecial = pSpecial
// function generatePassword1() {
//     if (hasUpper) {
//     for (let i = 0; i <= pLength; i++) {
//         var x = Math.random() * 9 
//        console.log(upperCalc[i])
//     } 
//     } else return("")}
//     console.log(generatePassword1,upperCalc[x])
// function generatePassword2(pLower) {
//     if (hasLower) {
//     for (let i = 0; i <= pLength; i++) {
//     }   
//     } else return("")}
// function generatePassword3(pNumber) {
//     if (hasNumber) {
//     for (let i = 0; i <= pLength; i++) {
//     }      
//     } else return('')}
// function generatePassword4(pSpecial) {
//     if (hasSpecial) {
//     for (let i = 0; i <= pLength; i++) {
//     }    
//     } else return("")}
function generatePassword() {
    const randomFuncs = [];
    if (hasUpper == true) {
        randomFuncs.push(getRandomUpper);
    } 
    if (hasLower == true); {
        randomFuncs.push(getRandomLower);
    }
    if  (hasNumber == true); {
        randomFuncs.push(getRandomNumber);
    }
    if  (hasSpecial == true); {
        randomFuncs.push (getRandomSpecial);
    }
    let fullPassword = []
    for (let i = 4; i < pLength; i++) {
        fullPassword += randomFuncs[Math.floor(Math.random()*randomFuncs.length)](); 
    }
}
generatePassword(); console.log(fullPassword)
//Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function(event) {
    var passwordText = document.querySelector("#password");
    passwordText.value = fullPassword;
});
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
      //passwordText.value = returnValue;
//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
}
function copyToClipboard() {
  // BONUS 
}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
// BONUS EVENT LISTENER
// generateBtn.addEventListener('newValue', () => {
//     const length = +pLength.value
// })
console.log(pLength)
// function generatePassword(hasLower, hasNumber, hasSpecial, hasUpper); {
// };
//generator functions - http://www.net-comber.com/charset.html  example of perfect charset too the left
function getRandomLower() {
    fullPassword.push (String.fromCharCode(Math.floor(Math.random() * 26) + 97));;
}
function getRandomUpper() {
    fullPassword.push (String.fromCharCode(Math.floor(Math.random() * 26) + 65));;
}
function getRandomSpecial() {
    const special = '!@#$%^&*(){}[]=<>/,.';
    fullPassword.push(special[Math.floor(Math.random() * special.length)]);;
}
function getRandomNumber() {
    fullPassword.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48));;
}
