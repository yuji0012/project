
const list = document.querySelector('.menu');
function togglechange(){
  
list.classList.toggle("show");

if (list.classList.contains("show")) {
  

document.querySelector('.nav-1').style.display="flex";
document.querySelector('.nav-2').style.display="flex";
document.querySelector('.nav-3').style.display="flex";
document.querySelector('.nav-4').style.display="flex";



}else{
document.querySelector('.nav-1').style.display="none";
document.querySelector('.nav-2').style.display="none";
document.querySelector('.nav-3').style.display="none";
document.querySelector('.nav-4').style.display="none";


}

}