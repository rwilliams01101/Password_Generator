// generate random password function

function generate(){

  // prompt user for requirements
  // length prompted to enter length between 8 and 128 characters
    // if the user does not satisfy the requirements, the page reloads
  
  var length = prompt("Please enter your password length requirements. Password must be between 8 and 128 characters");
    if(length>128){
      alert("Of all the idiots in all the idiot villages of all the idiot worlds, you stand alone, my friend. - Michael Scott")
      location.reload(true);
      error()
}
    if(length<8){
      alert("Of all the idiots in all the idiot villages of all the idiot worlds, you stand alone, my friend. - Michael Scott")
      location.reload(true);
      error()
}
  // lowercase y/n

  var lowercase = confirm("Should the password contain lowercase letters? OK is yes, Cancel is no.");
    if(lowercase){
      console.log("Include lowercase");
}
    else {
      console.log("Do not include lowercase");
}
  // uppercase y/n

  var uppercase = confirm("Should the password contain uppercase letters? OK is yes, Cancel is no.");
    if(uppercase){
      console.log("Include uppercase");
}
    else {
      console.log("Do not include uppercase");
}
  // special y/n
  
  var special = confirm("Should the password contain special characters? OK is yes, Cancel is no.");
    if(special){
      console.log("Include special characters");
}
    else {
      console.log("Do not include special characters");
}
  // numbers y/n

  var numbers = confirm("Should the password contain numbers? OK is yes, Cancel is no.");
    if(numbers){
      console.log("Include numbers");
}
    else {
      console.log("Do not include numbers");
}

  // password values
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!@#$%^&*()_+";
  var numbers = "1234567890";
  var password = "";
  
  // create for loop to choose password characters

  // password is set to match password
  // mathrandom creates a number between 0 and 1.
    // above result is adjusted
      

  for (var i = 1; i <= length; i++) {
      password = password +lowercase.charAt(Math.floor(Math.random()*Math.floor(lowercase.length -1)));
  }

  for (var i = 1; i <= length; i++) {
    password = password +uppercase.charAt(Math.floor(Math.random()*Math.floor(uppercase.length -1)));
  }

  for (var i = 1; i <= length; i++) {
    password = password +special.charAt(Math.floor(Math.random()*Math.floor(special.length -1)));
  }

  for (var i = 1; i <= length; i++) {
    password = password +numbers.charAt(Math.floor(Math.random()*Math.floor(numbers.length -1)));
  }

  // add password to text box
  document.getElementById("password").value = password;
}

// // Add event listener to generate button

generate() 

