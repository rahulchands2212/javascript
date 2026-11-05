//number 
let num = 5;
console.log("number :",num);
console.log("type :",typeof num);

//string
let name = "rahul";
console.log("name :",name);
console.log("type : ",typeof name);

//boolean
let login = true;
console.log("login :",login);
console.log("type :",typeof login);

//undefine
let num4;
console.log("num4 :",num4);
console.log("type :",typeof num4);

//null
let num5 = null;
console.log("num5 :",num5);
console.log("type :",typeof num5);  //bug show object

//bigint
let num6 = 1564895795252344646546464646546428n;
console.log("num6 :",num6);
console.log("type :",typeof num6);

//symbol
let num7 = Symbol("id");
let num8 = Symbol("id");
console.log("num7 :",num7);
console.log("type :",typeof num7);
console.log("compare :",num7==num8);