function getCurrentDate() {
  let date = new Date();
  let formatted = date.toUTCString();
  // console.log(formatted);
  return formatted;
}

function animateCommon(params, style) {
  params.forEach((elm, ind) => {
    elm.style = style[ind];
  });
}

function getCheckedValue(elm) {
  for (let it = 0; it < elm.length; it++) {
    if (elm[it].checked) return [elm[it].value, it];
  }
}

function checkEmpty(toCheck) {
  for (let it = 0; it < toCheck.length; it++) {
    // console.log(toCheck[it], "Check");
    if (toCheck[it] === "") return false;
  }
  return true;
}

function populateResponses(data) {
  data.forEach((elm, ind) => {
    // console.log(elm);

    mainpageElements2.responseViewContWindow.insertAdjacentHTML(
      "beforeend",
      otherElements.responseCont(elm[0], elm[1])
    );
  });
}

function viewEndPageUser() {
  animateCommon([userSideElm.genFormUser], ["height:0px"]);
  animateCommon([userSideElm.endSectionUser], ["height:400px"]);
}

function generateFloatingWindow(message, position) {
  pageVariable.floatingMessage.textContent = message;

  // console.log(pageVariable.floatingWindow);

  animateCommon(
    [pageVariable.floatingWindow],
    [`opacity:1; top:${position[0]};right:${position[1]};`]
  );

  setTimeout(() => {
    animateCommon(
      [pageVariable.floatingWindow],
      [`opacity:0; top:${position[0]};right:${position[1]};`]
    );
  }, 1000);
}

function commonQueryCode(premade) {
  let target = mainpageElements.queryCont;
  let lastChild = target.lastElementChild;

  let lastChoice = lastChild?.getAttribute("id");
  // console.log(lastChoice);

  if (!lastChoice) {
    lastChoice = 0;
  } else {
    lastChoice++;
  }

  mainpageElements.id = lastChoice;

  target.insertAdjacentHTML("beforeend", premade(lastChoice));
  let mcqDiv = target.lastElementChild;
  setTimeout(() => {
    mcqDiv.style = "";
  }, 300);
}

function generateFormPage(dataToRet) {
  let dataset = checkPresence(dataToRet, currentSeed);
  dataGotten = dataset[1];
  if (dataset[0]) {
    generationPage();
    console.log("generating page");
    if (dataGotten.UserData.length > 0) {
      populateResponses(dataGotten.UserData);
      let responseCount = dataGotten.UserData.length;
      mainpageElements1.responseView.textContent =
        responseCount + " other responders";

      mainpageElements1.formOwnerView.textContent =
        "Form by " + dataGotten.FormData[3];
      mainpageElements1.formNameView.textContent = dataGotten.FormData[4];
    }
    generateAndPush(0, dataGotten);
  }
}

function handleTrigger(data1, data2, data3, data4) {
  const data = [currentSeed, toSendToDB, data1, data2, data3, data4];

  setTimeout(
    () => animateCommon([mainpageElements1.utilityBtns[2]], ["height: 0px;"]),
    300
  );

  animateCommon(
    [mainpageElements1.endSection],
    ["opacity:1;height:200px; margin: 30px; padding: 20px;"]
  );

  mainpageElements1.formGenPage.addEventListener("click", () => {
    window.location = url;
  });

  uploadData("getAllData", data);
}

function checkPresence(data, target) {
  for (let it = 0; it < data.length; it++) {
    if (target === data[it]._id) return [true, data[it]];
  }
  return false;
}

function generateAndPush(it, data) {
  // console.log(data);
  let dataMain = data.FormData[1];
  let currentQueryQues = dataMain.mcqQuestions[it];
  let currentQueryInput = dataMain.mcqChoices[it];

  if (it === dataMain.mcqQuestions.length) return;

  let generatedHtml = ``;

  if (currentQueryInput.length > 1) {
    generatedHtml += premadeElementBlocks.MCQuserSide(it, currentQueryQues);
    // console.log(generatedHtml);
    for (let i = 0; i < currentQueryInput.length; i++) {
      // console.log(currentQueryInput[i]);
      generatedHtml += quizProps.mcquserside(i, it, currentQueryInput[i], it);
    }
  } else {
    generatedHtml += premadeElementBlocks.WRITTENuserSide(it, currentQueryQues);
  }

  mainpageElements1.queryCont.insertAdjacentHTML(
    "beforeend",
    generatedHtml +
      `</div>
        </div>`
  );

  generateAndPush(++it, data);
}

async function getPossibleData(location) {
  fetch(`http://localhost:3000/${location}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dataGotten = data;
      console.log(dataGotten);

      generateFormPage(dataGotten);
    })
    .catch((error) => {
      console.log(error);
      dataGotten = error;
    });
}

async function uploadData(location, data) {
  fetch(`http://localhost:3000/${location}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      viewEndPageUser();
      return "ok";
    })
    .catch((error) => {
      console.log("Error:", error);
      return "error";
    });
}

async function deleteForm(location, data) {
  fetch(`http://localhost:3000/${location}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      generateFloatingWindow("Form Deleted!", ["250px", "330px"]);
      return "ok";
    })
    .catch((error) => {
      console.log("Error:", error);
      generateFloatingWindow("Form Deleted!", ["250px", "330px"]);
      return "error";
    });
}
