let mainPage = document.querySelector(`.main_container`);
let mainPageHeader = document.querySelector(`.page_inthoduction_details`);
let queryManipulationBox = document.querySelector(`.query_manipulation_box`);
let manipulationField = document.querySelector(`.field_container`);
let add_row_btns = document.querySelectorAll(".add_row");
let addRowDB = document.querySelector(`.add`);
let updateRowDB = document.querySelector(`.update`);
let updateRowUser = document.querySelector(`.edit`);
let deleteRowDB = document.querySelector(`.delete`);
let deleteRowUser = document.querySelector(`.delete_user`);
let context_info = document.querySelector(`.register_text`);
let login_cont = document.querySelector(`.p1`);
let reg_cont = document.querySelector(`.p2`);
let reg_link = document.querySelector(`.h_t`);
let userInfoCont = document.querySelector(`.user_info`);
let fields = userInfoCont.querySelectorAll(`.info_user`);

let edit_user = document.querySelector(`.edit`);

let updateDataBlock = {};

let parent_containers = {
  login: document.querySelector(".inner_container_login"),
  register: document.querySelector(`.inner_container_register`),
};

let tablePrefab = function (collection, tableInfo, tableNo) {
  return ` 
  <tr class="${tableInfo} ${tableNo}">
   <td class="${tableInfo} ${tableNo}"">${collection.UserNameEmail}</td>
   <td class="${tableInfo} ${tableNo}"">${collection.MobileNo}</td>
   <td class="${tableInfo} ${tableNo}"">${collection.BirthDate}</td>
   <td class="${tableInfo} ${tableNo}"">${collection.UserNo}</td>
   <td class="${tableInfo} ${tableNo}"">${collection.Role}</td>
  </tr>
`;
};

let userPageElements = {
  userPage: document.querySelector(`.user_page`),
  userPageHeaderText: document.querySelector(`h2`),
  tableContainers: document.querySelectorAll(`.table`),
  currentUserinfo: {},
  currentUserAllowedtables: [],
};

let userData = []; //stored as array for efficiency in calling, have to modify code for custom fields both on front and back end.
let recievedData = [];

let infoBox = document.querySelector(`.info_box`);

let loginInputs = parent_containers.login.querySelectorAll(".input");
let loginIndicators = parent_containers.login.querySelectorAll(`.indicator`);

let registerInputs = parent_containers.register.querySelectorAll(".input");
let registerIndicators =
  parent_containers.register.querySelectorAll(`.indicator`);

let manipulationInputs = manipulationField.querySelectorAll(`.input`);
let queryBoxes = manipulationField.querySelectorAll(".query_box");
let manipulationIndicators = manipulationField.querySelectorAll(`.indicator`);

let floatingIDMessageReg = parent_containers.register.querySelectorAll(
  `.floating_indicator_message`
);

let floatingIDMessageLog = parent_containers.login.querySelectorAll(
  `.floating_indicator_message`
);

let floatingIDMessageMan = manipulationField.querySelectorAll(
  `.floating_indicator_message`
);

let navigation_buttons = {
  login: document.querySelector(`.login`),
  register: document.querySelector(`.register`),
  logout: document.querySelector(`.logout`),
};

// console.log(loginInputs);
// console.log(registerInputs);

let pageStateLogics = {
  login: true,
  switched: true,
  loggedIn: false,
};

navigation_buttons.register.addEventListener("click", () => {
  processData(registerInputs, registerIndicators, floatingIDMessageReg);
});

navigation_buttons.login.addEventListener("click", () => {
  processData(loginInputs, loginIndicators, floatingIDMessageLog);
});

reg_link.addEventListener("click", () => {
  // console.log(pageStateLogics.switched);
  if (!pageStateLogics.switched) {
    switchPage(!pageStateLogics.login);
  } else {
    switchPage(pageStateLogics.login);
  }
});

navigation_buttons.logout.addEventListener("click", () => {
  if (pageStateLogics.loggedIn) pageStateLogics.loggedIn = false;

  invokeUserPage("logout");
});

