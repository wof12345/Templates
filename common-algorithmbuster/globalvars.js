let iteraionBlock = {
    block: function(iterationNo, information1, changesMade, currentArray, originalArray) {
        return ` <div class="iteration_result">
        <p>Iteration no: ${iterationNo}</p>
        <p>${information1}</p>
        <p>Changes made: ${changesMade}</p>
        <p>Current array: ${currentArray}</p>
        <p>Original array: ${originalArray}</p>
    </div>`
    }
}

let pageElements = {
    resultDisplay: document.querySelector(`.result_display`),
}