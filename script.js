// Write your code here
function toggleBulb(bulb){
    console.log(bulb.id)
    if (bulb.id == "lightbulb1"){
        bulbs.forEach(bulb => {
            if (bulb.id != "lightbubl1"){
                bulb.classList.toggle("active")
            }
        })
    }
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

let count = 0;
let subtitle = document.querySelector(".subtitle")

let bulbs = document.querySelectorAll(".lightbulb");
bulbs.forEach(bulb => {
    bulb.addEventListener("click", () => {toggleBulb(bulb)});
    bulb.addEventListener("mouseover", () => {mouseOver(bulb)});
    bulb.addEventListener("mouseout", () => {mouseOut(bulb)});
})