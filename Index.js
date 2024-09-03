const btn = document.getElementById("Btn");
let isActive = true;
function Btn(){
  if(isActive){
    btn.textContent = "Hello World! 😭😭😭😭";
    isActive = false;
  }
  else{
    btn.textContent = "BẤM VÀO BẠN ĐI NÀO 😘";
    isActive = true;
  }
}