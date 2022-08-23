
function validate(){


var Email=document.getElementById("email").value;
var Password=document.getElementById("password").value;

if(Email==admin&& Password==admin){
window.location.href='index.html';

}
 else{
  alert('incorrect email or password')
 }

}