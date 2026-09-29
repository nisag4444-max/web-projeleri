let ac = document.getElementById("open");
let kapa = document.getElementById("close");
let img = document.getElementById("img");

ac.addEventListener("click", () => {
  img.src = "lambacık.jpeg";
});
kapa.addEventListener("click", () => {
  img.src = "lambakapalı.jpeg";
});
