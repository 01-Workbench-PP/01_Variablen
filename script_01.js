"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hallo");
// console.log(firstName);

/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Yunaisy"; // Wertzuweisung
// console.log(firstName); //Ausgabe

// let familyName = "Jug";
// console.log(familyName);
// console.log(firstName + " " + familyName);

/***** 03 Deklaration + Wertzuweisung II *******/

// let firstName, familyName;
// firstName = prompt("Bitte Vornamen eingeben:"); //Wertzuweisung
// console.log(firstName); //Ausgabe
// familyName = prompt("Bitte Nachnamen eingeben:"); 
// console.log(firstName + " " + familyName); //Ausgabe

// console.log("Datentyp: " + typeof firstName);



/* JS ist eine untypisierte Sprache! | untyped */

// let test;
// test = "Hi";
// test = 2;
// test = true
// // console.log(test);

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test); // Ausgabe

/***** 03a Konstanten *******/

// const test = "Hallo"; // Variable mit KONSTANTEM Inhalt
// test = "hi"; // KEINE neue Zuweisung zur LZ möglich! --> Fehler
// console.log("Inhalt: " + test); // Ausgabe

/***** 04 Beispiel - Berechnung *******/

// Deklaration
const birthYearJohn = 2000;
const birthYearMark = 1990;
let ageJohn, ageMark;

// let year = 2023;

let date = new Date();
let year = date.getFullYear();
console.log(date.getFullYear());

// Berechnung

ageJohn = year - birthYearJohn
ageMark = year - birthYearMark

console.log(ageJohn);
console.log(ageMark);

// let ageJohn, ageMark;
// let birthYearJohn, birthYearMark;

// // Wertzuweisung
// ageJohn = 23;
// ageMark = 33;

// let date = new Date();
// console.log(date);
// // let year = date.getFullYear();
// let year = new Date().getFullYear();

// // Berechnung
// birthYearJohn = year - ageJohn;
// birthYearMark = year - ageMark;

// // Ausgabe
// console.log("birthYearJohn: " + birthYearJohn);
// console.log("birthYearMark: " + birthYearMark);


