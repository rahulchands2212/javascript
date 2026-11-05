//array
let arr = [1,5,8,78,"rahul","raj",true,5.26];
console.log(arr);

//object
let personal_data = {
    name : "rahul",
    age : 20,
    occupation : "student"
}
console.log(personal_data.name);
console.log(personal_data);

//function

//method 1
function msg(){
    console.log("hello world !");
}
msg();

//method 2 store function inside variable
let a = function method2(){
    console.log("method 2 with variable");
    return 5;
}
a(); //method 2 with  variabel
console.log(a);  // output function : method2  it tell what is inside at variable
console.log(a());   // it print the return value if not return anything this show undefine 