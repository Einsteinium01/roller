const button1 = document.getElementById("button");
const label = document.getElementById("label1");
const min = 1;
const max = 6;

let random;

button1.onclick = function(){
    random = Math.floor(Math.random()*max)+min;
    label.textContent = random;
}
