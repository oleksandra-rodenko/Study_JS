// number &  bigint

let n = 123; // number
n = 12.345; // number
let number = 1234567890123456789012345678901234567890; // number 1.2345678901234568e+39 (bigger than 9007199254740991)
let bigint = 1234567890123456789012345678901234567890n; // n in the end  of the string to use bigint 1234567890123456789012345678901234567890

let infin = 1 / 0; // = Infinity
let infin2 = Infinity; // = Infinity

let notNumber = "не число" / 2 // NaN
let isNumber = "23" / 2        // 11.5
let notNumber2 = "23aa" / 2    // NaN

// string

let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

// boolean

let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено
let isGreater = 4 > 1;       // true (результатом сравнения будет "да")

// null

let age = null;

// undefined

let age2;  //alert(age2); выведет "undefined"

// object

// symbol

// function

// END

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2) --> its a mistake! but they use it(

typeof alert; // "function"  (3)

let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya