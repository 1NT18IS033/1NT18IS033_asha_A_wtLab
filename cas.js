const b1=document.getElementById("a");
const b2=document.getElementById("b");
const b3=document.getElementById("c");
const b4=document.getElementById("d");
b1.addEventListener("mouseenter",()=>{console.log("Entered blue area!!");});
b2.addEventListener("mouseenter",()=>{console.log("Entered green area!!");});
b3.addEventListener("mouseenter",()=>{console.log("Entered red area!!");});
b4.addEventListener("mouseenter",()=>{console.log("Dead!!!");});