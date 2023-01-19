function tokenizeText(text) {
  for (let i = 0; i < text.length; i++) {
    let character = text[i];

    if (isVariable(character)) equation.variableSet.add(character);

    if (isOperator(character)) {
      text = text.slice(0, i) + ">>" + text.slice(i);
      i += 2;
      equation.operatorSet.add(character);
    }
  }

  console.log(text);

  identifyCoefficients(text);

  console.log(equation);
}
