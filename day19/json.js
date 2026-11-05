const obj = {
    name : 'rahul',
    class : 'bca',
    age : 21
};
 //obj to json
const json = JSON.stringify(obj);
console.log(json);


//json to obj
const jsonformate  = `{
    "name" : "rahul",
    "class" : "bca",
    "age" : 21
}`;

const jobj = JSON.parse(jsonformate);
console.log(jobj);