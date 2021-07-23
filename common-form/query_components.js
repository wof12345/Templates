//main  mcq functionalities

let mainpageElements = {
    generatedMCQ: [],
    button: document.querySelector(`.add`),
    optionsCont: document.querySelector(`.select_options`),
    options: document.querySelectorAll(`.options`),
    choiceCont: document.querySelector(`.choice_cont`),
    select_value: document.getElementById('form_type'),
    wrapper: document.querySelectorAll(`.wrapper`)[1],
    queryCont: document.querySelector(`.queries`),
    id: 0,
    form_type: 'Quiz'
}

let premadeElementBlocks = {
    QUIZ: `<p class="options">MCQ</p>
    <p class="options">Written</p>
    <p class="options">File</p>`,

    MCQ: function(id) {
        return `<div class="user_choice mcq" id="${id}"  style="opacity:0;padding: 0; transition:.5s;">
        <div class="choice_sel"><p>${id+1}.</p><textarea rows="1"  class="ques" type="text" name="question"  id="${id}" placeholder="Question"></textarea></div>
        <div class="choice_cont">
        <div class="choice_sel"><input class="choice" type="radio" name="choice${id}" value="1"><textarea rows="1"  class="choices" type="text" placeholder="choice1" ></textarea></div>
        <div class="choice_sel"><input class="choice" type="radio" name="choice${id}" value="2"><textarea rows="1"  class="choices" type="text" placeholder="choice2" ></textarea></div>
        </div>
        <button class="add_mcq">add choice</button> 
        </div>
        <!--split-->`
    },

    WRITTEN: function(id) {
        return `<div class="user_choice written" id="${id}"  style="opacity:0;padding: 0; transition:.5s;">
        <div class="choice_sel"><p>${id+1}.</p><textarea rows="1"  class="ques" type="text" name="question"  id="${id}" placeholder="Question"></textarea></div>
        <div class="choice_cont answer">
        <textarea rows="1"  class="choice" type="text" placeholder="Answer" ></textarea>
        </div>
        </div>
        <!--split-->`
    },
    
}

let quizProps = {
    buttonAdd: '',
    mcq: function(choiceNo, name) { return `<div class="choice_sel"><input class="choice" type="radio" name="${name}" value="${choiceNo}"><textarea rows="1"  class="choices" type="text" placeholder="choice${choiceNo}" ></textarea></div>` },
}

function selectResult(elm) {
    let query = elm;

    if(query === "MCQ") {
        addMCQ();
    }

    if(query==="Written"){
        addWRITTEN();
    }
};

function commonQueryCode(premade){
    let target = mainpageElements.queryCont;
    let lastChild = target.lastElementChild;
    
    
    let lastChoice = lastChild?.getAttribute('id');
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

function addMCQ() {
    commonQueryCode(premadeElementBlocks.MCQ);
}

function addWRITTEN(){
    commonQueryCode(premadeElementBlocks.WRITTEN);
}

function initiateEventHandler(elm) {
        let prevSib = elm.previousElementSibling;
        let lastChild = prevSib.lastElementChild;
        let lastChoice = lastChild.firstChild.getAttribute('value');
        let currentName = lastChild.firstChild.getAttribute('name');

        +lastChoice++;
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

function clearFormPage(){
    let cont = mainpageElements.queryCont;
    while(cont.lastElementChild){
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

    if(targetClass.includes('add_mcq')){
        initiateEventHandler(target);
        // console.log(target.previousElementSibling.lastElementChild.firstChild);
   }

    if(targetClass.includes('options')) {
        selectResult(target.textContent);
    }


})

mainpageElements.select_value.addEventListener('change', (e) => {
    mainpageElements.form_type = e.target.value;
    clearFormPage();
    updateSelectMenu();
})