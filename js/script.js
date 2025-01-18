const singInBtn=document.querySelector("#sing_in-btn");
const singUpBtn=document.querySelector("#sing_up-btn");
const container=document.querySelector("#container");

//add event
singUpBtn.addEventListener('click',()=>{
    container.classList.add("sing_up-mode")
});
singInBtn.addEventListener('click',()=>{
    container.classList.remove("sing_up-mode")
});
