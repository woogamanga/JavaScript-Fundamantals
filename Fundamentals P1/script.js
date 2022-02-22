console.log("JS Fundamentals P1 Start");
console.log(" ");

console.log("1) Values and Variables");
console.log(" ");
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Seth'; //declaring a variable and assigning a value to it 
//declaration is different from assignment 
console.log(firstName); //printing to the console
console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable names can only take numbers, letters, underscore(_) and dollar sign($)
//every other sign is an illegal character
//variable names cannot start with a number
//nor can you use a JS reserved keyword such as new, function etc.
//name however is allowed despite being a reserved keyword (in some cases there may be errors)
//it's not good practice to start naming variables with uppercase letters as well although allowed
//it is semantically incorrect (more on it later)

let Person = "Woo";
console.log(Person); //not good practice

//variables written in ALL-CAPS are usually reserved for constants
let PI = 3.142;
console.log(PI)
*/
//practice questions 1 
let country = 'Malaysia';
let continent = 'Asia';
let population = 33.45;

//console.log(country);
//console.log(continent);
//console.log(population);

console.log("2) Data Types");
console.log(" ");

//2 types of values: primitive or object
//7 primitive data types
//Number -> decimals and integers **
//String ** 
//Boolean (true/false) **
//Undefined (empty value as in the case of declaring a variable without assigning a value to it)
//Null (empty value) <- used in other circumstances
//Symbol (ES6) -> value is unique and cannot be changed
//BigInt (ES2020) : larger integers than Number type can hold

//JS has dynamic typing, we don't have to explicitly define the type
//the value has the type not the variable 

/*
    this is a multi-line comment
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//typeof operator
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'javascriptIsFun');

//to see dynamic typing in action
javascriptIsFun = 'yes it is'
console.log(typeof javascriptIsFun) //it used to be a boolean now it is a string

let year;
console.log(year); //value is undefined
console.log(typeof year); //type is also undefined 

year = 1998;
console.log(typeof year);

//peculiar stuff (this is a bug in JS but is not corrected due to legacy reasons)
console.log(typeof null); //both value and type is null yet console shows object instead
*/

//practice questions 2 
let isIsland = false;
let language;

// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

console.log("3) Let, Const and Var");
console.log(" ");

/*
//Let and Const were introduced in ES6
//before that Var was used to declare variables
//let is used to declare something which can/will be changed later
//Const is used to declare something which cannot and will not be changed later

let myAge = 50;
myAge = 24; //reassignment or mutation of a variable

const birthYear = 1998;
//birthYear = 1991; //variable cannot be reassigned i.e. immutable variable

//const job; //you cannot leave a constant declaration undefined i.e. it must be initialised

//in most cases its a good practice to always define using const
//because its best to have as little variable mutation as possible
//variable mutation can potentially introduce bugs in your code
//use let only when you're very sure that the value will change down the line in the code

var hobby = 'singing';
hobby = 'dancing';
console.log(hobby);

//it may look like var and let is the same thing but the truth is, they're really different (will be discussed later)
//it's not recommended to use var 
*/

//practice questions 3
language = 'English';
const myCountry = 'Malaysia';
const myContinent = 'Asia';
const myIsIsland = false;
//myIsIsland = true;

console.log("4) Basic Operators");
console.log(" ");

const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
/*
console.log(ageJonas, ageSarah);
console.log("Sarah is " + ageSarah + " years old.");
console.log("Sarah is ", ageSarah, " years old.");
console.log(ageJonas / 2, ageJonas * 2, 3 ** 2);

const firstName = "Seth";
const secondName = "Woo";
console.log(firstName + " " + secondName); //using + operator to concatenate strings

let x = 20;
x += 5; //25
x -= 5; //20
x++; //21
x--; //20
x *= 2; //40
x /= 10; //4
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageJonas >= ageSarah);
console.log(ageJonas <= ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
*/

//practice questions 4
//console.log(population / 2);
population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
// console.log(description);

console.log("5) Operator Precedence");
console.log(" ");

//declaring several variables at once can be done as follows
// let x, y;
// x = y = 25 - 10 - 5; //assignment operator works from right to left while + operator works from left to right
// console.log(x, y);

