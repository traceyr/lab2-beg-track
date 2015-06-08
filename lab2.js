'use strict';

/* ********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js */

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington. */

function Blob(name) {
  this.name = name;

}

var blob = new Blob('blob');

var peopleEaten = 0;
var hour = 0;

for (hour; peopleEaten <= 1000; hour++) {
  peopleEaten = hour + peopleEaten;
  if (peopleEaten >= 1000) {
    break;
  }
}

var hoursSpentInDowington = hour; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// // Now, write a method that takes a population for an arbitrary
// // town, and the starting consumption rate, and returns the number
// // of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  var hour = 0;

  for (hour; population > 0; hour++) {
    population = population - peoplePerHour * hour;
    if (population <= 0) {
      break;
    }
  }
  return hour;
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
assert(blob.hoursToOoze(10, 2) === 3, 'people per hour');
assert(blob.hoursToOoze(12, 2) === 3, 'when population equals exactly zero');
assert(blob.hoursToOoze(45, 5) === 4, 'people per hour');
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  federationStandard: 'hello' // home planet is Earth
};

// var warbirdSpecies = 'romulan';
// var greeting = hello[warbirdSpecies]

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(homePlanet, lang) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.lang = lang;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    console.log(hello[this.lang]);

    var languageListener = sb.lang;
    var translatedHello = hello[languageListener];
    return translatedHello;
    //TODO: put this on the SentientBeing prototype
  };

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing('Qo\'noS', 'klingon'); // TODO: make a klingon
var romulan = new SentientBeing('Romulus', 'romulan'); // TODO: make a romulan
var human = new SentientBeing('Earth', 'federationStandard'); // TODO: make a human

assert(human.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');
assert(romulan.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');
assert(human.sayHello(romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert(klingon.sayHello(romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert(klingon.sayHello(human) === 'hello',
  'the human should hear hello');
assert(romulan.sayHello(human) === 'hello',
  'the human should hear hello');
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  return Math.max.apply(null, array);
}

// TODO: write three more assertions
assert(max([1, 3, 2]) === 3, '[1,3,2]');

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()
  var strArr = string.split(' ');
  var newArr = [];

  for (var i = 0 ; i < strArr.length ; i++) {
    strArr[i] = strArr[i].toLowerCase();
    if (i === 0) {
      newArr[0] = strArr[0];
    } else {
      var FirstLetter = strArr[i].charAt(0).toUpperCase();
      var restOfWord = strArr[i].slice(1);

      newArr[i] = FirstLetter + restOfWord;
    }
  }
  return newArr.join('');

}

// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');
assert(variablify('One Two Three') === 'oneTwoThree',
  'variablify(\'One Two Three\')');
assert(variablify('ONE TWO THREE') === 'oneTwoThree',
  'variablify(\'ONE TWO THREE\')');
assert(variablify('OnE TwO tHREE') === 'oneTwoThree',
  'variablify(\'OnE TwO tHREE\')');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
