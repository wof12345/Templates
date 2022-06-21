let parent_containers = {
  login: document.querySelector(".inner_container_login"),
  register: document.querySelector(`.inner_container_register`),
};

let userData = []; //stored as array for efficiency in calling, have to modify code for custom fields both on front and back end.
let recievedData = [];

let loginInputs = parent_containers.login.querySelectorAll("input");
let loginIndicators = parent_containers.login.querySelectorAll(`.indicator`);
let registerInputs = parent_containers.register.querySelectorAll("input");
let registerIndicators =
  parent_containers.register.querySelectorAll(`.indicator`);

let navigation_buttons = {
  login: document.querySelector(`.login`),
  register: document.querySelector(`.register`),
};

console.log(loginInputs);
console.log(registerInputs);

let pageStateLogics = {
  login: true,
  switched: true,
  loggedIn: false,
};

navigation_buttons.register.addEventListener("click", () => {
  if (pageStateLogics.switched) {
    switchPage(pageStateLogics.login);
    pageStateLogics.switched = false;
  } else processData(registerInputs, registerIndicators);
});

navigation_buttons.login.addEventListener("click", () => {
  if (!pageStateLogics.switched) {
    switchPage(!pageStateLogics.login);
    pageStateLogics.switched = true;
  } else processData(loginInputs, loginIndicators);
});

function switchPage(condition) {
  if (condition) {
    navigation_buttons.register.style = `left:80%;right:10px;`;
    navigation_buttons.login.style = `left:10px;right:80%;`;
    parent_containers.register.style = `display:block; opacity:1;`;
    parent_containers.login.style = `display:none; opacity:0;`;
  } else {
    navigation_buttons.register.style = ``;
    navigation_buttons.login.style = ``;
    parent_containers.register.style = ``;
    parent_containers.login.style = ``;
  }
}

function processData(data, indicatorsRef) {
  userData = [];
  let passFlag = true;
  for (let i = 0; i < data.length; i++) {
    let currentFieldData = data[i].value;
    userData.push(currentFieldData);

    if (currentFieldData === "") {
      switchIndicators([indicatorsRef[i]], "on");
      passFlag = false;
    } else {
      switchIndicators([indicatorsRef[i]], "off");
    }
  }

  if (passFlag && userData.length > 2) {
    insertdata(userData);
  } else if (passFlag) {
    getData();
    setTimeout(() => {
      pageStateLogics.loggedIn = validate(userData, recievedData);
      console.log(pageStateLogics.loggedIn);
    }, 500);
  }
}

async function insertdata(data) {
  fetch(`http://localhost:3000/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => {
      throw err;
    });
}

async function getData() {
  console.log("called");

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
      console.log(data);
      recievedData = data;
    })
    .catch((err) => {
      throw err;
    });
}

function validate(data, recievedDataVal) {
  let userMatch = false;
  let passMatch = false;
  console.log(data, recievedData);

  for (let i = 0; i < recievedData.length; i++) {
    console.log(recievedDataVal[i].UserNameEmail, data[0]);
    console.log(recievedDataVal[i].UserPass, data[1]);
    if (recievedDataVal[i].UserNameEmail === data[0]) {
      userMatch = true;
    }
    if (recievedDataVal[i].UserPass === data[1]) {
      passMatch = true;
    }

    if (userMatch && passMatch) break;
  }

  if (userMatch && passMatch) {
    return true;
  } else if (userMatch && !passMatch) {
    switchIndicators([loginIndicators[1]], "on");
    return false;
  } else if (!userMatch && passMatch) {
    switchIndicators([loginIndicators[0]], "on");
    return false;
  } else {
    switchIndicators(loginIndicators, "on");
    return false;
  }
}

function switchIndicators(ref, command) {
  if (command === "on") {
    for (let i = 0; i < ref.length; i++) {
      ref[i].style = "opacity:1";
    }
  } else {
    for (let i = 0; i < ref.length; i++) {
      ref[i].style = "opacity:0";
    }
  }
}
