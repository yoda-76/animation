const element=document.querySelector("#events");
var c=20;
element.addEventListener('click',()=>{
    c+=20;
    element.style.background=`hsl(${c},100%,50%)`;
})