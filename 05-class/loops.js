// Get username & password from user... and untill password is not correct keep asking for password

let username = prompt("Enter your name");
let password = prompt("Enter your password");

let correctPassword = 1234;


while(password!=correctPassword){
    password = prompt("Enter password again!");
}

alert("Correct password entered");


