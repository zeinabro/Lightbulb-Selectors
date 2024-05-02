// Write your code here
function toggleBulb(bulb){
    bulb.classList.toggle("active");
    count++;
    subtitle.innerHTML = `You've clicked the lights ${count} time${count>1 ? "s":""}`;
}

function mouseOver(bulb){
    if (!bulb.classList.contains("active")){
        bulb.classList.add("active")
    }
}

function mouseOut(bulb){
    if (bulb.classList.contains("active")){
        bulb.classList.remove("active")
    }
}

let bulb1 = document.querySelector("#lightbulb1");
let bulb2 = document.querySelector("#lightbulb2");
let bulb3 = document.querySelector("#lightbulb3");
let count = 0;
let subtitle = document.querySelector(".subtitle")

bulb1.addEventListener("click", () => {toggleBulb(bulb1)});
bulb2.addEventListener("click", () => {toggleBulb(bulb2)});
bulb3.addEventListener("click", () => {toggleBulb(bulb3)});

bulb1.addEventListener("mouseover", () => {mouseOver(bulb1)});
bulb2.addEventListener("mouseover", () => {mouseOver(bulb2)});
bulb3.addEventListener("mouseover", () => {mouseOver(bulb3)});

bulb1.addEventListener("mouseout", () => {mouseOut(bulb1)});
bulb2.addEventListener("mouseout", () => {mouseOut(bulb2)});
bulb3.addEventListener("mouseout", () => {mouseOut(bulb3)});