function switchPage(condition) {
  if (condition) {
    pageStateLogics.switched = false;
    reg_cont.style = `transform: translateY(0px);`;
    login_cont.style = `display:none`;
    parent_containers.register.style = `display:block; opacity:1;`;
    parent_containers.login.style = `display:none; opacity:0;`;
    context_info.innerHTML = `<div class="register_text">
    Already have an account? <span class="h_t"> Login</span> here
  </div>`;
  } else {
    pageStateLogics.switched = true;
    reg_cont.style = ``;
    login_cont.style = ``;
    parent_containers.register.style = ``;
    parent_containers.login.style = ``;
    context_info.innerHTML = `<div class="register_text">
    Don't have an account? <span class="h_t"> Register</span> here
  </div>`;
  }

  reg_link = document.querySelector(`.h_t`);
  reg_link.addEventListener("click", () => {
    // console.log(pageStateLogics.switched);
    if (!pageStateLogics.switched) {
      switchPage(!pageStateLogics.login);
    } else {
      switchPage(pageStateLogics.login);
    }
  });
}

edit_user.addEventListener("click", () => {
  invokeManipulationBox("on", userPageElements.currentUserinfo, "update");
  updateDataBlock = userPageElements.currentUserinfo;
});

function processData(data, indicatorsRef, indocatorCol, add) {
  userData = [];
  let passFlag = true;
  let mobileFlag = true;
  for (let i = 0; i < data.length && passFlag; i++) {
    let currentFieldData = data[i].value.trim();
    // console.log(currentFieldData);

    userData.push(currentFieldData);

    if (
      currentFieldData === "" ||
      currentFieldData === undefined ||
      currentFieldData === "undefined"
    ) {
      switchIndicators([indicatorsRef[i]], "on");
      setIndicationMessage(indocatorCol[i], "Cannot be empty!");
      invokeInfoBox("red", "Fields cannot be Empty.");
      passFlag = false;
    } else if (i === 1 && !currentFieldData.match(/^\d{11}$/)) {
      mobileFlag = false;
    } else if (
      i === 5 &&
      currentFieldData !== "Student" &&
      userPageElements.currentUserinfo.Role !== "Admin"
    ) {
      passFlag = false;
      invokeInfoBox("red", "Registration only available for Students.");
    } else {
      switchIndicators([indicatorsRef[i]], "off");
    }
  }

  // console.log(passFlag);
  if (passFlag && userData.length > 2) {
    if (!mobileFlag) {
      invokeInfoBox("red", "Mobile Number invalid");
      return;
    }
    if (add === undefined) {
      validateRegInfo(indicatorsRef, indocatorCol);
    } else {
      let indicatorsRefBU = [...indicatorsRef];
      indicatorsRefBU.pop();
      console.log(indicatorsRefBU);

      validateRegInfo(indicatorsRefBU, indocatorCol);
    }
  } else if (passFlag) {
    loginProcess(false);
  }

  // console.log(userData);
}

async function insertdata(data) {
  fetch(`http://localhost:3000/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      recievedData = data;
      // console.log(data);
      if (!recievedData.sqlState) {
        invokeInfoBox("green", "Registration Success!");
      } else {
        invokeInfoBox("red", "User exists!");
      }
    })
    .catch((err) => {
      throw err;
    });
}

async function getSpecdata(data) {
  fetch(`http://localhost:3000/specData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      recievedData = data;
      // console.log(recievedData);
      userPageElements.currentUserAllowedtables.push(recievedData);
    })
    .catch((err) => {
      throw err;
    });
}

async function updateSpecdata(data) {
  // console.log(data);

  fetch(`http://localhost:3000/data`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      recievedData = data;
      // console.log(recievedData);
      if (!recievedData.sqlState) {
        invokeInfoBox("green", "Updated!");
      } else {
        invokeInfoBox("red", "Update error!");
      }
    })
    .catch((err) => {
      invokeInfoBox("red", "Update error!");
      throw err;
    });
}

