console.log("hello start the work");

// const p1 = fetch("https://api.github.com/users"); //request send p1 insilised pending

// //fullfild reject
// //p1 jo return kerega wo p2 ke andar dal do . p1 ke andar jo be data aya hai wo response ke andar dal do
// const p2 = p1.then((response) => {
//   return response.json();
// });

// p2.then((data)=>{
//     console.log(data);
// })

//promise chaning short method;
fetch("https://api.github.com/users")
  .then((response) => {
    if(!response.ok){
        throw new Error('data is not present in server');
    }
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < 30; i++) {
      const parent = document.getElementById("first");
      const image = document.createElement("img");
      image.src = data[i].avatar_url;
      image.style.height = "40px";
      image.style.width = "40px";
      parent.append(image);
    }
  })
  .catch((error)=>{
      const parent = document.getElementById("first");
      parent.textContent = error.message;

  })

console.log("end the work");
