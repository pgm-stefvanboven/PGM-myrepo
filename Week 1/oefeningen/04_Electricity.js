/*
 Berekeningen met elektrische formules.
 ===================================================================
 Cursus: Programming 1: Essentials
 Week: 1
 Gemaakt door: Stef Van Boven 
 Datum: 23/09/2022 
 */

const v = 230; // Volt = V 
const i = 2.85; // Ampere = A 
const r = v / i; // v = 230 | i = 2.85 = 230/2.85 = 80.7017543859649 Ohm
const p = v * i; // v = 230 | i = 2.85 = 230*2.85 = 655.5 W
const t = 0.02; // seconden = sec 
const f = 1 / t; // hertz = 1 | t = 0.02 = 1/0.02 = 50H

const message = `
========================================================================
Formula Electricity
========================================================================
The resistance of the resistor: R = V / I => R = ${v} / ${i} = ${r} Ohm 
The power: P = V * I => P = ${v} * ${i} = ${p} Watt  
The frequency: f = 1 / T => f = 1 / ${t} = ${f} Herz  
========================================================================
`;
console.log(message);