// Assignment Code
var generateBtn = document.querySelector("#generate");
var UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LC = "abcdefghijklmnopqrstuvwxyz";
var NV = "0123456789";
var SC = "!@#$%^&*~?_-\\[]{}";
var box = []
var b0x = []
var next = ""

function generatePassword() {

  var starter = window.prompt("How many characters would you like? (At least 8. At most 128.)")
  
  if (starter >= 8 && starter <= 128) {
    psswrd2();
  }
  else {
    alert("Not a valid response. Try again.");
    generatePassword ();
  }

  function psswrd2() {
    
    var uYES = confirm("Would you like uppercase letters?");
    if (uYES) {
      for (var i = 0; i < UC.length; i++) {
        box.push(UC[i]);
      }
    }

    var lYES =  confirm("Would you like lowercase letters?")
    if (lYES) {
      for (var i = 0; i < LC.length; i++) {
        box.push(LC[i]);
      }
    }

    var nYES = confirm("Would you like numbers?")
    if (nYES) {
      for (var i = 0; i < NV.length; i++) {
        box.push(NV[i]);
      }

    var sYES = confirm("Would you like special characters?")
    if (sYES) {
      for (var i = 0; i < SC.length; i++) {
        box.push(SC[i]);
      }
    }
      console.log(box);
    
      for (var i = box.length - 1; i > 0; i--) {
        var x = Math.floor(Math.random() * i)
        var b0x = box[i]
        box[i] = box[x]
        box[x] = b0x;
      }
      console.log(box);

      let bgx = box;

      for (var i = 0; i <= starter + 1; i++) {
        var random = Math.floor(Math.random() * i);
      }
      next += bgx.slice(0 , starter);
    }
  }
  return next;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();