// const averageAge = (ageSarah + ageJonas) / 2;
// console.log(averageAge);

//Coding Challenge 1
console.log("Coding Challenge 1");
/*
let markMass;
let markHeight;
let johnMass;
let johnHeight;
let markBMI;
let johnBMI;
let markHigherBMI;
//in javascript, performing operations on undefined gives NaN (not a number)
//and NaN > NaN returns false just as NaN == NaN returns false

//Test Data 1
console.log(" ");
console.log("Test Data 1");
console.log(" ");
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;
markBMI = (markMass / (markHeight ** 2));
johnBMI = (johnMass / (johnHeight ** 2));
console.log("Mark's BMI = " + markBMI);
console.log("John's BMI = " + johnBMI);
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//Test Data 2
console.log(" ");
console.log("Test Data 2 ");
console.log(" ");
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
markBMI = (markMass / (markHeight ** 2));
johnBMI = (johnMass / (johnHeight ** 2));
console.log("Mark's BMI = " + markBMI);
console.log("John's BMI = " + johnBMI);
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/
console.log(" ");
console.log("6) Strings and Template Literals");
console.log(" ");

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + " !";
console.log(jonas);

//template literals (delimited using backticks) 
//which is one of the most frequently used ES6 feature 
//allows us to create strings using placeholders instead of having to concatenate them together 
//some developers already get into a habit of using backticks 
//more convenient cuz you don't have to think of which quotes (single or double) to use 
//and you can also easily create multiline strings
console.log(" ");
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`
console.log(jonasNew);
console.log(`This is just a regular string`)
console.log(`I'm using a ton of quotation marks here with no care in the world ''''''`)
//without using backticks this is how you would create a multiline string
console.log('First line \n\Second line \n\Third line \n\Fourth line');
//backticks allow us to create multiline strings with a simple enter/return w/o having to use \n\
console.log(`First line
Second Line
Third Line`);
//this will be useful later on when we touch on html
*/
//practice questions 6
//console.log(`${myCountry} is in ${myContinent}, and its ${population} million people speak ${language}`)

console.log("7) Taking Decisions: if/else Statements")
console.log(" ")
/*
const age = 15;
//const isOldEnough = age >= 18;

//if/else control structure as it allows us to have more control over the way the code is executed
//to use emoji on mac we can do CMD + Ctrl + Space 
if (age >= 18) {
    console.log('Sarah can start her driving lessons 😁🤩🚘🚗')
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 1991;
let century; //declare it outside so that you don't restrict its scope
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);
*/

//Coding Challenge 2
console.log("Coding Challenge 2");
console.log(" ");
/*
let markMass;
let markHeight;
let johnMass;
let johnHeight;
let markBMI;
let johnBMI;
//in javascript, performing operations on undefined gives NaN (not a number)
//and NaN > NaN returns false just as NaN == NaN returns false

//Test Data 1
console.log(" ");
console.log("Test Data 1");
console.log(" ");
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;
markBMI = (markMass / (markHeight ** 2)).toFixed(1); //this allows us to set the precision to a specified number of d.p.(s)
johnBMI = (johnMass / (johnHeight ** 2)).toFixed(1);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) !`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}) !`);
}

//Test Data 2
console.log(" ");
console.log("Test Data 2 ");
console.log(" ");
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
markBMI = (markMass / (markHeight ** 2)).toFixed(1);
johnBMI = (johnMass / (johnHeight ** 2)).toFixed(1);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) !`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}) !`);
}
*/
console.log("8) Type Conversion and Type Coercion");
console.log(" ");
/*
//type conversion is when we explicitly convert from one type to another
//type coercion is the same thing but it happens implicitly and is done by js 

//type convertion
const inputYear = '1991';
//console.log(inputYear + 18) //this doesn't behave the way we want it to
console.log(Number(inputYear) + 18); //Number function allows us to convert a string to a number

console.log(Number('Jonas')); //this gives us NaN
//typeof NaN gives us a number so it's actually an invalid number
//javascript outputs NaN when an operation involving numbers fail to give us a valid number

console.log(String(23), 23);

//type coercion (javascript will automatically convert one of the values to match the type of the other value so that the operation can be performed)
console.log('I am ' + 23 + ' years old.'); //the + operator in js will do String + String(23) + String automatically behind the scenes for us
console.log('23' - '10' - 3);
console.log('23' - '10'); //- operator automatically converts String -> Number
console.log('23' * '2'); //* operator converts from String -> Number 
console.log('23' / '2'); // / operator converts from String -> Number 
console.log('10' + 12); //+ operator on the other hand converts from Number -> String giving us classic string concatenation

let n = '1' + 1; //this gives us '11'
n = n - 1; //this gives us 10, a number 
console.log(n); //this should output 10, a number in purple color

//practice questions 7
console.log('9' - '5'); //this will give us 4, a number
console.log('19' - '13' + '17'); //this will give us '617'
console.log('19' - '13' + 17); //this will give us 23, a number
console.log('123' < 57); //this apparently gives false because '123' is converted from String to number
console.log(5 + 6 + '4' + 9 - 4 - 2); //this will give us 1143, a number
*/
console.log("9) Truthy and Falsy Values");
console.log(" ");

