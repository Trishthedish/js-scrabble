var Scrabble = function() {};

// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//
//   return 'hello world!';
//
// };

Scrabble.prototype = {
  helloWorld: function() {return "Hello World!"},

  // score(word): returns the total score value for the given word. The word is input as a string (case insensitive). The chart below shows the point value for a given letter.

  score: function(word) {
    // insure input of word is clean. turning everythig into uppercase.
    word = word.toUpperCase();

    // create starting point, for score.
    var score = 0;

    var letter;
    // letter associated with score.
    var alphabet = {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 5,
      L: 1,
      M: 3,
      N: 1,
      O: 1,
      P: 3,
      Q: 10,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 4,
      X: 8,
      Y: 4,
      Z: 10 };

    // loop through whatever word entered, look at the letters specifically.
    for(var i = 0; i < word.length; i ++) {

      letter = word[i];
      // console.log("letter ",letter);

      score += alphabet[letter];
      // // console.log("alphabet",alphabet, alphabet[letter]);
      // console.log("score: ", score, word);
    } // word loop end.
    // console.log("You Played:", word ,", worth: ", score, "points");
    return score;

  }, //score function end

  highestScoreFrom: function(words) {
    var max_score = 0;
    var current_word = this.score(words[0]);
    console.log(current_word);

    for(var i = 0; i < words.length; i++) {
      // console.log(words);
      console.log("currentword: ",current_word);

      if (max_score > current_word[i]) {

        console.log(words[i]);
        return max_score;
      }

    }

  }








}; // scrabble end



var myScrabble = new Scrabble();

// console.log(myScrabble.helloWorld());

myScrabble.score("CAT");

// Previous test example of what it make look like.
// it 'tie between words of length 7 and another word of smaller length with same point value.' do
//   expect(Scrabble::Scoring.highest_score_from(["sizzles", "fuzz", "dog", "cat"])).must_equal("sizzles")
// end


var collection = ["sizzles", "fuzz", "dog", "cat"];
myScrabble.highestScoreFrom(collection);
// => should return sizzles as highestscorefrom.



module.exports = Scrabble;
