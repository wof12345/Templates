let inputContainer = document.querySelectorAll(`.user_query_container`);

function getAndReturn() {
  let inputs = inputContainer[0].querySelectorAll(`.input`);

  let data = extractAndReturnValues(inputs);

  return data;
}
