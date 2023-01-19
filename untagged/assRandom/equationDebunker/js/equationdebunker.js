inputBtn.addEventListener("click", (e) => {
  resetEquation();
  let inputText = input.value;

  tokenizeText(inputText);
  inputView.textContent = inputText;
});
