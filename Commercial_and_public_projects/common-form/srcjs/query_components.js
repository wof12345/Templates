//main  mcq functionalities
function selectResult(elm) {
    let query = elm;

    if(query === "MCQ") {
        addMCQ();
    }

    if(query === "Written") {
        addWRITTEN();
    }
};

function addMCQ() {
    commonQueryCode(premadeElementBlocks.MCQ);
}

function addWRITTEN() {
    commonQueryCode(premadeElementBlocks.WRITTEN);
}

function initiateEventHandler(elm) {
    let prevSib = elm.previousElementSibling;
    let lastChild = prevSib.lastElementChild;
    let lastChoice = lastChild.firstChild.getAttribute('value');
    let currentName = lastChild.firstChild.getAttribute('name');

    +
    lastChoice++;
    prevSib.insertAdjacentHTML('beforeend', quizProps.mcq(lastChoice, currentName));
}


function addeventlistenerTextArea(elm) {
    elm.setAttribute("style", "height:" + (elm.scrollHeight) + "px;overflow-y:hidden; transition:1s");
    elm.addEventListener("input", OnInput, false);

    function OnInput() {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    }
}

function updateSelectMenu() {
    let form = mainpageElements.form_type;
    let element = mainpageElements.optionsCont;
    // console.log(mainpageElements.form_type, element.childNodes.length);

    while(element.lastElementChild) {
        element.removeChild(element.lastElementChild);
    }
    // console.log(mainpageElements.form_type, element.childNodes.length);

    if(form === 'Quiz') {
        element.insertAdjacentHTML('afterbegin', premadeElementBlocks.QUIZ);
    }
}

updateSelectMenu();

function clearFormPage() {
    let cont = mainpageElements.queryCont;
    while(cont.lastElementChild) {
        cont.removeChild(cont.lastElementChild);
    }
}

mainpageElements.wrapper.addEventListener('click', e => {
    let target = e.target;
    let targetClass = target.className;


    if(!targetClass.includes('added')) {
        target.classList.add('added');

        if(targetClass.includes('choices')) {
            addeventlistenerTextArea(target);
        }

        if(targetClass.includes('ques')) {
            addeventlistenerTextArea(target);
        }
    }

    if(targetClass.includes('add_mcq')) {
        initiateEventHandler(target);
        // console.log(target.previousElementSibling.lastElementChild.firstChild);
    }

    if(targetClass.includes('delete_mcq')) {
        // console.log(target.previousElementSibling.previousElementSibling.lastElementChild);
        let choiceToRemove = target.previousElementSibling.previousElementSibling.lastElementChild;
        if(choiceToRemove.firstElementChild.value <= 2) {


        } else
            target.previousElementSibling.previousElementSibling.lastElementChild.remove();

    }

    if(targetClass.includes('options')) {
        selectResult(target.textContent);
    }
})

mainpageElements1.queryCont.addEventListener('click', function(e) {
    let target = e.target;
    let targetClass = target.className;


    if(!targetClass.includes('added')) {
        target.classList.add('added');

        if(targetClass.includes('choices')) {
            addeventlistenerTextArea(target);
            console.log("listener added!");

        }
    }
})

mainpageElements.select_value.addEventListener('change', (e) => {
    mainpageElements.form_type = e.target.value;
    clearFormPage();
    updateSelectMenu();
})

//addbutton functionality in animations

// console.log(pageCommon.deletebutton);
pageCommon.deletebutton.addEventListener('click', function(e) {
    let lastQueryToRemove = e.target.previousElementSibling.previousElementSibling.lastElementChild;
    if(lastQueryToRemove)
        lastQueryToRemove.remove()
    else
        generateFloatingWindow('Nothing to delete!', ['200px', '200px']);
})