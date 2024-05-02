// Write your code here
function toggleBulb(event){
    let bulb = event.target;
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

function mouseOver(event){
    let bulb = event.target;
    if (!bulb.classList.contains("active")){
        bulb.classList.add("active")
    }
}

function mouseOut(event){
    let bulb = event.target;
    if (bulb.classList.contains("active")){
        bulb.classList.remove("active")
    }
}

let count = 0;
let subtitle = document.querySelector(".subtitle")

let bulbs = document.querySelectorAll(".lightbulb");
bulbs.forEach(bulb => {
    bulb.addEventListener("click", toggleBulb);
    bulb.addEventListener("mouseover", mouseOver);
    bulb.addEventListener("mouseout", mouseOut);
})