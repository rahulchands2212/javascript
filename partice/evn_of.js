let arr = [1,2,3,4,5,6,7,8,34];
let even=0,odd=0;
for(let i of arr){
    if(i%2==0){
        even++;
    }else{
        odd++;
    }
}

console.log("even :",even);
console.log("odd :",odd);