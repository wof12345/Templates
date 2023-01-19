let input = document.querySelector(`#equation-input`);
let inputBtn = document.querySelector(`.equation-input_btn`);
let inputView = document.querySelector(`.equation-view`);

let equation = {
  variableSet: new Set(),
  operatorArray: [],
  operatorSet: new Set(),
  coefficientObjString: {},
  exponentObj: {},
};
