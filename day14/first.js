//create element 
const s1 = document.createElement("h2");
s1.textContent = "hello my name is rahul chand . i am a bca student ";
s1.id = "student";
s1.style.backgroundColor = "orange";
s1.style.fontSize = "40px";

//select existing element
const s2 = document.getElementById("name");
s2.after(s1);

//create h3 
const s3 = document.createElement("h3");
s3.textContent = "i complete by 12th form uk board";
s3.style.backgroundColor = "green";


//select
const s4 = document.getElementById("student");
s4.after(s3);

//list 

// const L1 = document.createElement("li");
// L1.textContent = "milk";

// const L2 = document.createElement("li");
// L2.textContent = "apple";

// const L3 = document.createElement("li");
// L3.textContent = "jackfruit";

// const L4 = document.createElement("li");
// L4.textContent = "watermelon";

// const sobj = document.getElementById("listing");
// sobj.append(L1,L2);//last
// sobj.prepend(L3);//phele
// // L1.after(L4);
// sobj.children[1].after(L4);

const sobj = document.getElementById("listing");
const arr = ["apple","mango","milk"];
const fragement  = document.createDocumentFragment();
for(let iteam of arr){
    const l1 = document.createElement("li");
    l1.textContent = iteam;
    fragement.append(l1);
}

sobj.append(fragement);

const para = document.createElement("p");
para.textContent = `The desert wind blew the tumbleweed in front of the car. Alex swerved to avoid the tumbleweed, but he turned the wheel a bit too strong and the car left the road and skidded onto the dirt median. He instantly slammed on the brakes and the car stopped in a cloud of dirt. When the dust cloud had settled and he could see around him again, he realized that he'd somehow crossed over into an entirely new dimension.
It had been a late night. To be more correct, it had been an early morning. It was now 3:00 AM and George was just getting home. He wasn't sure if it had been worth it. He was supposed to have been finished by 10:00 PM, but his boss had implored him to stay and help when it was clear they weren't going to meet the 10:00 PM target time. So, he had stayed an extra 5 hours and lost a good night's sleep for something he didn't really believe in, but he did anyway because he was afraid if he refused he might lose his job.`;

sobj.after(para);