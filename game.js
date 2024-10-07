window.onload = pageLoad;

function pageLoad() {
    document.getElementById("start").onclick = startGame;
}

function startGame() {
    clearScreen();
    alert("Ready to play!");
    addBox();
    timeStart();
}

function timeStart() {
    let seconds = 995;
    document.getElementById('clock').textContent = seconds;
    const timer = setInterval(() => {
        seconds--;
        document.getElementById('clock').textContent = seconds;
        if (document.querySelectorAll("#layer div").length === 0 && seconds > 0) {
            clearInterval(timer);
            alert("You win!");
        } else if (seconds <= 0) {
            clearInterval(timer);
            alert("Game over!");
            clearScreen();
        }
    }, 1000);
}

function addBox() {
    var numbox = document.getElementById("numbox").value;
    var gameLayer = document.getElementById("layer");
    var colorDrop = document.getElementById("color").value;

    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement("div");
        tempbox.className = "square" + " " + colorDrop ;
        tempbox.id = "box" + i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box) {
    box.onclick = function () {
        box.parentNode.removeChild(box);
    }
}

function clearScreen() {
    document.getElementById("layer").innerHTML = "";
}
