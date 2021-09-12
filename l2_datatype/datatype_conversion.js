// STRING

let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string

// NUMBER

alert( "6" / "2" ); // 3, строки преобразуются в числа

let str = "123";
alert(typeof str); // string
let num = Number(str); // становится числом 123
alert(typeof num); // number

let age = Number("Любая строка вместо числа");
alert(age); // NaN, преобразование не удалось

let age2 = Number("222числа223");
alert(age2); // NaN, преобразование не удалось

let age3 = Number(false);
alert(age3); // 0

let age4;
alert(Number(age4)); // NaN

alert( Number("   123   ") ); // 123

// LOGIC

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // пробел это тоже true (любая непустая строка это true)


