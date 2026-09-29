let addBtn = document.getElementById("addButton");
let inputList = document.getElementById("inputList");
let todoContainer = document.getElementById("todoContainer");

addBtn.addEventListener("click", () => {
  var list = document.createElement("li");
  list.innerHTML = inputList.value;
  todoContainer.appendChild(list);
});
