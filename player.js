var Scrabble = require('./scrabble.js');


// / Constructor: Called when you use new Player(name), sets up an instance with the instance variable name assigned
// name: property which returns the value of the player's name
// plays: property which returns an Array of the words played by the player


var Player = function(playerName) {
  this.playerName = playerName;
   this.plays = [];

};

  Player.prototype = {
    score: 0, 
// // play(word): Function which adds the input word to the plays Array Returns false if player has already won
    playWord: function(word) {
      // if the player hasnt won yet, place the input word into the plays Array .

      var score = 0;
      if (Scrabble.score !== 100) {
        plays.push(this.word);
      } else {

      return false;

      }

    },
//
// // totalScore(): Function which sums up and returns the score of the players words
//     totalScore: function(score) {return "players score";},
//
//     // hasWon(): Function which returns true if the player has over 100 points, otherwise returns false
//     hasWon: function() {return "return true if player has over 100pts";},
//
//     // highestScoringWord(): Function which returns the highest scoring word the user has played
//
//     highestScoringWord: function() { return "returns the highest scoring word the user has played.";},
//
//     // highestWordScore(): Function which returns the highestScoringWord score
//
//     highestWordScore: function() {return "highestScoringWord score";}
}; // closes player object..



var myPlayer = new Player("Joe");

console.log("your in Player: ",myPlayer.playerName);


myPlayer.playWord("amen");

// Wave 2 Create a new Player object. The object should have the following functions:
// Constructor: Called when you use new Player(name), sets up an instance with the instance variable name assigned


  module.exports = Player;
