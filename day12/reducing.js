let arr = [1,20,3,40,50,80,90,100];

arr.reducing = function(fun,stvalue){
    let sum = stvalue;
    for(let num of arr){
        sum = fun(sum,num);
    }
    return sum;
}


let newarr = arr.reducing((accumalator,currentvalue)=>{
    return accumalator+currentvalue;
},0)

console.log(newarr);