let arr = [12,45,69,85,65];
const sum = arr.reduce((accumaltor,currentvalue)=>{
    return accumaltor+currentvalue;
},0);

console.log(sum);