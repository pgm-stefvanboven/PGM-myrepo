/*
 Berekeningen van het aantal jaren, dagen, minuten en seconden.
 ===================================================================
 Cursus: Programming 1: Essentials
 Week: 1
 Gemaakt door: Stef Van Boven 
 Datum: 24/09/2022 
 */
 const seconds = 78883003736;


 const oneYearHowManySeconds = 1 * 365 * 24 * 60 * 60;
 const oneDayHowManySeconds = 24 * 60 * 60;
 const oneHourHowManySeconds = 60 * 60;
 const oneMinuteHowManySeconds = 60;
 
 let secondsLeft = seconds;
 
 const nYears = Math.floor(secondsLeft / oneYearHowManySeconds);
 secondsLeft -= nYears * oneYearHowManySeconds;
 const nDays = Math.floor(secondsLeft / oneDayHowManySeconds);
 secondsLeft -= nDays * oneDayHowManySeconds;
 const nHours = Math.floor(secondsLeft / oneHourHowManySeconds);
 secondsLeft -= nHours * oneHourHowManySeconds;
 const nMinutes = Math.floor(secondsLeft / oneMinuteHowManySeconds);
 secondsLeft -= nMinutes * oneMinuteHowManySeconds;

 const message = `
 ${nYears}years ${nDays}days ${nHours}hours ${nMinutes}minutes ${secondsLeft}seconds
 `;
 console.log(message);