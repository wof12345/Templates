function logoInitAnimation() {
  APPLYSTYLES([pageAnimationElements.logoLeft], [`transform:rotate(1000deg);`]);
  APPLYSTYLES(
    [pageAnimationElements.logoRight],
    [`transform:rotate(-1000deg);`]
  );

  temporaryVariables.TimeOutFunctions.push(
    TIMEOUT(
      APPLYSTYLES.bind(
        this,
        [
          pageAnimationElements.logoLeft,
          pageAnimationElements.navLogo,
          pageAnimationElements.logoBefore,
          pageAnimationElements.logoRight,
        ],
        [
          `transform:rotate(-1000deg);`,
          `font-size:16px;font-family: 'Mochiy Pop P One', sans-serif;`,
          `clip-path:none;height:100%;`,
          `transform:rotate(1000deg);`,
        ]
      ),
      300
    )
  );

  temporaryVariables.TimeOutFunctions.push(
    TIMEOUT(
      APPLYSTYLES.bind(
        this,
        [pageAnimationElements.logoAfter],
        [`clip-path:none;height:100%;`]
      ),
      900
    )
  );

  temporaryVariables.TimeOutFunctions.push(
    TIMEOUT(
      APPLYSTYLES.bind(
        this,
        [pageAnimationElements.logoBefore],
        [`clip-path:none;height:0%;top:100%;`]
      ),
      600
    )
  );

  temporaryVariables.TimeOutFunctions.push(
    TIMEOUT(
      APPLYSTYLES.bind(
        this,
        [pageAnimationElements.logoAfter],
        [`clip-path:none;height:0%;bottom:100%;`]
      ),
      1200
    )
  );

  temporaryVariables.TimeOutFunctions.push(
    TIMEOUT(
      APPLYSTYLES.bind(
        this,
        [
          pageAnimationElements.logoText,
          pageAnimationElements.logoRight,
          pageAnimationElements.logoLeft,
          pageAnimationElements.navLogo,
          pageAnimationElements.logoAfter,
        ],
        [
          `background-color:white;border-radius:30px;letter-spacing:1px`,
          `clip-path:0;transform:rotate(1400deg);background-color:black;`,
          `clip-path:0;transform:rotate(-1400deg);background-color:black;`,
          `font-family: 'Mochiy Pop P One', sans-serif;`,
          `clip-path: polygon(47% 0, 100% 0, 52% 100%, 0 0);height:10px;bottom:90%;background-color:black;`,
        ]
      ),
      1500
    )
  );

  let tempArr = [];
  pageAnimationElements.logoLetters.forEach((elm, ind) => {
    if (ind === 0 || ind === 4 || ind === 5) {
      tempArr.push("color:black;font-size:20px");
    } else tempArr.push("color:black");
  });

  TIMEDANIMATION(
    pageAnimationElements.logoLetters,
    tempArr,
    300,
    0,
    temporaryVariables
  );
}

function logoOutAnimation() {
  temporaryVariables.TimeOutFunctions
    ? CLEARALLTIMEOUT(temporaryVariables.TimeOutFunctions)
    : (temporaryVariables.TimeOutFunctions = []);

  temporaryVariables.TimeOutFunctions = [];

  APPLYSTYLES(
    [
      pageAnimationElements.logoAfter,
      pageAnimationElements.logoBefore,
      pageAnimationElements.logoLeft,
      pageAnimationElements.logoRight,
      pageAnimationElements.logoText,
      pageAnimationElements.navLogo,
    ],
    [
      ``,
      ``,
      `left: 0;
      top: 0;
      clip-path: polygon(34% 0, 7% 67%, 62% 100%);
      transform: rotate(-16deg);`,
      `right: 0;
      top: 0;
      clip-path: polygon(63% 0, 90% 59%, 35% 100%);
      transform: rotate(20deg);`,
      ``,
      `font-size:15px;color:white`,
    ]
  );
  pageAnimationElements.logoLetters.forEach((elm, ind) => {
    APPLYSTYLES([elm], ["color:white;"]);
  });
}
