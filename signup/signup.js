let registerbtn=document.querySelector(".loginregister");

registerbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("i am clicked");
    window.location.href="../login/login.html";
})