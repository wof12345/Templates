let dataInp = document.querySelector(`#d`);
let userInput = "kila";
dataInp.value = userInput;

dataInp.addEventListener("input", (e) => {
  userInput = dataInp.value;
  console.log(userInput);
});
