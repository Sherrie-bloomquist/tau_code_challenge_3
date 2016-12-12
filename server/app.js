var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var port = process.env.PORT || 3000;
// create 'urlEncodedParser' in case we want to inject it for post calls:
var urlEncodedParser = bodyParser.urlencoded( { extended: true } );
// use bodyParser.urlencoded throughout the app with this:
app.use( bodyParser.urlencoded( { extended: false } ) );
// initial jokes provided by the client


jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Twofish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  }
];
// app.post('/', function(req,res){
// var preloadedJokes = {
//
//   res.send(preloadedJokes);
// });//trying to send array to client side to post to DOM

// spin up server
app.listen( port, function(){
  console.log( 'server up on port' );
}); // end spin up server

app.get( '/', function( req, res ){
  // base url
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

//jokePost
app.post('/jokePost', function(req, res){
  console.log('jokePost url hit req.body:', req.body);
  var whoseJoke = req.body.whoseJoke;
  var jokeQuestion = req.body.jokeQuestion;
  var punchLine = req.body.punchLine;
  // jokes.push(req.body);

  console.log('var whoseJoke:', whoseJoke);

var theWholeJoke = {
  who: req.body.whoseJoke,
  joke: req.body.jokeQuestion,
  punchline: req.body.punchLine

}; //end theWholeJoke object
  res.send(theWholeJoke);

}); //end jokePost

app.use( express.static( 'public' ) );
