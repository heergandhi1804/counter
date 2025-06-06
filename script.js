// Counter Program

const decre = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const incr = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

incr.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decre.onclick = function(){
    count--;
    countLabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}