const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',()=>{
    
    console.log("grandparent is clicked");
});

const parent = document.getElementById("parent");
parent.addEventListener('click',()=>{
    console.log("parent is clicked");
});


const child = document.getElementById("child");
child.addEventListener('click',(e)=>{
    console.log(e.target);
    console.log("child is clicked");
});