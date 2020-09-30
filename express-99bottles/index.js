const express = require("express");
const app = express();

const PORT = 4000

app.listen(PORT, () => {
  console.log("Trevor's magic app on port 4000");
}); 

app.get("/:numBottlesOfBeer", (req, res) => {

  let lyric = '';
  let linkText = '';
  let nextBottle = '';
  let alwaysLyric = '';

  if (parseInt(req.params.numBottlesOfBeer) === 0) {
    lyric = 'There are no more bottles!';
    alwaysLyric = "<h3>None to take down, nor pass around,</h3>"
    nextLyric = "<h3>There are no bottles of beer on the wall!</h3>"
    linkText = 'The song is over! Start again?';
    nextBottle = '99';
  } else if (parseInt(req.params.numBottlesOfBeer) === 0) {
    lyric = 'One last bottle of beer on the wall!';
    alwaysLyric = "<h3>None to take down, nor pass around,</h3>"
    nextLyric = "<h3>There are no bottles of beer on the wall!</h3>"
    linkText = 'The song is over! Start again?';
    nextBottle = '99';
  }else {
    lyric = `${req.params.numBottlesOfBeer} bottles of beer on the wall, ${req.params.numBottlesOfBeer} bottles of beer`;
    nextBottle = parseInt(req.params.numBottlesOfBeer)-1;
    linkText = parseInt(req.params.numBottlesOfBeer)-1 + " bottles.";
    alwaysLyric = "<h3>Take one down, pass it around,</h3>"
    nextLyric = "<h3>"+nextBottle + " bottles of beer on the wall!</h3>"
  };

    let lyricText = "<h3>"+lyric+"</h3>"  
    let actualLink = '<a href="/'+nextBottle+'">'+linkText+'</a>'
  res.send(lyricText + alwaysLyric + nextLyric +actualLink);
});
