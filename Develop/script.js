// IMPORTANT: If user does not enter any parameters, page will reset and go through prompts. However, upon completion
// the password will very quickly flash on screen and disappear. Refreshing the page will correct this. This really
// drives me crazy. Would love to know why this is happening.

// list of variables and values

var pswdElements = 0;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()_+";
var numbers = "1234567890";
var password = "";

// generate random password

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

  // these confirm what the user wants in their password. pswdElements counts how many items were chosen.
  // console logs would normally be removed, for the purpose of verifying proper function I left them in.
  var lowercaseAnswer = confirm("Should the password contain lowercase letters? OK is yes, Cancel is no.");
  if (lowercaseAnswer) {
    pswdElements++
    console.log("Include lowercase");
  }
  else {
    console.log("Do not include lowercase");
  }
  var uppercaseAnswer = confirm("Should the password contain uppercase letters? OK is yes, Cancel is no.");
  if (uppercaseAnswer) {
    pswdElements++
    console.log("Include uppercase");
  }
  else {
    console.log("Do not include uppercase");
  }
  var specialAnswer = confirm("Should the password contain special characters? OK is yes, Cancel is no.");
  if (specialAnswer) {
    pswdElements++
    console.log("Include special");
  }
  else {
    console.log("Do not include special");
  }
  var numbersAnswer = confirm("Should the password contain numbers? OK is yes, Cancel is no.");
  if (numbersAnswer) {
    pswdElements++
    console.log("Include numbers");
  }
  else {
    console.log("Do not include numbers");
  }

  // this takes the length entered by the user and divides it by the number of values the user wants added to their password.
  // I feel like I could do more math to get th
  (length = (length / pswdElements));
  Math.floor(length)

  // these will fire depending on the confirmation statements above. the modified length will make them iterate the
  // amount of values necessary to collectively satisfy the original user length input.
  if (lowercaseAnswer) {
    for (var i = 1; i <= length; i++) {
      // the internet.
      // my understanding is will add variables to password, based off the the equation.
      // this equation contains mathrandom (outputs number between 0 and 1) mathfloor (rounds the number down to a whole)
      // charAt pulls values based off the equation's solution.
      password += lowercase.charAt(Math.floor(Math.random() * Math.floor(lowercase.length - 1)));
    }
  }

  if (uppercaseAnswer) {
    for (var i = 1; i <= length; i++) {
      password += uppercase.charAt(Math.floor(Math.random() * Math.floor(uppercase.length - 1)));
    }
  }

  if (specialAnswer) {
    for (var i = 1; i <= length; i++) {
      password += special.charAt(Math.floor(Math.random() * Math.floor(special.length - 1)));
    }
  }

  if (numbersAnswer) {
    for (var i = 1; i <= length; i++) {
      password += numbers.charAt(Math.floor(Math.random() * Math.floor(numbers.length - 1)));
    }
  }

  // Checks 
  // console.log("Length is", password.length);
  if ((password.length) !== length) {
  // I am certain there is a way to send this back to a loop to pick up the needed characters but haven't found the answer.
  // below is a band-aid that works up to a point, and then, well, doesn't.
     password = (password + "2")
  }
  // if no parameters are assigned by prompts, process will start over 
  if (pswdElements == 0) {
    alert("Of all the idiots in all the idiot villages of all the idiot worlds, you stand alone, my friend. - Michael Scott")
    location.reload(true);
    generate()
  }

  // add password to text box
  document.getElementById("password").value = password;
}

// event listener to generate button
var startButton = document.getElementById("redButton")
startButton.addEventListener("click", function () {
  generate()
})
