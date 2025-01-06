//Video no. 005 First Code
console.log("Hello World");
console.log("I love Bangladesh");
console.log("45");
console.log(609.35);
console.log("My Favorite no. : 36");
console.log("My Favorite no. : " + 8);
console.log(9 + 9);
console.log("9" + 9); //string + number = string

//Video no. 006 Variable

var learnerName = "HM Nayem";
var age = 26;

console.log(learnerName + " knows JavaScript");
console.log("His age is only " + age);
console.log(learnerName + " is creating a JavaScript Course for All");
console.log("But his age is only " + age);

//Video no. 007  | JS Reserved Words
var mathNumber = 10;
var accountNumberDetailsId = 104; //camelCase naming convention
var account_number_details_id = 104;

//Video no.008. JS Data Types
//Theory based class. see notion
var hex = 0xfe; //hexadecimal number declaration
var oct = 0o756; // ocatal number declaration
console.log(hex); //to convert equivalent Binary Number.
console.log(oct); //to convert equivalent Binary Number.

//Video no. 009 JS Basic Number
var n = 453;
var f = 3.1416;
var nn = Number("45"); //string to number Conversion
var mm = Number("543.23");
console.log(nn);
console.log(Number.parseFloat(nn)); //integer to float
console.log(Number.parseInt(mm)); //float to integer
console.log(Number.MAX_VALUE); //length of max number
console.log(Number.MIN_VALUE); // length of min number
console.log(1 / 0);
console.log("abc" * 10);

//010. JS Basic Strings
var str = "String";
var str2 = "String";
var str3 = `String`;

var str4 = String("sakib");
var str5 = String(145413543);
var str6 = String(3.1454235);

console.log(str4, str5, str6);

// Video no. 011. JS Basic Booleans
var b1 = true;
var b2 = false;

var b3 = Boolean(true);
var b4 = Boolean(false);

console.log(b3, b4);

//012. JS Null & Undefined

var abc;
var xyz = null;
console.log(xyz);
console.log(abc);

var str = "1000";
var n = 9;

//*********** 013. JS Type Conversion ********
console.log("str = " + str);
console.log("str + n = " + str + n);
console.log(Number(str) + n);
console.log(Number.parseInt(str));
console.log(n.toString());
console.log(Infinity);
console.log(Number(Infinity));
console.log(String(Infinity));

console.log(Boolean(""));
console.log(Boolean("random text."));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(354));

//*********017_Math Function **********
console.log(Math.PI);
console.log(Math.E);
var n = 4.25443;
console.log(Math.abs(n));
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n));
console.log(Math.max(13, 634, 631, 3145, 75));
console.log(Math.min(145, 342, 4654, 13, 46576));
console.log(Math.pow(2, 9));
console.log(Math.sqrt(121));

console.log(Math.round(Math.random() * 50 + 1));

//  ********** 018_Date function ***********
var date = new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleString());

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
