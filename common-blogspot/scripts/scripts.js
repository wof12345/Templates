function controlSettings(command) {
  if (command === "open") {
    APPLYSTYLES(
      [pageElements.settings, pageElements.settings_icon],
      [
        " opacity: 1;pointer-events: all;",
        "  transform: translateY(-6px);background-color: rgba(201, 205, 207, 0.829);",
      ]
    );
    pageLogics.settingsDropped = true;
  } else {
    APPLYSTYLES([pageElements.settings, pageElements.settings_icon], ["", ""]);
    pageLogics.settingsDropped = false;
  }
}

document.body.addEventListener("click", (e) => {
  const target = e.target;
  const targetClassName = target.className;

  //   console.log(targetClassName);

  if (
    targetClassName.includes("settings") ||
    targetClassName.includes("trigger_setings")
  ) {
    controlSettings("open");
  } else {
    controlSettings("close");
  }
});
