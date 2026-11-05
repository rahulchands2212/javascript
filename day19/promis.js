const p1 = new Promise((resolve,reject)=>{
    reject('hello');
})

p1.then((response)=>{
    console.log(response);  //resolve
}).catch((error)=>{
    console.log(error);     //reject
})