/*
//falsy values = values that are not exactly false but will become false when we try to convert them to booleans
//5 falsy values = 0, '' (empty string), undefined, null, NaN
//they will result in false when converted to a boolean
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
//so any string that is not an empty string is a truthy value
//because they will result in true when converted to a boolean
console.log(Boolean("Jason"));
//so is an empty object (it's a truthy value as well)
console.log(Boolean({}));

//why does this work? >> if always precedes a boolean value so coercion will take place here 
const money = 0; //100 will run the if block because its a truthy value
if (money) { //type coercion (implicit conversion) here from number to Boolean, giving false value since 0 is a falsy value
    console.log("Don't spend it all ;)");
}
else { //hence the else block will run 
    console.log("You should get a job!");
}

//this is a flawed design because if height is initialised to zero, the else block will always execute which doesn't make sense
//we can however take this into consideration in future lessons
let height;
if (height) { // type coercion from undefined to boolean, giving false value since undefined is a falsy value
    console.log("Yay ! Height is defined");
}
else { //else block will run
    console.log("Height is undefined");
}
*/

console.log("10) Equality Operators: == vs ===");
console.log(" ");

/*
// === is called the strict equality operator because js will not perform type coercion
//it returns true when both values are exactly the same (in type and value)
// == is called the loose equality operator because js will perform some implicit, type coercion
// not to be confused with =, which is just the assignment operator

const age = '18';
//we can omit curly braces if we only have 1 line of code
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

//as a general rule, try to avoid using the loose equality operator as much as you can, as it can introduce some hard to detect bugs
//if the values in comparison do not have the same type, it's better to perform type conversion first before comparing them using the === operator

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) console.log("Cool ! 23 is an amazing number! (loose)"); //this will return true because == will perform type coercion
if (favourite === 23) console.log("Cool ! 23 is an amazing number! (strict)"); //this will not run 

//best practice 
const userInput = Number(prompt("Please enter your number: ")); //performing type conversion before the comparison is the best practice
console.log(userInput);
console.log(typeof userInput);

if (userInput === 69) console.log("Cool ! 69 is an amazing number 😏");
else if (userInput === 7) console.log("7 is also a cool number");
else console.log("Number is not 69 or 7");

//difference or inequality operator 
//loose version: != (type coercion is performed)
//strict version !== (best to always use this one) (no type coercion)
//since favourite is not a number, if we want type coercion we should use the loose version

if (favourite != userInput) console.log("The two inputs are different.");
else console.log("The two inputs are the same."); //here '11' != 11 will return false

if (favourite !== userInput) console.log("The two inputs are different."); //here '11' !== 11 will return true
else console.log("The two inputs are the same.");
*/

//practice questions 8 
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours === 1) console.log('Only 1 border!');
// else if (numNeighbours > 1) console.log('More than 1 border');
// else console.log('No borders');

console.log("11) Boolean Logic (Just Theory)");
console.log(" ");

console.log("12) Logical Operators");
console.log(" ");

/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision); //equivalent to A and B = false
// console.log(hasDriversLicense || hasGoodVision); //equivalent to A or B = ture 
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision; //this is false

