// let arr = [1,2,1.2,"rahul",true];
// arr.push(100);  //insert at end
// arr.pop();  //delete from end
// arr.unshift('raj'); //add from start 
// arr.shift();    //delete form start
// console.log(arr);

//iterate
// let arr = [1,2,3,4,5,'rahul'];
// for(let i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let i of arr){
//     console.log(i );
// }

// let arr = [1,2,3,4,5,'rahul'];
// let arr2 = arr;
// arr2.push(1000);    
// console.log(arr);   //yes it effect arr

// let arr = [1,2,3,4,5,6,7,8,9];
// // console.log(arr.slice(2,5));
// arr2 = arr.splice(1,5,"rahul",'raj');
// console.log(arr2);
// console.log(arr);

// let arr = [1,2,3,4,5];
// let arr2 = [1,2,3,4,5];
// let arr3 = [1,2,3,4,5];
// let arr4 = [arr,arr2,arr3]; //subarray
// let arr5 = [...arr,...arr2,...arr3]; //in one array
// console.log(arr4);
// console.log(arr5);

// let name = ['rahul','raj','suraj'];
// console.log(name.toString());
// console.log(name.join(" "));

// let arr = [5,3,2,10,1];
//  arr.sort()
//  arr.sort((a,b)=>a-b);
//  arr.sort((a,b)=>b-a);
// console.log(arr);

// let arr = [1,2,[4,5,[8,5,6],6],70];
// //want to print 8
// console.log(arr[2][2][0]);
// // let a = arr.flat(); //one level
// let a = arr.flat(Infinity);
// console.log(a);

let arr = [1,2,3,4];
console.log(arr['0']);
arr.name = 'raj';
console.log(arr);