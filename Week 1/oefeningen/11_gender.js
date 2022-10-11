/*
 * Gender
 * ===================================================================
 * Cursus: Programming 1: Essentials
 * Week: 1
 * Gemaakt door: Stef Van Boven
 * Datum: 26/09/2022
===================================================================
 * formaat van het geslacht:
 * 0   Niet gekend
 * 1   Man
 * 2   Vrouw
 * 3   X
 * 9   Niet van toepassing
 * ==================================================================
*/

let genderCode;
genderCode = 1;

let message = "";
let color = "";

switch (genderCode) {
  case 0:
    message = "Je geslacht is %cniet gekend!"; // %c zal worden vervangen door de styling in de console.
    color = "orange";
    break;
  case 1:
    message = "Je bent een %cman."; // %c zal worden vervangen door de styling in de console.
    color = "blue";
    break;
  case 2:
    message = "Je bent een %cvrouw."; // %c zal worden vervangen door de styling in de console.
    color = "red";
    break;
  case 3:
    message = "Je bent een %cX."; // %c zal worden vervangen door de styling in de console.
    color = "green";
    break;
  case 9:
    message = "Je geslacht is %cniet van toepassing!"; // %c zal worden vervangen door de styling in de console.
    color = "yellow";
    break;
}
console.log(
  message,
  `color: yellow; font-style: italic; background-color: ${color};padding: 2px`
);