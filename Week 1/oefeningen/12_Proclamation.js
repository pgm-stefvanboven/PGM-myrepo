/*
 * Proclamatie
 * ===================================================================
 * Cursus: Programming 1: Essentials
 * Week: 1
 * Gemaakt door: Stef Van Boven 
 * Datum: 26/09/2022
 */

let resultInPercentage = 82;
let message = "Je bent geslaagd ";
if (resultInPercentage >= 90) {
  message +=
    "met grootste onderscheiding en de gelukwensen van de examencommissie.\u{1F3C6}\u{1F3C6}\u{1F3C6}u{1F3C6}";
} else if (resultInPercentage >= 85 && resultInPercentage < 90) {
  message += "met grootste onderscheiding. \u{1F3C6}\u{1F3C6}\u{1F3C6}u{1F3C6}";
} else if (resultInPercentage >= 77 && resultInPercentage < 85) {
  message += "met grote onderscheiding. \u{1F3C6}\u{1F3C6}\u{1F3C6}";
} else if (resultInPercentage >= 68 && resultInPercentage < 77) {
  message += "met onderscheiding. \u{1F3C6}\u{1F3C6}";
} else if (resultInPercentage >= 50 && resultInPercentage < 68) {
  message += "met onderscheiding. \u{1F3C6}";
} else {
  message +=
    ", jammer maar helaas. Je bent niet geslaagd maar weet dat je nog een kans hebt.";
}
console.log(message);