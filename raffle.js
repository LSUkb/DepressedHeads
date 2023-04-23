let menu=document.getElementById("menu");
let exit=document.getElementById("exit");


menu.addEventListener("click",function(){
    document.getElementById("navMenu").style.animationName="navmenu";   
menu.style.marginLeft="-20%";
});

exit.addEventListener("click",function(){
    document.getElementById("navMenu").style.animationName="rnavmenu";
    menu.style.marginLeft="0";
});


let btnD=document.getElementById('btnd');
btnD.addEventListener("click",function(){
    document.getElementById("divd").style.marginTop="0";
    document.getElementById("navMenu").style.animationName="rnavmenu";
  menu.style.marginLeft="0";  
  document.getElementById('promise').style.marginTop="-1000%";
  document.getElementById('arts').style.marginTop="-1000%";
  document.getElementById('dream').style.marginTop="-1000%";
});



let btnH=document.getElementById('btnh');
btnH.addEventListener("click",function(){
    document.getElementById('divd').style.marginTop="-1000%";
  document.getElementById("navMenu").style.animationName="rnavmenu";
  menu.style.marginLeft="0"; 
  document.getElementById('promise').style.marginTop="-1000%"; 
  document.getElementById('arts').style.marginTop="-1000%";
  document.getElementById('dream').style.marginTop="-1000%";
});



let btnP=document.getElementById('btnp');
btnP.addEventListener("click",function(){
  document.getElementById('promise').style.marginTop="0";  
 document.getElementById('divd').style.marginTop="-1000%";
  document.getElementById("navMenu").style.animationName="rnavmenu";
  menu.style.marginLeft="0";
  document.getElementById('arts').style.marginTop="-1000%";
  document.getElementById('dream').style.marginTop="-1000%";
});


let arts=document.getElementById('btna');

arts.addEventListener("click",function(){
    document.getElementById('arts').style.marginTop="10%";
 document.getElementById('divd').style.marginTop="-1000%";
  document.getElementById("navMenu").style.animationName="rnavmenu";
  menu.style.marginLeft="0"; 
  document.getElementById('promise').style.marginTop="-1000%";
  document.getElementById('dream').style.marginTop="-1000%";   
});



let btno=document.getElementById('btno');
btno.addEventListener("click",function(){
   document.getElementById('dream').style.marginTop="0";
 document.getElementById('divd').style.marginTop="-1000%";
  document.getElementById("navMenu").style.animationName="rnavmenu";
  menu.style.marginLeft="0"; 
  document.getElementById('promise').style.marginTop="-1000%"; 
  document.getElementById('arts').style.marginTop="-1000%";  
});
