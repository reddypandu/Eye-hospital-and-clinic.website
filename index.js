const p=document.getElementById("third-page22");
const b=document.getElementById("btn");

b.addEventListener("click",function(btn){
    if(p.style.display=="none"){
      p.style.display="inline";
    }else{
        p.style.display="none";
    }
})

