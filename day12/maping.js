let arr = [10,20,30,40,50];

arr.maping = function(operation){
  for(let i =0 ;i<arr.length;i++){
    arr[i]=operation(arr[i]);
  }
    return arr;
}

let newarr = arr.maping((num)=>num*2);
console.log(newarr);