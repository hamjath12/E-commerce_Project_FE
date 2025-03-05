var product=document.getElementById("product")
var search=document.getElementById("search")
var div=product.querySelectorAll("div")
console.log(div);


search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value
    for (var i=0;i<div.length;i++){
        if(div[i].textContent.toUpperCase().indexOf(enteredvalue.toUpperCase())<0){
            div[i].style.display="none"

        }else{
            div[i].style.display="block"
        }
    }
})
