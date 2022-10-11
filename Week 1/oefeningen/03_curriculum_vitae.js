/*
 * Mijn Persoonlijke CV
 * ===================================================================
 * Cursus: Programming 1: Essentials
 * Week: 1
 * gemaakt door: Stef Van Boven
 * Datum: 23/09/2022
 */

const firstName = "Stef"; 
const surName = "Van Boven"; 
const sex = "Male"; 
const age = 19;
const unicodeAvatar = "\u{1F60E}";
const married = false;
const quote = "My goal is to become a talent in programming in the future and help many people with my knowledge.";
const langDutchLevel = "*********";
const langEnglishLevel = "*****";
const langFrenchLevel = "*";

const message = `
Mijn Persoonlijke CV
============================================================
Firstname:\t${firstName}
Surname:\t${surName}
Sex:\t\t${sex}
Age:\t\t${age}
Married:\t${married}
Avatar:\t\t${unicodeAvatar}
Quote:\t\t${quote}
------------------------------------------------------------
Languages
------------------------------------------------------------
Dutch:\t\t${langDutchLevel}
English:\t${langEnglishLevel}
French:\t\t${langFrenchLevel}
============================================================
`;
console.log(message);