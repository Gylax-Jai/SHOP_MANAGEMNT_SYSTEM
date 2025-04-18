let theme=document.querySelector(".theme");
let a=document.querySelectorAll(".nav a");
let title1=document.querySelectorAll(".header h1");


theme.addEventListener("click",()=>{
  console.log("activated dark mode")
  document.body.classList.toggle("dark-mode");

})

a.forEach((an)=>{
an.addEventListener("click",()=>{
    console.log("activated anchor menu list");
    a.forEach(link => link.classList.remove("atarget"));
    an.classList.toggle("atarget");
  })
});

document.body.addEventListener("contextmenu",(e)=>{
e.preventDefault();
})
