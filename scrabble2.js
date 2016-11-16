var Scrabble = function() {};


Scrabble.prototype = {
  helloWorld: function() {return "Hello World!"},

  score: function(word) {
    var alphabet = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10,

    };
  }
};



// console.log("word", word[i], "testings");
//
//   switch (word[i]) {
//
//   case "a" || "e" || "i" || "o" || "u" || "l" || "n" || "r" || "s" || "t":
//   console.log ("case 1: ", score);
//   score += 1;
//   total += score;
//   console.log ("case 1 & score: ", score);
//   break;
//
//   case "d" || "g":
//   console.log ("case 2 ", score);
//   score += 2;
//   console.log ("case 2 & score:", score);
//   break;
//
//   case "b" || "c" || "m" || "p":
//   console.log ("case 3", score);
//   score += 3;
//   console.log ("case 3 & score", score);
//   break;
//
//   case "f" || "h" || "v" || "w" || "y":
//   console.log ("case 4", score);
//   score += 4;
//   console.log ("case 4 & score", score);
//   break;
//
//   case "k":
//   console.log ("case 5", score);
//   score += 5;
//   console.log ("case 5 & score", score);
//   break;
//
//   case "j" || "x":
//   console.log ("case 6", score);
//   score += 8;
//   console.log ("case 6 & score", score);
//   break;
//
//   case "q" || "z":
//   console.log ("case 7", score);
//   score += 10;
//   console.log ("case 7 & score", score);
//   break;
//
//   default:
//     console.log("Only enter letters from A-Z");
//
//
//
// }