async function deleteSpecdata(data) {
  // console.log(data);

  fetch(`http://localhost:3000/data`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      recievedData = data;
      // console.log(recievedData);

      if (!recievedData.sqlState) {
        invokeInfoBox("green", "Delete success!");
      } else {
        invokeInfoBox("red", "Delete error!");
      }
    })
    .catch((err) => {
      invokeInfoBox("red", "Delete error!");
      throw err;
    });
}

async function getData() {
  // console.log("called");

  fetch(`http://localhost:3000/data`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      recievedData = data;
      // console.log(recievedData);
    })
    .catch((err) => {
      throw err;
    });
}

function validate(data, recievedDataVal, loggedin) {
  let userMatch = false;
  let passMatch = false;
  // console.log(data, recievedData);
  if (!loggedin) {
    for (let i = 0; i < recievedData.length; i++) {
      // console.log(recievedDataVal[i].UserNameEmail, data[0]);
      // console.log(recievedDataVal[i].UserPass, data[1]);
      if (recievedDataVal[i].MobileNo === data[0]) {
        userMatch = true;
      }
      if (recievedDataVal[i].UserPass === data[1]) {
        passMatch = true;
      }

      if (userMatch && passMatch) {
        userPageElements.currentUserinfo = recievedDataVal[i];
        break;
      }
    }

    if (userMatch && passMatch) {
      invokeUserPage("login");

      invokeInfoBox("green", "Login success.");

      return true;
    } else if (userMatch && !passMatch) {
      switchIndicators([loginIndicators[1]], "on");
      setIndicationMessage(floatingIDMessageLog[1], "Does not match!");
      invokeInfoBox("red", "Wrong password!");
      return false;
    } else if (!userMatch && passMatch) {
      errorIndicator();
      return false;
    } else {
      errorIndicator();
      return false;
    }
  } else {
    invokeUserPage("login");
  }
}

function validateRegInfo(indicators, floatingMessages) {
  if (userData[3] !== userData[4] && indicators.length > 5) {
    switchIndicators([indicators[3], indicators[4]], "on");
    setIndicationMessage(floatingMessages[3], "Does not Match!");
    setIndicationMessage(floatingMessages[4], "Does not Match!");
    return;
  }
  insertdata(userData);
}

function switchIndicators(ref, command) {
  if (command === "on") {
    for (let i = 0; i < ref.length; i++) {
      ref[i].style = "pointer-events:all;opacity:1";
    }
  } else {
    for (let i = 0; i < ref.length; i++) {
      ref[i].style = "";
    }
  }
}

function setIndicationMessage(ind, msg) {
  ind.textContent = msg;
}

function invokeInfoBox(color, message) {
  infoBox.style = `background-color:${color};opacity:1;`;
  infoBox.textContent = message;

  setTimeout(() => {
    infoBox.style = ``;
  }, 4000);
}

function errorIndicator() {
  switchIndicators([loginIndicators[0]], "on");
  setIndicationMessage(floatingIDMessageLog[0], "Does not exist!");
  setIndicationMessage(floatingIDMessageLog[1], "Does not exist!");
  invokeInfoBox("red", "No user!");
}

function invokeUserPage(command) {
  // console.log(userPageElements.currentUserinfo);

  if (command === "login") {
    generateTables(userPageElements.currentUserinfo.Role);
    populateUserInfo();
    userPageElements.userPageHeaderText.textContent = `Welcome ${userPageElements.currentUserinfo.UserNameEmail},  ${userPageElements.currentUserinfo.Role}`;
    userPageElements.userPage.style = "transform:none;opacity:1;";
    mainPage.style.opacity = mainPageHeader.style.opacity = 0;
  } else {
    userPageElements.userPage.style = "";
    mainPage.style.opacity = mainPageHeader.style.opacity = 1;
    invokeInfoBox("blue", "Logged out");
    for (let i = 0; i < userPageElements.tableContainers.length; i++) {
      userPageElements.tableContainers[i].innerHTML = "";
    }
    for (let i = 0; i < fields.length; i++) {
      fields[i].textContent = "";
    }
  }
}

