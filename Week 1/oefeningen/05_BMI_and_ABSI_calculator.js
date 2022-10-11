/*
 Berekeningen van de BMI en van de ABSI.
 ===================================================================
 Cursus: Programming 1: Essentials
 Week: 1
 Gemaakt door: Stef Van Boven 
 Datum: 24/09/2022 
 */

const length = parseFloat(1.72);
const weight = parseFloat(65);
// w = 65kg | l = 1.72m = 65/1.72*1.72 = BMI= 37.7906976744186

// Berekenen van de BMI
const bmi = Math.floor(weight / (length * length));
console.log(`Your bmi is ${bmi}`);
const waist = parseFloat(0.8);
// Berekenen van de ABSI
const absi = waist / (Math.pow(bmi, 2 / 3) * Math.pow(length, 1 / 2));
console.log(`Your absi is ${absi}`);