let mainpageElements = {
    button: document.querySelectorAll(`.common_btn`)[2],
    mcqQuestions: '',
    mcqChoices: '',
    mcqChoiceCounts: [],
    globalWrittenCount: 0
}

let toSendToDB = {
    mcqQuestions: [],
    mcqChoices: []
}

function getChoiceData(choiceCount, prevWritten) {
    let localChoice = [];

    // console.log(choiceCount,prevWritten);
    

    for(let index = prevWritten; index < mainpageElements.mcqChoices.length; index++) {
        localChoice.push(mainpageElements.mcqChoices[index].value);
        // console.log(mainpageElements.mcqChoices[index]);
        choiceCount--;
        if(choiceCount === 0) { mainpageElements.globalWrittenCount = ++index; break };
    }

    toSendToDB.mcqChoices.push(localChoice);
}

function resetQuery(){
    mainpageElements.globalWrittenCount = 0;
    toSendToDB.mcqChoices = [];
    toSendToDB.mcqQuestions = [];
    mainpageElements.mcqChoiceCounts = [];
    mainpageElements.mcqQuestions = document.querySelectorAll(`.ques`);
    mainpageElements.mcqChoices = document.querySelectorAll(`.choices`);
}

mainpageElements.button.addEventListener('click', function(e) {
    resetQuery();
    // console.log(mainpageElements.mcqChoices);
    
    let wrapper = document.querySelector(`.queries`);
    let Conts = wrapper.innerHTML.split('<!--split-->');
    // console.log(Conts[Conts.length-1]);
    
    Conts.pop();
    Conts.shift();

    Conts.forEach((elm) => {
        let choiceCount = (elm.match(/choices/g) || []).length;
        mainpageElements.mcqChoiceCounts.push(choiceCount);
    })


    mainpageElements.mcqQuestions.forEach((elm, ind) => {
        toSendToDB.mcqQuestions.push(elm.value);
        getChoiceData(mainpageElements.mcqChoiceCounts[ind], mainpageElements.globalWrittenCount);
    })

    console.log(toSendToDB.mcqQuestions,toSendToDB.mcqChoices);

})