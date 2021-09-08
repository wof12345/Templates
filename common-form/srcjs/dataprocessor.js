function getChoiceData(choiceCount, prevWritten) {
    let localChoice = [];

    // console.log(choiceCount,prevWritten);


    for(let index = prevWritten; index < mainpageElements1.mcqChoices.length; index++) {
        localChoice.push(mainpageElements1.mcqChoices[index].value);
        // console.log(mainpageElements1.mcqChoices[index]);
        choiceCount--;
        if(choiceCount === 0) { mainpageElements1.globalWrittenCount = ++index; break };
    }

    toSendToDB.mcqChoices.push(localChoice);
}

function resetQuery() {
    mainpageElements1.globalWrittenCount = 0;
    toSendToDB.mcqChoices = [];
    toSendToDB.mcqQuestions = [];
    mainpageElements1.mcqChoiceCounts = [];
    mainpageElements1.mcqQuestions = document.querySelectorAll(`.ques`);
    mainpageElements1.mcqChoices = document.querySelectorAll(`.choices`);
}

mainpageElements1.button.addEventListener('click', function(e) {
    resetQuery();
    // console.log(mainpageElements1.mcqChoices);

    let queries = document.querySelector(`.queries`);
    let fromElement = queries.innerHTML.split('<!--split-->');
    // console.log(fromElement[fromElement.length-1]);

    fromElement.pop();
    fromElement.shift();

    fromElement.forEach((elm) => {
        let choiceCount = (elm.match(/choices/g) || []).length;
        mainpageElements1.mcqChoiceCounts.push(choiceCount);
    })


    mainpageElements1.mcqQuestions.forEach((elm, ind) => {
        toSendToDB.mcqQuestions.push(elm.value);
        getChoiceData(mainpageElements1.mcqChoiceCounts[ind], mainpageElements1.globalWrittenCount);
    })

    creatorSideElm.confirmBtn.addEventListener('click', function(e) {
        let formPass = creatorSideElm.formPass.value;
        let formOwner = creatorSideElm.formOwner.value;
        let formPurpose = creatorSideElm.formPurpose.value;
        let checkAllfill = creatorSideElm.checkForAll.checked ? true : false;

        console.log(formPass, formOwner, formPurpose, checkAllfill);

        if(formPass !== '') {
            handleTrigger(formPass, formOwner, formPurpose, checkAllfill);
        } else {
            generateFloatingWindow('Password cannot be empty.', ['270px', '300px'])
        }
    })

    console.log(toSendToDB.mcqQuestions, toSendToDB.mcqChoices);

})

mainpageElements1.formGenBtn.addEventListener('click', () => {
    window.location.href = url;
})

mainpageElements1.editAccessBtn.addEventListener('click', () => {
    animateCommon([mainpageElements1.imputPassCont], ['width:200px;height:100px']);
})

mainpageElements1.passConfirm.addEventListener('click', () => {
    let givenPass = mainpageElements1.passUserSide.value;

    let formPass = dataToRet.FormData[2];

    if(givenPass === formPass) {
        animateCommon([mainpageElements1.editOnly], ['height:100px; padding:7px ;margin-top:-100px']);
        animateCommon([mainpageElements1.editAccessCont], ['transform: translateY(-200px)']);
        logics.hasPass = true;
    }

})

getCurrentDate();


mainpageElements1.submitUserSide.addEventListener('click', function(e) {
    e.preventDefault();
    let queriesInside = document.querySelectorAll(`.user_choice`);
    let otherResults = [];
    let foundAnswers = [];
    let canProceed = true;

    for(let it = 0; it < queriesInside.length; it++) {
        let results = 'other';
        let currentAnswers = document.getElementsByName(`${it}`);
        // console.log(currentAnswers[0].checked);

        if(currentAnswers.length > 1) {
            results = getCheckedValue(currentAnswers);
            if(!results) {
                canProceed = false;
                break;
            }
            foundAnswers.push(results)
        } else {
            let currentAnswer = document.getElementById(`${it}`);
            if(currentAnswer.value === "") {
                canProceed = false;
                break;
            }
            foundAnswers.push(currentAnswer.value);
        }

    }
    let submitter = mainpageElements1.submitAs.value;
    let currentDate = getCurrentDate();


    let dataToSend = [submitter, currentDate, foundAnswers];
    console.log(dataToSend);

    let checkViability = true;
    if(dataToRet.FormData[4])
        if(!canProceed) {
            generateFloatingWindow('Everything must be answered', ['250px', '330px']);
            checkViability = false
        }


    if(checkViability) {
        uploadData('updatedata', [currentSeed, dataToSend]);
        viewEndPageUser();
    }


})