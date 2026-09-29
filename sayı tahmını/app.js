let input = document.getElementById("input");
let tahmin = document.getElementById("btnGuess");
let result = document.getElementById("result");

let rnd = Math.floor(Math.random() * 10 + 1);
console.log(rnd);

tahmin.addEventListener("click", () => {
  var txt = input.value;

  if (txt == "") {
    result.innerText = " Lütfen bir değer giriniz.";
  } else if (txt > rnd) {
    result.innerText = "Tahmin küçük";
  } else if (txt < rnd) {
    result.innerText = "Tahmin büyük";
  }
  else{
    result.innerText = "Tebrikler doğru cevap";

  }
});
