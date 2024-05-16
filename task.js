let product1=document.getElementById('product1')
product1=500;

let product2=document.getElementById('product2')
product2=2000;

let product3=document.getElementById('product3')
product3=5000;

let product4=document.getElementById('product4')
product4=6000;

let product5=document.getElementById('product5')
product5=3500;

let br="<br>";
let namee=document.getElementById('namee')
let text=document.getElementById('text')
let text2=document.getElementById('text2')
let text3=document.getElementById('text3')
let text4=document.getElementById('text4')
let text5=document.getElementById('text5')
let out=document.getElementById('out')
let btn1=document.getElementById('btn1')
let btn2=document.getElementById('btn2')
let btn3=document.getElementById('btn3')
let btn4=document.getElementById('btn4')
let btn5=document.getElementById('btn5')
let container=document.getElementById('container')
let total=document.getElementById('total')
let allProduct=0

container.style.fontSize="30px"


btn1.onclick=function(){
    allProduct=allProduct+product1
    
  


    namee.innerHTML +=text.textContent+"    "+ product1+"$"+"<br>"
   
    
    
}



btn2.onclick=function(){
    allProduct=allProduct+product2
   
    
    namee.innerHTML +=text2.textContent+"    "+ product2+"$"+"<br>"

}




btn3.onclick=function(){
    allProduct=allProduct+product3
   
    
    namee.innerHTML +=text3.textContent+"    "+ product3+"$"+"<br>"
}





btn4.onclick=function(){
    allProduct=allProduct+product4
    
    
    namee.innerHTML +=text4.textContent+"    "+ product5+"$"+"<br>"
}


total.onclick=function(){
    out.value=allProduct+"$"
    
}


