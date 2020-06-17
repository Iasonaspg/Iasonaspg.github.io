var dis = document.querySelector("body");
var btn = document.getElementById("getstarted");
var typ = document.getElementById("typ");
function animate(){
    typ.className = "typef";
    btn.className = "animated bounceInUp";
    dis.style.display = "block";
}