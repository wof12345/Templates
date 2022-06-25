let variables = {
  inputTag: GETDOMQUERY(".creation_text"),
  toolBtns: GETDOMQUERY(".toolbtn"),
  contextMenu: GETDOMQUERY(".right_context_menu"),

  lastSelectedImg: null,
};

function DragEVEnt(elm) {
  elm.addEventListener("drag", (e) => {
    let pos = mouse_position(e);
    variables.lastSelectedImg.style = `top:${pos[1]}px;left:${pos[0]}px`;
    console.log("dragging");
  });
}

function getEndPoints() {
  var offset = 0;
  var selection = window.getSelection();
  var range = selection.getRangeAt(0);
  var start = range.startOffset;
  var end = range.endOffset;
  console.log(start, end);

  if (selection.baseNode.parentNode.hasChildNodes()) {
    for (var i = 0; selection.baseNode.parentNode.childNodes.length > i; i++) {
      var cnode = selection.baseNode.parentNode.childNodes[i];
      if (cnode.nodeType == document.TEXT_NODE) {
        if (offset + cnode.length > start) {
          break;
        }
        offset = offset + cnode.length;
      }
      if (cnode.nodeType == document.ELEMENT_NODE) {
        if (offset + cnode.textContent.length > start) {
          break;
        }
        offset = offset + cnode.textContent.length;
      }
    }
  }

  start = start + offset;
  end = end + offset;

  return [start, end];
}

function invokeContextMenu(pos) {
  //   console.log(pos)

  if (pos)
    variables.contextMenu.style = `display:block;top:${pos[1]}px;left:${pos[0]}px;`;
  else variables.contextMenu.style = ``;
}

function getSelectionText() {
  var text = "";
  var activeEl = document.activeElement;
  var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;

  if (
    activeElTagName == "textarea" ||
    (activeElTagName == "input" &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type) &&
      typeof activeEl.selectionStart == "number") ||
    activeElTagName == "div"
  ) {
    text = activeEl.textContent.slice(
      activeEl.selectionStart,
      activeEl.selectionEnd
    );
  } else if (window.getSelection) {
    text = window.getSelection().toString();
  }
  console.log(activeEl);

  return text;
}

function mouse_position(e) {
  var posX = e.clientX;
  var posY = e.clientY;

  return [posX, posY];
}

variables.toolBtns.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    let command = elm.dataset["cmd"];
    // console.log(getEndPoints());

    if (command === "createLink" || command === "insertImage") {
      let url = prompt("Enter URL : ", "http://");

      document.execCommand(command, false, url);
    } else document.execCommand(command, false, null);
  });
});

document.addEventListener(
  "contextmenu",
  function (e) {
    invokeContextMenu(mouse_position(e));
    // let pos = getEndPoints();
    let pos = window.getSelection();
    let html = variables.inputTag.innerHTML;
    selected = html.slice(pos[0], pos[1]);
    // variables.inputTag.innerHTML = html;
    // pos.insertBefore(document.createElement("br"), pos.childNodes[0]);
    console.log(pos.baseNode.parentNode.childNodes[0]);

    e.preventDefault();
  },
  false
);

document.addEventListener("click", (e) => {
  let target = e.target;
  let targetClass = target.className;

  if (targetClass.includes("modifier")) {
    console.log();
  }
  if (!targetClass.includes("context_menu")) {
    invokeContextMenu(null);
  }
});

document.addEventListener("mouseover", (e) => {
  let target = e.target;
  let targetClass = target.className;

  if (e.target.tagName.toLowerCase() === "img") {
    variables.lastSelectedImg = target;
    DragEVEnt(variables.lastSelectedImg);
    console.log(variables.lastSelectedImg);
  }
});

document.addEventListener("mouseout", (e) => {
  let target = e.target;
  let targetClass = target.className;

  //   variables.lastSelectedImg = null;
});

document.addEventListener("mousemove", (e) => {});

variables.inputTag.addEventListener("input", (e) => {
  //   console.log(e.target.textContent);
});
