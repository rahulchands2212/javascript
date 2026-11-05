const obj = {
    name : "rahul",
    age : 20,
    msg : function(){
        console.log("hello ");
    }
};

const obj2 ={
    account : 9000
}

obj2.__proto__ = obj;
console.log(obj2.name);
console.log(obj2.hasOwnProperty('name'));