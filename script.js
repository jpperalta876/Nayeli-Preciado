const siBtn = document.getElementById("siBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("gifContainerImg");
const question = document.getElementById("question");
const message = document.getElementById("messageContainer");
const foto = document.getElementById("fotoFinal");

let noCount = 0;

const sadGifs = [
    "https://encoded.pe/codepen/mocha2.gif",
    "https://encoded.pe/codepen/mocha3.gif",
    "https://encoded.pe/codepen/mocha4.gif"
];

const happyGifs = [
    "https://encoded.pe/codepen/mocha6final.gif",
    "https://encoded.pe/codepen/mocha7final.gif",
    "https://encoded.pe/codepen/mocha9final.gif"
];

noBtn.addEventListener("click", () => {
    noCount++;
    gif.src = sadGifs[noCount % sadGifs.length];
    siBtn.style.transform = `scale(${1 + noCount * 0.15})`;
});

siBtn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * happyGifs.length);
    gif.src = happyGifs[random];
    question.style.display = "none";
    document.querySelector(".buttons").style.display = "none";
    message.innerHTML = "Sabía que dirías que sí 🥹❤️ Te quiero muchísimo Nayeli 💖";
    foto.style.display = "block";
});
