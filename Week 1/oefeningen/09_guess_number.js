/*
 * Raadt het nummer.
 * ===================================================================
 * Cursus: Programming 1: Essentials
 * Week: 1
 * gemaakt door: Stef Van Boven
 * Datum: 25/09/2022
 */

const guessNumber = 8;
const randomNumber = Math.round(Math.random() * 10);
let message;
if (guessNumber < randomNumber) {
  message = "Het getal is kleiner dan het random getal.";
} else if (guessNumber > randomNumber) {
  message = "Het getal is groter dan het random getal.";
} else {
  message = "Het getal is gelijk aan het random getal.";
}
console.log(message);