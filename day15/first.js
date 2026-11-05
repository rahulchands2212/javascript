// function clickme(){
//     const s1 = document.getElementById("first");
//     s1.textContent="MY NAME IS RAHUL CHAND";

// }

// const s12 = document.getElementById("first");
// s12.onclick = function (){
//     this.textContent = "my name is rahul chand";
// }

// const s12 = document.getElementById("first");
// s12.addEventListener("click",()=>{
//     s12.textContent = "my name is rahul chand";
// })



// s12.addEventListener("dblclick",()=>{
//    s12.style.background = 'brown'
// })

// const parent = document.getElementById("parent");
// console.log(parent.children);
// parent.addEventListener('click',(e)=>{
//   e.target.textContent = "i am clicked";
// });

// for(let child of parent.children){
//     child.addEventListener("click",()=>{
//         child.textContent = "i am clicked";
//         child.style.background = "green";
//     })
// }

const parent = document.getElementById("parent");
function clickme(e){
  e.target.textContent = "i am clicked";
  parent.removeEventListener('click',clickme);
}

parent.addEventListener('click',clickme);


