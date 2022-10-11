/*
 Berekeningen van de oppervlakte en het volume.
 ===================================================================
 Cursus: Programming 1: Essentials
 Week: 1
 Gemaakt door: Stef Van Boven 
 Datum: 25/09/2022 
 */

 let l, b, h, d;
 let surface;
 
 // Rechthoek
 l = 10;
 b = 20;

 surface = l * b;
 console.log(`De oppervlakte van de rechthoek is: ${surface}cm²`);
 
 // Driehoek
 l = 20;
 h = 10;
 
 surface = (l * h) / 2;
 console.log(`De oppervlakte van de driehoek is: ${surface}cm²`);
 
 // Cirkel
 d = 50;

 surface = Math.PI * Math.pow(d / 2, 2);
 console.log(`De oppervlakte van de cirkel is: ${surface}cm²`);
 
 // Cilinder
 d = 30;
 h = 100;

 surface = h * Math.PI * Math.pow(d / 2, 2);
 console.log(`Het volume van de cilinder is: ${surface}cm³`);
 
 // Kubus
 d = 25;

 surface = Math.pow(d, 3); // surface = d * d * d;
 console.log(`Het volume van de kubus is: ${surface}cm³`);