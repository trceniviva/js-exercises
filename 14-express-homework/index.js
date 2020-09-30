const express = require("express");
const app = express();

const PORT = 4000

app.listen(PORT, () => {
  console.log("Trevor's magic app on port 4000");
}); 

app.get("/", (req, res) => {

    const compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Is it Ruby Tuesday yet?",
        "It's almost beer o'clock",
        "The Force is strong with you",
        "Hey, you're good at this!",
        "Coding is dope ^_^"
      ]
      
    const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

    let comp = compliments[Math.floor(Math.random()*compliments.length)];
    let color = colors[Math.floor(Math.random()*colors.length)];

    let fullDiv =  `
        <html>
        <head>
        <style>
            .mainDiv {
                background-color:`+color+`;
                width: 100%;
                height: 100%;
                text-align:center;
                vertical-align:center;
            }
            </style>
            </head>
            <body>
                <div class="mainDiv">
                        <h1>` + comp + `</h1>
                    </div>
                    </body>
                    </html>`

    res.send(fullDiv);

  });
  

  app.get("/:name", (req, res) => {

    const compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Is it Ruby Tuesday yet?",
        "It's almost beer o'clock",
        "The Force is strong with you",
        "Hey, you're good at this!",
        "Coding is dope ^_^"
      ]
      
    const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

    let comp = compliments[Math.floor(Math.random()*compliments.length)];
    let color = colors[Math.floor(Math.random()*colors.length)];

    let fullDiv =  `
        <html>
        <head>
        <style>
            .mainDiv {
                background-color:`+color+`;
                width: 100%;
                height: 100%;
                text-align:center;
                vertical-align:center;
            }
            </style>
            </head>
            <body>
                <div class="mainDiv">
                        <h1>`+req.params.name + `! ` + comp + `</h1>
                    </div>
                    </body>
                    </html>`

    res.send(fullDiv);

  });
  