/*
 Het berekenen van: Fahrenheit en Celsius.
 ===================================================================
 Cursus: Programming 1: Essentials
 Week: 1
 Gemaakt door: Stef Van Boven 
 Datum: 25/09/2022 
 */

 const tempC = 20;
let resTemp = (tempC * 9) / 5 + 32;
console.log(`The temperature ${tempC}°C is ${resTemp}°F`);
const tempF = 18.5;
resTemp = ((tempF - 32) / 9) * 5;
console.log(`The temperature ${tempF}°F is ${resTemp}°C`);