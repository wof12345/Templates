let inputContainer = document.querySelectorAll(`.user_query_container`);

console.log(inputContainer);
let inputs = inputContainer[0].querySelectorAll(`.input`);

console.log(inputs);

let data = extractAndReturnValues(inputs);

console.log(data);
