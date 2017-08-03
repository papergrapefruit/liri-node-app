//At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
// fs is a core Node package for reading and writing files
var fs = require("fs");
// This block of code will read from the "keys.js" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("keys.js", "utf8", function (error, data) {
  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }
  // We will then print the contents of data
  console.log(data);
});
// Load the NPM Package inquirer
var inquirer = require("inquirer");
// Created a series of questions
inquirer.prompt([
  {
    type: "list",
    name: "liriCommand",
    message: "What can LIRI do for you?",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
  }
]).then(function () {
  if (liriCommand = "my-tweets"){
    
  }

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");
// wordwrap npm package
var wrap = require('word-wrap');
// Store all of the arguments in an array
var nodeArgs = process.argv;
// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = "";
// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  }
  else {
    movieName += nodeArgs[i];
  }
}
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
// This line is just to help us debug against the actual URL.
//console.log(queryUrl);
//console.log(movieName);
// Then run a request to the OMDB API with the movie specified
request(queryUrl, function (error, response, body) {
  // If the request is successful (i.e. if the response status code is 200)
  if (movieName === "") {
    console.log("-------------------------------------------------------------------");console.log("\u29BF  If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947 \n\u29BF  It's on Netflix!");
    console.log("-------------------------------------------------------------------");
  } 
  else {
    // Parse the body of the site and recover just the imdbRating
    console.log("-------------------------------------------------------------------");
    console.log("* Title: " + JSON.parse(body).Title);
    console.log("* Year: " + JSON.parse(body).Year);
    console.log("* IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("* Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("* Country: " + JSON.parse(body).Country);
    console.log("* Language(s): " + JSON.parse(body).Language);
    console.log("* Plot:" + wrap(JSON.parse(body).Plot));
    console.log("* Actors: " + JSON.parse(body).Actors); 
    console.log("-------------------------------------------------------------------");
  }
});
