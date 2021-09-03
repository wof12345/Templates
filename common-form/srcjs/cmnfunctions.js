let dataToRet;

function commonQueryCode(premade) {
    let target = mainpageElements.queryCont;
    let lastChild = target.lastElementChild;


    let lastChoice = lastChild ?.getAttribute('id');
    // console.log(lastChoice);

    if(!lastChoice) {
        lastChoice = 0
    } else {
        lastChoice++;
    }

    mainpageElements.id = lastChoice;

    target.insertAdjacentHTML('beforeend', premade(lastChoice));
    let mcqDiv = target.lastElementChild;
    setTimeout(() => { mcqDiv.style = '' }, 300);
}

async function getPossibleData(location) {

    fetch(`http://localhost:3000/${location}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            dataToRet = data;
            console.log(dataToRet);
    
            let dataset = checkPresence(dataToRet, currentSeed);
            dataToRet = dataset[1];
            if(dataset[0]) {
                generationPage();
                console.log("generating page");
                let responseCount = dataToRet[0].UserData.length;
                mainpageElements1.responseView.textContent = responseCount +" other responders";
                generateAndPush(0, dataToRet);
            }

        })
        .catch((error) => {
            console.log(error);
            dataToRet = error;
        });

}

async function uploadData(location, data) {
    fetch(`http://localhost:3000/${location}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });

}

function checkPresence(data, target) {
    for(let it = 0; it < data.length; it++) {
        if(target === data[it]._id)
            return [true, data[it]];
    }
    return false;
}

function generateAndPush(it, data) {
    console.log(data);

    mainpageElements1.formOwnerView.textContent = "Form by " + data.FormData[3];
    mainpageElements1.formNameView.textContent = data.FormData[4];

    let dataMain = data.FormData[1];
    let currentQueryQues = dataMain.mcqQuestions[it];
    let currentQueryInput = dataMain.mcqChoices[it];

    if(it === dataMain.mcqQuestions.length) return;

    let generatedHtml = ``;


    if(currentQueryInput.length > 1) {
        generatedHtml += premadeElementBlocks.MCQuserSide(it, currentQueryQues);
        // console.log(generatedHtml);
        for(let i = 0; i < currentQueryInput.length; i++) {
            // console.log(currentQueryInput[i]);
            generatedHtml += quizProps.mcquserside(i, it, currentQueryInput[i], it);
        }
    } else {
        generatedHtml += premadeElementBlocks.WRITTENuserSide(it, currentQueryQues);
    }

    mainpageElements1.queryCont.insertAdjacentHTML('beforeend', generatedHtml + `</div>
        </div>`);

    generateAndPush(++it, data);

}