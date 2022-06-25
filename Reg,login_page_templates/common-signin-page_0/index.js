let registerBtn = document.querySelector(`.register`);
let loginBtn = document.querySelector(`.login`);

function handleQuery(reference) {
  let data = extractAndReturnValues(reference);
  let state = validateInputs(
    data,
    [test.bind(this, false), "Not valid!"],
    null,
    null
  );

  if (state === "pass") {
    //db insertion code/ affirmation code
  }
}
