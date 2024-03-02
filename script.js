let form=document.querySelector("form");
form.addEventListener("submit",function(event){
event.preventDefault();
let namevalue=document.querySelector("#name").value;
let emailvalue=document.querySelector("#email").value;
let messagevalue=document.querySelector("#message").value;
if (!namevalue || !emailvalue || !messagevalue){
    alert("Please enter name, email, and message.");
}else{
    alert("Thank you for submitting the form. ")
}
})