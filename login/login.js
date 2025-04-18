let registerbtn=document.querySelector(".register");

registerbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("i am clicked");
    window.location.href="../signup/signup.html";
})