// if (shouldDrive) console.log("Sarah is able to drive!");
// else console.log("Someone else should drive ....");

const isTired = false; //C
// console.log(hasDriversLicense || hasGoodVision || isTired); //this is true
// console.log(hasDriversLicense && hasGoodVision && isTired); //this is false

//Sarah is able to drive if she has a drivers license, has good vision and is not tired
if (hasDriversLicense && hasGoodVision && !isTired) console.log("Sarah is able to drive!");
else console.log("Someone else should drive ....");
*/

//practice questions 9 
// const speaksEnglish = true;
// const isAnIsland = false;
// const lessThan50Mil = true;

// if (speaksEnglish && lessThan50Mil && !isAnIsland) console.log('You should live in Malaysia :)');
// else console.log('Malaysia does not meet your criteria :(');

//Coding Challenge 3
console.log("Coding Challenge 3");
console.log(" ");
/*
//test data (No team won)
// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 91 + 110) / 3;
//test data bonus 1 (Koalas Won)
// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 123) / 3;
//test data bonus 2 (Draw)
const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 106) / 3;

const minimumScore = 100;

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= minimumScore) console.log('Dolphins Won !');
else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= minimumScore) console.log('Koalas Won !');
else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= minimumScore && averageScoreKoalas >= minimumScore) console.log('Draw !');
else console.log('No team wins the trophy :((');
*/

console.log("13) The switch Statement");
console.log(" ");
/*
//an alternative way of doing if-else
const day = 'monday'; //we're hardcoding here but usually data comes from users

switch (day) {
    case 'monday': //basically checking if day === 'monday'
        console.log('Plan course structure.');
        console.log('Go to coding meetup.');
        break; //if this is omitted then 'Prepare theory videos' will be logged to the console.
    case 'tuesday': //if day === 'tuesday'
        console.log('Prepare theory videos.');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples.');
        break;
    case 'friday':
        console.log('Record videos.');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day.');
}
console.log(" ");
//if-else equivalent
if (day === 'monday') {
    console.log('Plan course structure.');
    console.log('Go to coding meetup.');
}
else if (day === 'tuesday') console.log('Prepare theory videos.');
else if (day === 'wednesday' || day === 'thursday') console.log('Write code examples.');
else if (day === 'friday') console.log('Record videos.');
else if (day === 'saturday' || day === 'sunday') console.log('Enjoy the weekend :D');
else console.log('Not a valid day.');
*/
//practice questions 10
language = 'english';

// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
//         break;
// }

console.log("14) Statements and Expressions (Just Theory)");
console.log(" ");
//evaluating an expression produces a/some value 
//if-else is a statement 
//switch is a statement
//statements usually perform some actions like declaration
//it doesn't produce a value
//statements can be made up of expressions
//'23 is bigger' is an expression because it evaluates to a value
//const str = '23 is bigger' is a statement (it usually ends with a semicolon, ;)
//js expects statements and expressions in different places 
// for example in template literals, js expects only expressions not statements

console.log("15) The Conditional (Ternary) Operator")
console.log(" ");
/*
//the conditional/ternary operator allows us to write something like an if-else statement in a one-liner
const age = 12;
//conditional/ternary operator has 3 parts which are
//condition ? if part : else part
//age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

//operator such as + will evaluate to a value, making it an expression
//since ternary operator also creates an expression, it can be assigned to a variable as follows
//drink variable will be assigned either wine or water depending on the condition
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

//if-else equivalent
let drink2;
if (age >= 18) drink2 = 'wine 🍷';
else drink2 = 'water 💧';
console.log(drink2);

//earlier we said how in template literals, js expects expressions
//this is how we can plug in an expression created using the ternary operator
//as you know you can't substitute this for an if-else because it is a statement and not an expression
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

//ternary operator has its uses, it is not meant to replace if-else statements
//in most other cases, we tend to use if-else/switch statements over the ternary operator
*/
//practice questions 11 
//console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`);

//Coding Challenge 4 
// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

console.log("16) JavaScript Releases: ES5, ES6+ and ESNext (Just Theory)")
console.log(" ")

console.log("JS Fundamentals P1 End");