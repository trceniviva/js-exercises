/*
- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Cute Animal Data" button. When the user clicks the button,
pull data from the provided link above (https://www.reddit.com/r/aww.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.
- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.
*/

"use strict";

const results = document.getElementById("allthestuff");

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// import then declare a new XMLHttpRequest class
var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = responseMethod;

function responseMethod() {
  // Check if our state is "DONE"
  if (httpRequest.readyState === 4) {
    // If our request was successful we get a return code/status of 200
    if (httpRequest.status === 200) {
      // This is where we update our UI accordingly. Our data is available to us through the responseText parameter
      console.log(httpRequest.responseText);
    //   return httpRequest.responseText;
    } else {
      // This is the scenario that there was an error with our request
      console.log("There was a problem with the request.");
    }
  }
}

let fulltext = ""

function hitAPI(apiDomain) {
    httpRequest.open('GET', apiDomain);
    httpRequest.send();
    // Alternate data source: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD
};

function awwClick(){
    hitAPI('https://www.reddit.com/r/aww.json');
}

function nycClick(){
    hitAPI('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD')
}
