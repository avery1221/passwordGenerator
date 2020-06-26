//Element
var passwordButton = document.querySelector("#password-button");
var copyClipboardButton = document.querySelector("#copy-clipboard-button");
var resultEL = document.getElementById('result');
var resultDi = document.getElementById('result-display')
var fullPassword = "";

passwordButton.addEventListener("click", () => {
  generatePassword ()
});
copyClipboardButton.addEventListener("click", () => {
  resultEL.select();
  document.execCommand("copy");
})
//generate prompts
function generatePassword() {
    var specialCharacter = confirm("Would you want special characters?");
      console.log(specialCharacter)  
    var numericCharacter = confirm("Would you want numeric characters?");
      console.log(numericCharacter)
    var uppercaseCharacter = confirm("Would you want uppercase characters?");
      console.log(uppercaseCharacter)    
    var lowercaseCharacter = confirm("Would you want lowercase characters?");
      console.log(lowercaseCharacter)
    
    var specialPassword = [];
    var numberPassword = [];
    var upperPassword = [];
    var lowerPassword = [];
    
    if(specialCharacter === true){
      var specCharacter = prompt("How many special characters would you like?")
      for(i=0;i<specCharacter;i++){
      specialPassword.push(randomSpecialCharacter());
      console.log(specCharacter)
    }}
    if(numericCharacter === true){
      var numCharacter = prompt("How many numeric characters would you like?")
      for(i=0;i<numCharacter;i++){
      numberPassword.push(randomNumberCharacter());
      console.log(numCharacter)
    }}
    if(uppercaseCharacter === true){
      var uppCharacter = prompt("How many Uppercase characters would you like?")
      for(i=0;i<uppCharacter;i++){
      upperPassword.push(randomUpperCharacter());
      console.log(uppCharacter)
    }}
    if(lowercaseCharacter === true){
      var lowCharacter = prompt("How many Lowercase characters would you like?")
      for(i=0;i<lowCharacter;i++){
      lowerPassword.push(randomLowerCharacter());
      console.log(lowCharacter)
    }}

    function randomSpecialCharacter() {
      var randomSymbols = '!@#$%^&*()_+<>'.split("");
      return randomSymbols = randomSymbols[Math.floor(Math.random()*randomSymbols.length)];
    }
    function randomNumberCharacter() {
      var randomNumber = '1234567890'.split("");
      return randomNumSymbols = randomNumber[Math.floor(Math.random()*randomNumber.length)];
    }
    function randomUpperCharacter() {
      var randomUpper = 'ABCDEFGHIJKLMNOPQRSTUVWZYZ'.split("");
      return randomUpper = randomUpper[Math.floor(Math.random()*randomUpper.length)];
    }
    function randomLowerCharacter() {
      var randomLower = 'abcdefghijklmnopqrstuvwxyz'.split("");
      return  randomLower = randomLower[Math.floor(Math.random()*randomLower.length)];
    }
    const fullPassword = upperPassword.concat(specialPassword, numberPassword, lowerPassword);
      resultEL.value = shuffle(fullPassword).join('');
      resultDi.innerText = resultEL.value;
      console.log(fullPassword.join(''));
    }

    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }