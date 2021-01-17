/*
*   Author: Brian Klein
*   Project: Udemy Course work for 'The Complete JavaScript Course 2020'
*   Start Date: July 13, 2020
*/

/*******************************
* Variables and Data Types
*/
/*
var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';
var age = 20;
var fullAge = true;
console.log(fullAge);
var job;
console.log(job);

job = 'teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/

/*******************************
* Variables mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' is ' + age);

var job, isMarried;

job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + 
job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + 
job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*******************************
* Basic operators
*/
/*
var now, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - 28;;
yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'johnOlder');
var x;
console.log(typeof x);
*/

/*******************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark =35;
var average= (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
// x = x * 2;
x *= 2;
console.log(x); // 52
// x = x + 10;
// or
x += 10;
console.log(x); // 62
// x = x + 1;
// or
// x += 1;
// or
x++;
console.log(x); // 63
// x = x - 1;
// or
// x -= 1;
// or
x--;
console.log(x); // 62
*/

/*******************************
* CODING CHALLENGE 1
*/
/*
var johnHeight, johnMass, markHeight, markMass, johnBMI, markBMI, isMarkBigger;

johnHeight = 1.95; //meters
johnMass = 92; //kilograms

markHeight = 1.69; //meters
markMass = 78 //kilograms

johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * markHeight);
console.log(johnBMI, markBMI);

isMarkBigger = markBMI > johnBMI;
console.log('Is Mark\'s BMI greater than John\'s? ' + isMarkBigger);
*/

/*******************************
* If / Else Statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var johnHeight, johnMass, markHeight, markMass, johnBMI, markBMI, isMarkBigger;

johnHeight = 1.95; //meters
johnMass = 92; //kilograms

markHeight = 1.69; //meters
markMass = 78 //kilograms

johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * markHeight);

console.log(johnBMI, markBMI);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is greater than John\'s!');
} else {
    console.log('John\'s BMI is greater than Mark\'s!');
}
*/

/*******************************
* Boolean Logic
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*******************************
* Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 31;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >=18) {
    drink = 'beer';
} else {
    drink = 'juice';
}*/
/*
// Switch Statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives uber.');
        break;
    case 'designer':
        console.log(firstName + ' designes beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/*******************************
* Truthy and Falsey Values and Equality Operators
*/
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23; 

if (height || height === 0) {
    console.log('The variable is defined.');
} else {
    console.log('The variable is undefined.');
}

//Equality Operators

if (height == '23') {
    console.log('The == operator does type coercion!');
}
*/

/*******************************
* CODING CHALLENGE 2
*/
/*
var johnAverage, mikeAverage, maryAverage;

johnAverage = (89 + 120 + 103) / 3;
mikeAverage = (116 + 94 + 123) / 3;
maryAverage = (97 + 134 + 105) / 3;

console.log('John\'s team average: ' + johnAverage);
console.log('Mike\'s team average: ' + mikeAverage);
console.log('Mary\'s team average: ' + maryAverage);


switch (true) {
    // John's team wins
    case johnAverage > mikeAverage && johnAverage > maryAverage:
        console.log('John\'s team wins with an average of ' + johnAverage);
        break;
    //Mike's team wins
    case mikeAverage > johnAverage && mikeAverage > maryAverage:
        console.log('Mike\'s team wins with an average of ' + mikeAverage);
        break;
    // Mary's team wins
    case maryAverage > mikeAverage && maryAverage > johnAverage:
        console.log('Mary\'s team wins with an average of ' + maryAverage);
        break;
    // John's and Mike's teams tie
    case johnAverage === mikeAverage && johnAverage > maryAverage:
        console.log('John\'s and Mike\'s teams tie with an average of ' + johnAverage);
        break;
    // John's and Mary's teams tie
    case johnAverage === maryAverage && johnAverage > mikeAverage:
        console.log('John\'s and Mary\'s teams tie with an average of ' + johnAverage);
        break;
    // Mike's and Mary's teams tie
    case mikeAverage === maryAverage && mikeAverage > johnAverage:
        console.log('Mike\'s and Mary\'s teams tie with an average of ' + mikeAverage);
        break;
}
*/

/*******************************
* Functions
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0) {
        console.log(firstName +' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearUntilRetirement(1990, 'John');
yearUntilRetirement(1948, 'Mike');
yearUntilRetirement(1969, 'Jane');
*/

/*******************************
* Function Statements and Expressions
*/
/*
// Function Declaration
// function(job, firstName){}

//Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab.';
        case 'designer':
            return firstName + ' designes beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mike'));
*/

/*******************************
* Arrays
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
console.log(names[1]);
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);

john.pop();
console.log(john);

john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer.' : 'John is a designer';
console.log(isDesigner);
*/

/*******************************
* CODING CHALLENGE 3
*/
/*
function tipCalculator(bill) {
    var tipPercentage;

    if (bill < 50) {
        tipPercentage = 0.2;
    } else if (bill >= 50 && bill <= 200 ) {
        tipPercentage = 0.15;
    } else {
        tipPercentage = 0.1;
    }
    return bill * tipPercentage;
}
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
var totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(totals);
*/

/*******************************
* Objects and Properties
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john.isMarried = true;
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*******************************
* Objects and Methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/*******************************
* CODING CHALLENGE 4
*/
/*
var mark = {
    firstName: 'Mark',
    lastName: 'Hoffman',
    height: 1.69,
    mass: 78,
    getFullName: function() {
        this.fullName = this.firstName + ' ' + this.lastName;
        return this.fullName;
    },
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var john = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.69,
    mass: 78,
    getFullName: function() {
        this.fullName = this.firstName + ' ' + this.lastName;
        return this.fullName;
    },
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

function greaterBMI(firstPerson, secondPerson) {
    firstPerson.getFullName();
    secondPerson.getFullName();
    if (firstPerson.calcBmi() > secondPerson.calcBmi()) {
        console.log(firstPerson.fullName + '\'s BMI (' + firstPerson.bmi + 
        ') is greater than ' + secondPerson.fullName + '\'s BMI (' + 
        secondPerson.bmi + ').');
    } else if (firstPerson.calcBmi() < secondPerson.calcBmi()) {
        console.log(secondPerson.fullName + '\'s BMI (' + secondPerson.bmi + 
        ') is greater than ' + firstPerson.fullName + '\'s BMI (' + firstPerson.bmi + 
        ').');
    } else {
        console.log(secondPerson.fullName + '\'s BMI (' + secondPerson.bmi + 
        ') is the same as ' + firstPerson.fullName + '\'s BMI (' + firstPerson.bmi + 
        ').');
    }
}

greaterBMI(mark, john);
*/

/*******************************
* Loops and Iteration
*/
/*
for(var i = 1; i <= 20; i+=2) {
    console.log(i);
}
 /*
var john = ['John', 'Smith', 1990, 'designer', false];
// for loop
for(var i=0; i< john.length; i++) {
    console.log(john[i]);
}

// while loop with same functionality
var i=0;
while (i<john.length) {
    console.log(john[i]);
    i++;
}
*/
/*
//continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false];
// for loop skips elements of the array that are not strings
for(var i=0; i< john.length; i++) {
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
// for loop stops when it encounters a non string in the array
for(var i=0; i< john.length; i++) {
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}


//for loop go through array backwards
var john = ['John', 'Smith', 1990, 'designer', false];
// for loop skips elements of the array that are not strings
for(var i=john.length-1; i>= 0; i--) {
    console.log(john[i]);
}
*/

/*******************************
* CODING CHALLENGE 5
*/

var johnFamily = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calcTips: function() {
        for(var i = 0; i< this.bills.length; i++) {
            var tipPercentage;
            var tipActual;
            var total;
            var bill = this.bills[i];

            if (bill < 50) {
                tipPercentage = 0.2;
            } else if (bill >= 50 && bill <= 200 ) {
                tipPercentage = 0.15;
            } else {
                tipPercentage = 0.1;
            }
            tipActual = bill * tipPercentage;
            total = bill + tipActual;
            this.tips.push(tipActual);
            this.totals.push(total);
        }// end for
    }// end calcTips
}// end johnFamily

var markFamily = {
    bills: [77, 375, 110, 45],
    tips: [],
    totals: [],
    calcTips: function() {
        for(var i = 0; i< this.bills.length; i++) {
            var tipPercentage;
            var tipActual;
            var total;
            var bill = this.bills[i];

            if (bill < 100) {
                tipPercentage = 0.2;
            } else if (bill >= 100 && bill <= 300 ) {
                tipPercentage = 0.1;
            } else {
                tipPercentage = 0.25;
            }
            tipActual = bill * tipPercentage;
            total = bill + tipActual;
            this.tips.push(tipActual);
            this.totals.push(total);
        }// end for
    }// end calcTips
}// end markFamily

function findAverageTip(tips1, tips2) {
    var totalTips1 = 0;
    var average1 = 0;
    for(var i=0; i<tips1.length; i++) {
        totalTips1 += tips1[i];
    }
    average1 = totalTips1 / tips1.length;

    var totalTips2 = 0;
    var average2 = 0;
    for(var i=0; i<tips2.length; i++) {
        totalTips2 += tips2[i];
    }
    average2 = totalTips2 / tips2.length;

    if (average1 > average2) {
        console.log('John\'s family tips better on average. ($' + average1 + ')');
    } else if (average1 < average2){
        console.log('Mark\'s family tips better on average. ($' + average2 + ')');
    } else {
        console.log('The families tip the same on average.');
    }
}

johnFamily.calcTips();
markFamily.calcTips();
console.log('John\'s Family Tips: ' + johnFamily.tips);
console.log('John\'s Family Totals: ' + johnFamily.totals);
console.log('Mark\'s Family Tips: ' + markFamily.tips);
console.log('Mark\'s Family Totals: ' + markFamily.totals);

findAverageTip(johnFamily.tips, markFamily.tips);


