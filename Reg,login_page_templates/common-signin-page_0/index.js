let registerBtn = document.querySelectorAll(`.register`);
let back = document.querySelectorAll(`.back`);
let indicators = document.querySelectorAll(`.page_indicator`);
let masterContainers = document.querySelectorAll(`.master_container_inner`);

let currentPage = 0;

indicators[0].style = "background-color:black;";
console.log(indicators);

function changePage(command) {
  console.log(masterContainers[currentPage]);
  if (command === "f" && currentPage < 3) {
    masterContainers[currentPage].style = "right:200%;";
    currentPage++;

    if (currentPage <= 2)
      indicators[currentPage].style = "background-color:black;";

    console.log(masterContainers[currentPage]);
    masterContainers[currentPage].style = "right:0;";
  } else if (command === "b") {
    if (currentPage > 0) {
      if (currentPage <= 2) indicators[currentPage].style = "";

      masterContainers[currentPage].style = "right:-200%;";
      currentPage--;
      masterContainers[currentPage].style = "right:0;";
    }
  }
}

function validation() {
  return true;
}

registerBtn.forEach((elm) => {
  elm.addEventListener("click", () => {
    if (validation()) {
      changePage("f");
    }
  });
});

back.forEach((elm) => {
  elm.addEventListener("click", () => {
    changePage("b");
  });
});

// function handleQuery(reference) {
//   let data = extractAndReturnValues(reference);
//   let state = validateInputs(
//     data,
//     [test.bind(this, false), "Not valid!"],
//     null,
//     null
//   );
//   console.log(data);

//   if (state === "pass") {
//     //db insertion code/ affirmation code
//   }
// }
