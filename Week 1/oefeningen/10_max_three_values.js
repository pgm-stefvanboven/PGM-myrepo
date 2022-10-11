/*
 * Maximaal drie waarden.
 * ===================================================================
 * Cursus: Programming 1: Essentials
 * Week: 1
 * gemaakt door: Stef Van Boven
 * Datum: 26/09/2022
 */

const a = 3;
const b = 4;
const c = 0;

let maxValue = a;
if (b > a) {
  maxValue = b;
}
if (c > b) {
  maxValue = c;
}
console.log(`De maximale waarde is: ${maxValue}.`);