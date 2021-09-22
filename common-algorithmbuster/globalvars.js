let iteraionBlock = {
    block: function(iterationNo, information1, information2, information3, information4) {
        return ` <div class="iteration_result">
        <p>${iterationNo}</p>
        <p>${information1}</p>
        <p>${information2}</p>
        <p>${information3}</p>
        <p>${information4}</p>
    </div>`
    }
}

let lastTimerValue = 0;

let pageElements = {
    choice: document.getElementById('choice'),
    infoBox: document.querySelector(`.selection_info`),
    resultDisplay: document.querySelector(`.result_display`),
    floater: document.querySelector(`.floating_window`),
    floater_text: document.querySelector(`.text_floater`),
    display_toggle: document.querySelector(`.display_toggle`),
}

let backupVariables = {
    iterationShown: false,
    globalteration: 1,
}

let lastIterationQueries = {
    iterations: [],
}