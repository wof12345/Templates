inputBtn.addEventListener("click", (e) => {
  resetEquation();
  let inputText = input.value;

  tokenizeText(inputText);
  inputView.textContent = inputText;
});

methodSelection.addEventListener("change", () => {
  currentMethod = methodSelection.value;

  if (currentMethod === "Horner's Rule") contextInput.placeholder = "point";
});
