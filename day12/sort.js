let arr = [100,200,30,40,50,60,70,80,90];

arr.sorting = function(compare){
    for(let i=0;i<this.length-1;i++){
        for(let j=0;j<this.length-1-i;j++)
        if(compare(this[j],this[j+1])>0){
            [this[j],this[j+1]]=[this[j+1],this[j]];
        }
    }
    return arr;

}

arr.sorting((a,b)=>a-b);
console.log(arr);