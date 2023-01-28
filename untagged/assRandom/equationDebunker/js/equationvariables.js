let input = document.querySelector(`#equation-input`);
let inputBtn = document.querySelector(`.equation-input_btn`);
let inputView = document.querySelector(`.equation-view`);
let methodSelection = document.querySelector(`#solution`);
let resultView = document.querySelector(`.user-result`);
let contextInput = document.querySelector(`#context-input`);

let currentMethod = "Horner's Rule";

let resultFormat = function (result) {
  return `<result>${result}</result>`;
};

let equation = {
  variableSet: new Set(),
  operatorArray: [],
  operatorSet: new Set(),
  coefficientObj: {},
  exponentObj: new PriorityQueue(),
};
