// let student = {
//     name: "rahul",
//     class : "bca",
//     sem : "3rd",
//     collage : "kitm",
//     "last name" : "chand"
// }
// student.gender = "male";    //insert
// student.sem = "2nd";    //update
// delete student.gender;

// let user = student;
// user.name = "raj";
// console.log(student);//access obj
// console.log(student.name);  //acces by key
// console.log(student["last name"]);

// let student = {
//     name: "rahul",
//     class : "bca",
//     sem : "3rd",
//     collage : "kitm",
//     "last name" : "chand"
// }

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// let student = {
//     name: "rahul",
//     class : "bca",
//     sem : "3rd",
//     collage : "kitm",
//     "last name" : "chand"
// }

// for(let keys in student){
//     console.log(keys ,": ",student[keys]);
// }

//destructing
// let student = {
//     name: "rahul",
//     clas : "bca",
//     sem : "3rd",
//     collage : "kitm",
//     "last name" : "chand"
// }

// const {name:first_name,clas,sem,collage} = student;    //aslis create
// console.log(first_name,clas,sem,collage);

// let arr = [1,2,3,4,5];
// const [one,two]=arr;
// console.log(one,two);


//for of loop
// let student = {
//     name: "rahul",
//     class : "bca",
//     sem : "3rd",
//     collage : "kitm",
//     "last name" : "chand"
// }

// for(let keys of Object.entries(student)){
//     console.log(keys);
// }

// let student = {
//     name: "rahul",
//     class : "bca",
//     sem : "3rd",
//     collage : "kitm",
//     "last name" : "chand"
// }

// const arr = Object.entries(student);
// const arr1 = arr.flat();
// console.log(arr1.join("\\"));

// let student = {
//     name: "rahul",
//     class : "bca",
//     sem : "3rd",
//     collage : "kitm",
//     "last name" : "chand",
//     fun : function (){
//         console.log(`hello bro ${this.name}`);
//         return 21;
//     }
// }

// const va=student.fun();
// console.log(va);

//nested object
// let student = {
//     name: "rahul",
//     class : "bca",
//     sem : "3rd",
//     collage : "kitm",
//     address :{
//         village:"naugawanath",
//         city: "khitma",
//         distict : "udham singh nagar",
//         state : "uttrakhand"
//     }
// }

// console.log(student);
// console.log(student.address.city);
// console.log(Object.values(student));

//create sallow copy
let student = {
    name: "rahul",
    class : "bca",
    sem : "3rd",
    collage : "kitm",
        address :{
        village:"naugawanath",
        city: "khitma",
        distict : "udham singh nagar",
        state : "uttrakhand"
    }
}

let obj = {...student}; //spred operator
let obj2 = structuredClone(student)//deep copy
obj.name = "raj";
obj2.address.city='sdfksdhf';


console.log(student);
// console.log(obj);
