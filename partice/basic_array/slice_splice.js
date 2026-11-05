let arr = [1,5,6,47,8];
let arr2 = arr.slice(1,3);  //slice new array return ker tha hai or starting element index include hota hai per last index include nhi hota hai 

arr.splice(1,3);    //orginal array me change ker tha hai ye starting index or delete count pass hota hai  or us part ko cut ker ke remaing array chor detea hai  or agar coma ker ker ke or argument pass kerege to jo part cut kiya hai us ki place pe wo element calejayege
console.log(arr2);
console.log(arr);


