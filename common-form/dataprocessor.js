let mainpageElements = {
    button: document.querySelectorAll(`.common_btn`)[2],
    mcqQuestions: '',
    mcqChoices: ''
}

let toSendToDB = {
    mcqQuestions: [],
    mcqChoices: []
}

mainpageElements.button.addEventListener('click', function(e) {
    mainpageElements.mcqQuestions = document.querySelectorAll(`.ques`);
    mainpageElements.mcqChoices = document.querySelectorAll(`.choices`);

    mainpageElements.mcqChoices.forEach(elm => {
        toSendToDB.mcqChoices.push(elm.value);
    })

    mainpageElements.mcqQuestions.forEach(elm => {
        toSendToDB.mcqQuestions.push(elm.value);
    })

    console.log(toSendToDB.mcqChoices);


})