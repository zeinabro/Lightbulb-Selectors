// Write your code here
function toggleBulb(bulb){
    bulb.classList.toggle("active");
    count++;
    subtitle.innerHTML = `You've clicked the lights ${count} time${count>1 ? "s":""}`;
}

let bulb1 = document.querySelector("#lightbulb1");
let bulb2 = document.querySelector("#lightbulb2");
let bulb3 = document.querySelector("#lightbulb3");
let count = 0;
let subtitle = document.querySelector(".subtitle")

bulb1.addEventListener("click", () => {toggleBulb(bulb1)});
bulb2.addEventListener("click", () => {toggleBulb(bulb2)});
bulb3.addEventListener("click", () => {toggleBulb(bulb3)});