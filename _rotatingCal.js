var box = document.getElementById("talipapa");
var yes = document.getElementById("yes");
var no = document.getElementById("no");

yes.onclick = function(){
    box.style.backgroundColor = "red";
}

no.onclick = function(){
    box.style.backgroundColor = "green";
}