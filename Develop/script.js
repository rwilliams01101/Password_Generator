// generate random password function

var passwordDivisor = 0;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()_+";
var numbers = "1234567890";
var password = "";

function generate() {
  // password values
  // prompt user for requirements
  // length prompted to enter length between 8 and 128 characters
  // if the user does not satisfy the requirements, the page reloads

  var length = prompt("Please enter your password length requirements. Password must be between 8 and 128 characters");
  if (length > 128 || length < 8) {
    alert("Of all the idiots in all the idiot villages of all the idiot worlds, you stand alone, my friend. - Michael Scott")
    location.reload(true);
    generate()
  }
  // lowercase y/n

  var lowercaseAnswer = confirm("Should the password contain lowercase letters? OK is yes, Cancel is no.");
  if (lowercaseAnswer) {
    for (var i = 1; i <= length; i++) {
      password += lowercase.charAt(Math.floor(Math.random() * Math.floor(lowercase.length - 1)));
      console.log("character", password)
    }
    passwordDivisor++
    console.log("Include lowercase");
  }
  else {
    console.log("Do not include lowercase");
    console.log("PDworking", passwordDivisor)
  }
  // uppercase y/n

  var uppercaseAnswer = confirm("Should the password contain uppercase letters? OK is yes, Cancel is no.");
  if (uppercaseAnswer) {
    for (var i = 1; i <= length; i++) {
      password += uppercase.charAt(Math.floor(Math.random() * Math.floor(uppercase.length - 1)));
      console.log("PDworking", passwordDivisor)
      console.log("character", password)
    }
    passwordDivisor++
    console.log("Include uppercase", password);
  }
  else {
    console.log("Do not include uppercase");
  }
  // special y/n

  var specialAnswer = confirm("Should the password contain special characters? OK is yes, Cancel is no.");
  if (specialAnswer) {
    for (var i = 1; i <= length; i++) {
      password += special.charAt(Math.floor(Math.random() * Math.floor(special.length - 1)));
      console.log("character", password)
      console.log("PDworking", passwordDivisor)
    }
    passwordDivisor++
    console.log("Include special characters");
  }
  else {
    console.log("Do not include special characters");
  }
  // numbers y/n

  var numbersAnswer = confirm("Should the password contain numbers? OK is yes, Cancel is no.");
  if (numbersAnswer) {
    for (var i = 1; i <= length; i++) {
      password += numbers.charAt(Math.floor(Math.random() * Math.floor(numbers.length - 1)));
      console.log("character", password)
      console.log("PDworking", passwordDivisor)
    }
    passwordDivisor++
    console.log("Include numbers");

  }
  else {
    console.log("Do not include numbers");
  }

  if (password != length) {
    Array.from('password');
    console.log(Array.from(password));
    console.log(password.split("").join(0));
    console.log("Password_Length", password);
  }

  else {
    alert("Of all the idiots in all the idiot villages of all the idiot worlds, you stand alone, my friend. - Michael Scott")
    location.reload(true);
    generate()
  }

  // add password to text box
  document.getElementById("password").value = password;
}

// // Add event listener to generate button
var startButton = document.getElementById("redButton")
startButton.addEventListener("click", function () {
  generate()
})
