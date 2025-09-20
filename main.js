const bar = document.getElementById("bar")
const nav = document.getElementById("nav-bar")
const cancel= document.getElementById("close")
const mainImg = document.getElementById("mainImg");
const smallImg=document.getElementsByClassName("small-img")

// when  click on bar make style to nav bar

// in that case the condition is true and  block of code to be executed if the condition is true  but not change  
if(bar){
    bar.addEventListener("click",()=>{
         nav.classList.add("active")
    })
}
  cancel.addEventListener("click",()=>{
          nav.classList.remove("active")
  }) 




      smallImg[0].onclick = function(){
        mainImg.src=  smallImg[0].src;
      }
      smallImg[1].onclick = function(){
        mainImg.src=  smallImg[1].src;
      }
      smallImg[2].onclick = function(){
        mainImg.src=  smallImg[2].src;
      }
      smallImg[3].onclick = function(){
        mainImg.src=  smallImg[3].src;
      }