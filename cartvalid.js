"use strict";
function fillform(){  
var firstpassword=document.f1.password.value;  
var secondpassword=document.f1.password2.value;  
  
if(firstpassword>0){  
return true;  
}  
else{  
alert("Please fill out all boxes.");  
return false;  
}  
}  
