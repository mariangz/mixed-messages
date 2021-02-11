"use strict";

const randomNumber = () => Math.floor(Math.random() * 5);

const probablity = ["Saturn laughs and says", "Probably" , "No way", "The moon watches and says nothing, but she knows that", "Mars sings along with Mercury"];

const when = ["today", "in your next life", "in one year", "only God knows", "tomorrow"];

const subj = "you";

const verb = ["will find", "will have", "will get", "will discover", "will win"];

const objDir = ["inspiration", "a fresh breeze", "a cold beer", "the secret of life", "a lot of money"];

const where = ["in the street.", "in the office.", "looking inside you.", "in your heart.", "in your deepest thoughts."];

const horoscope = () => {
    console.log(`${probablity[randomNumber()]} ${when[randomNumber()]} ${subj} ${verb[randomNumber()]} ${objDir[randomNumber()]} ${where[randomNumber()]}`);
};

horoscope()
