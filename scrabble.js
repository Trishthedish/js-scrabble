var Scrabble = function() {};

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
      console.log("letter ",letter); // c a t

      score += alphabet[letter];
      // // console.log("alphabet",alphabet, alphabet[letter]);
      // console.log("score: ", score, word);
    } // word loop end.
    // console.log("You Played:", word ,", worth: ", score, "points");
    // "You Played" [cat] worth: [5] points
    return score;

  }, //score function end

  // highestScoreFrom(arrayOfWords): returns the word in the array with the highest score.
  highestScoreFrom: function(words) {
    // create initial holder for score.
    var max_score = 0;
    // score the current_word.
    var current_word = this.score(words[0]);
    console.log("current_word: ",current_word);

    for(var i = 0; i < words.length; i++) {
      // console.log(words);
      console.log("currentword: ",current_word);

      if (max_score > current_word[i]) {

        console.log('words', words[i]);
        return max_score;
      }

    }

  }








}; // scrabble end


// create a scrabble object?
var myScrabble = new Scrabble();

// Test 1.
/* score(word): returns the total score value for the given word. The word is input as a string (case insensitive). The chart below shows the point value for a given letter. */
// tests checked on lines 52-56.
myScrabble.score("cat");


// Test 2.
/* highestScoreFrom(arrayOfWords): returns the word in the array with the highest score. */
// sizzles = 25, fuzz = 25, dog = 5, cat = 5. enchanted = 15
// create a collection of words.
var collection = ["sizzles", "enchanted", "dog", "cat"];
// using new function name. I should return the highest scored word in array.
 // which in this case is sizzles.
myScrabble.highestScoreFrom("I should return sizzles", collection);

// => should return sizzles as highestscorefrom

//WORD KEY:
// biz = 14, quasi = 14 , cat = 5, milk = 10



// Previous test example of what it make look like.


// it 'tie between words of length 7 and another word of smaller length with same point value.' do
//   expect(Scrabble::Scoring.highest_score_from(["sizzles", "fuzz", "dog", "cat"])).must_equal("sizzles")
// end


// it 'Two word tie goes to the word with fewest letters' do
//   expect(Scrabble::Scoring.highest_score_from(["biz","quasi", "cat", "milk"])).must_equal("biz")
// end







module.exports = Scrabble;
