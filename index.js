//install package
readlineSync = require("readline-sync");

//welcome message
var username = readlineSync.question("What is your name? ");
console.log("Welcome " + username + " to the Movie quiz \n" );