const julekule = document.querySelector("#julekule")
const paragraf = document.querySelector(".hidden")

function click () {
    const state = paragraf.style.display
    if (state === "block") {
        paragraf.style.display = "none"
    } else {
        paragraf.style.display = "block"
    }
}

julekule.addEventListener("click", click)