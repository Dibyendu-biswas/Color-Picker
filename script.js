const color =document.getElementById("colorPick")
const hex =document.getElementById("hex-box")

color.addEventListener("input",()=>{
    hex.value = color.value
    document.body.style.backgroundColor = color.value
})