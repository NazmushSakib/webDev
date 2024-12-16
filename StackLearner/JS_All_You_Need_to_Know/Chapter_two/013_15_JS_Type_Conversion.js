var str = "1000";
var n = 9;

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

//****** 015 Operator *****

var a = 12;
var b = 45;

console.log(a++);
console.log(a);

console.log(b);
console.log(++b);
console.log(b);
console.log(--b);

var a = 34;
var b = 45;

a += b; // a = a+b
console.log(a); // a = a-b ;
a -= b;
console.log(a); // a = a-b
a *= b;
console.log(a); // a = a*b
a /= b;
console.log(a); // a = a/b
