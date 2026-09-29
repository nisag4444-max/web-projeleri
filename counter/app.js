let plus = document.getElementById("plus");
let reset = document.getElementById("reset");
let minus = document.getElementById("minus");


let result = document.getElementById("result"); 

let score = 0;

plus.addEventListener("click", () => {
  score++;
  result.innerHTML = score;
  
  if (score > 0) {
    result.style.color = "lightgreen"; 
  } else if (score === 0) {
    result.style.color = "antiquewhite"; 
  }
});

minus.addEventListener("click", () => {
  score--;
  result.innerHTML = score;
  
  if (score < 0) {
    result.style.color = "tomato"; 
  } else if (score === 0) {
    result.style.color = "antiquewhite";
  }
});

reset.addEventListener("click", () => {
  score = 0;
  result.innerHTML = score;
  result.style.color = "antiquewhite";
});