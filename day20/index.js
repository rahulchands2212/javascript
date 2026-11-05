async function greet(){
//    return 'rahul chand'      //is async function promise me wrap ker ke return kerega same lek neche hai 

return new Promise((resolve,reject)=>{
    resolve('rahul chand');
})

}

const response = greet();
// console.log(response);  //async function return promise

response.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log('error : ',error);
})