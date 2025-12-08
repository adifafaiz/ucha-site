let attempts = 0;

function start() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("questionBox").style.display = "block";

    let music = document.getElementById("bgMusic");
    music.play();
}

function accept() {
    alert("Yeayyy! Makasih Ucha, kamu bikin hari aku seneng banget 💗");

    // confetti
    for (let i = 0; i < 40; i++) {
        createConfetti();
    }
}

function decline() {
    attempts++;

    if (attempts < 3) {
        alert("Yahh jangan gitu dong Ucha 😭 (Percobaan " + attempts + "/3)");
    } else {
        let noBtn = document.getElementById("noBtn");
        noBtn.style.position = "absolute";

        // tombol kabur menjauh
        noBtn.style.left = (Math.random() * 70 + 10) + "%";
        noBtn.style.top = (Math.random() * 70 + 10) + "%";
    }
}

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (Math.random() * 2 + 1) + "s";
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}