function generateTables(role) {
  let number = 3;
  for (let i = 0; i < add_row_btns.length; i++) {
    add_row_btns[i].style.display = "";
  }
  queryBoxes[4].style = "";
  queryBoxes[5].style = "";

  if (role.trim() === "Admin") {
    // console.log(role);
    for (let i = 0; i < add_row_btns.length; i++) {
      add_row_btns[i].style.display = "block";
    }
    queryBoxes[4].style = "display:none;";

    getSpecdata(["Admin", ""]);
    setTimeout(() => {
      getSpecdata(["Student", ""]);
    }, 100);
    setTimeout(() => {
      +getSpecdata(["Teacher", ""]);
    }, 200);
  }

  if (role.trim() === "Teacher") {
    addRowDB.style = "display:none;";

    getSpecdata(["Admin", ""]);
    setTimeout(() => {
      getSpecdata(["Student", ""]);
    }, 100);
    setTimeout(() => {
      getSpecdata(["Teacher", ""]);
    }, 200);
    queryBoxes[5].style = "display:none;";
    number = 2;
  }

  if (role.trim() === "Student") {
    addRowDB.style = "display:none;";

    getSpecdata(["Admin", ""]);
    setTimeout(() => {
      getSpecdata([
        "Student",
        `AND UserNo = '${userPageElements.currentUserinfo.UserNo}'`,
      ]);
    }, 100);
    setTimeout(() => {
      getSpecdata(["Teacher", ""]);
    }, 200);
    queryBoxes[5].style = "display:none;";
    number = 1;
  }

  setTimeout(() => {
    tableGenerator(userPageElements.currentUserAllowedtables, number);
  }, 500);
}

function tableGenerator(tables, number) {
  // console.log(tables.length);

  if (number > 2) {
    for (let i = 0; i < userPageElements.tableContainers.length; i++) {
      userPageElements.tableContainers[i].style.display = "block";
    }
    document.querySelector(`.db_1`).style.display = "";
    document.querySelector(`.db_2`).style.display = "";
    document.querySelector(`.db_3`).style.display = "";
  }

  if (number < 3) {
    for (let i = 0; i < userPageElements.tableContainers.length; i++) {
      userPageElements.tableContainers[i].style.display = "none";

      break;
    }
    document.querySelector(`.db_1`).style.display = "none";
    document.querySelector(`.db_2`).style.display = "";
    document.querySelector(`.db_3`).style.display = "";
  }

  if (number < 2) {
    for (let i = 0; i < userPageElements.tableContainers.length; i++) {
      if (i !== 1) userPageElements.tableContainers[i].style.display = "none";
    }
    document.querySelector(`.db_1`).style.display = "none";
    document.querySelector(`.db_2`).style.display = "none";
    document.querySelector(`.db_3`).style.display = "none";
  }

  for (let i = 0; i < 3; i++) {
    let generatedHtml =
      "<table><tr><th>UserName/Email</th><th>Mobile No</th><th>Birth Date</th><th>User No</th><th>Role</th></tr>";
    if (tables[i]) {
      for (let j = 0; j < tables[i].length; j++) {
        generatedHtml += tablePrefab(tables[i][j], j, i);
      }
    }
    generatedHtml += "</table>";
    userPageElements.tableContainers[i].innerHTML = generatedHtml;
    // console.log(generatedHtml);
  }
}

function invokeManipulationBox(command, query, context) {
  // console.log(query);

  if (command === "on") {
    if (context === "add") {
      updateRowDB.style = "display:none;";
      deleteRowDB.style = "display:none;";
      addRowDB.style = "display:block;";
    } else if (context === "update") {
      updateRowDB.style = "";
      deleteRowDB.style = "";
      addRowDB.style = "display:none;";
    } else {
      updateRowDB.style = "";
      deleteRowDB.style = "";
      addRowDB.style = "";
    }

    queryManipulationBox.style = "transform:none;opacity:1;";

    manipulationInputs[0].value = query.UserNameEmail;
    manipulationInputs[1].value = query.MobileNo;
    manipulationInputs[2].value = query.BirthDate;
    manipulationInputs[3].value = query.UserPass;
    manipulationInputs[4].value = query.Role;
  } else {
    queryManipulationBox.style = "";
  }
}

