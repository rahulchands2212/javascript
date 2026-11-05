let arr = [10,20,30,40,50,60,70,80,90];

arr.filtering = function(compare){
       let ans=[];
    for(let i of this){
        if(compare(i)){
            ans.push(i);
        }
    }
    return ans;
}

const newans  = arr.filtering((num)=>num>30);
/*comapare = (num)=>{
    return num>30;
}*/
console.log(newans);