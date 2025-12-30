
let open=false;
document.addEventListener("DOMContentLoaded",()=>{
 const btn=document.getElementById("menuBtn");
 const menu=document.getElementById("menu");
 if(btn&&menu){
  btn.onclick=()=>{
   menu.style.left=open?"-260px":"0";
   open=!open;
  }
 }
});