//global event listener
document.addEventListener("click", (e) => {
  let target = e.target;
  let targetClass = target.className;

  if (targetClass) {
    let query = targetClass.split(" ").map((elm) => +elm);

    if (!isNaN(query[0])) {
      updateDataBlock =
        userPageElements.currentUserAllowedtables[query[1]][query[0]];

      if (userPageElements.currentUserinfo.Role === "Admin") {
        invokeManipulationBox("on", updateDataBlock, "update");
      }
    }
  }

  if (targetClass === "query_manipulation_box") {
    invokeManipulationBox("off", [], "");
  }

  if (targetClass === "update") {
    let sqlQuery = generateUpdateSql(updateDataBlock);
    console.log(updateDataBlock);

    updateSpecdata([sqlQuery, updateDataBlock.UserNo]);
    loginProcess(true);
  }

  if (targetClass === "delete") {
    deleteSpecdata([updateDataBlock.UserNo]);
    loginProcess(true);
  }

  if (targetClass === "add") {
    processData(
      manipulationInputs,
      manipulationIndicators,
      floatingIDMessageMan,
      "a"
    );
    loginProcess(true);
  }
});

function generateUpdateSql(ref) {
  let generatedQuery = "";
  setIndicationMessage(floatingIDMessageMan[3], "Does not match!");
  setIndicationMessage(floatingIDMessageMan[4], "Does not match!");
  manipulationIndicators[3].style = "";
  manipulationIndicators[4].style = "";
  console.log(ref, manipulationInputs);

  if (userPageElements.currentUserinfo.Role === "Admin") {
    return (generatedQuery += `UserNameEmail = '${manipulationInputs[0].value}' , MobileNo = '${manipulationInputs[1].value}'  , BirthDate = '${manipulationInputs[2].value}' , UserPass = '${manipulationInputs[3].value}' , Role = '${manipulationInputs[5].value}'`);
  }

  if (manipulationInputs[3].value === manipulationInputs[4].value) {
    generatedQuery += `UserNameEmail = '${manipulationInputs[0].value}' ,  MobileNo = '${manipulationInputs[1].value}'   , BirthDate = '${manipulationInputs[2].value}' , UserPass = '${manipulationInputs[3].value}' , Role = '${manipulationInputs[5].value}'`;
  } else {
    setIndicationMessage(floatingIDMessageMan[3], "Does not match!");
    setIndicationMessage(floatingIDMessageMan[4], "Does not match!");
    manipulationIndicators[3].style = "opacity:1;pointer-events:all;";
    manipulationIndicators[4].style = "opacity:1;pointer-events:all;";

    invokeInfoBox("red", "Passwords mismatch!");
  }
  console.log("Main : ", generatedQuery);

  return generatedQuery;
}

function loginProcess(flag) {
  userPageElements.currentUserAllowedtables = [];
  getData();
  setTimeout(() => {
    pageStateLogics.loggedIn = validate(userData, recievedData, flag);
    // console.log(pageStateLogics.loggedIn);
  }, 500);
}

add_row_btns.forEach((elm, ind) => {
  elm.addEventListener("click", () => {
    invokeAddPage("on");
  });
});

function invokeAddPage(command) {
  if (command === "on") {
    invokeManipulationBox(
      "on",
      {
        UserNameEmail: "Username_Email",
        MobileNo: "01xxxxxxx",
        BirthDate: "2022-12-05",
        UserPass: "Password",
        UserNo: null,
        Role: "Teacher",
      },
      "add"
    );
  }
}

function populateUserInfo() {
  fields[0].textContent = userPageElements.currentUserinfo.UserNameEmail;
  fields[1].textContent = userPageElements.currentUserinfo.MobileNo;
  fields[2].textContent = userPageElements.currentUserinfo.BirthDate;
  fields[3].textContent = userPageElements.currentUserinfo.UserPass;
  fields[4].textContent = userPageElements.currentUserinfo.Role;
}
