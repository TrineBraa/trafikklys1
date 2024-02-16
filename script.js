timer = '';

function makeRed() {
    document.getElementById("redLight").classList.add("activeLight");
    document.getElementById("yellowLight").classList.remove("activeLight")
    document.getElementById("greenLight").classList.remove("activeLight")
    timer = setTimeout(makeYellow, 4000)
}

function makeYellow() {
    document.getElementById("yellowLight").classList.add("activeLight");
    timer = setTimeout(makeGreen, 2000)
}

function makeGreen() {
    document.getElementById("greenLight").classList.add("activeLight");
    document.getElementById("yellowLight").classList.remove("activeLight")
    document.getElementById("redLight").classList.remove("activeLight")
    timer = setTimeout(makeYellow2, 4000)
}

function makeYellow2() {
    document.getElementById("yellowLight").classList.add("activeLight");
    document.getElementById("greenLight").classList.remove("activeLight")
    timer = setTimeout(makeRed, 3000)
}

function startTheLight() {
    makeRed()
}

function reloadTheLight() {
    location.reload()
}

