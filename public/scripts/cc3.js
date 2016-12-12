console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
// //display jokes array on DOM load
// $('#preloadedJokes').append(jokes.length);

  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
    postJoke();
  }); // end addJokeButton on click

//post
var postJoke = function(){
  console.log('in postJoke');


//assemble object to Send
  var whoseJoke = $('#whoseJokeIn').val();
  var jokeQuestion = $('#questionIn').val();
  var punchLine = $('#punchlineIn').val();
  var objectToSend = {
    whoseJoke: whoseJoke,
    jokeQuestion: jokeQuestion,
    punchLine: punchLine
  }; //end objectToSend
console.log(objectToSend);

//ajax call to server
  $.ajax({
    type: 'POST',
    url: '/jokePost',
    data: objectToSend,
    success: function(response){
      console.log('back from jokePost:', response);
      outputText = '';
      outputText += '<p><b>' + "Joke Author: " + '</b>' + response.who + '</p>';
      outputText += '<p><b>' + "Joke: " + '</b>' + response.joke + '</p>';
      outputText += '<p><b>' + "Punchline: " + '</b>' + response.punchline + '</p>';

      $('#outputDiv').append(outputText);
    } //end success function
  }); //end ajax call to server
}; //end postJoke function

  //ajax call for joke array
  // $.ajax({
  //   type: 'GET',
  //   url: '/',
  //   data: jokes,
  //   success: function(response){
  //     $('#preloadedJokes').append(response);
  //   }//end success function
  //
  //
  //
  // });//end ajax call for joke array


}); // end doc ready
