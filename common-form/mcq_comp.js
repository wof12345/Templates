//main  mcq functionalities
let mainpageElements = {
    generatedMCQ: [],
    button: document.querySelector(`.add`),
    choiceCont: document.querySelector(`.choice_cont`),
    mcqContainer: document.querySelector(`.queries`),
    id: 0,
}

let premadeElementBlocks = {
    MCQ: function(id) {
        return `<div class="user_choice mcq" style="opacity:0;padding: 0; transition:.5s;">
        <div class="choice_sel"><p>${id+1}.</p><textarea rows="1"  class="ques" type="text" name="question"  id="${id}" placeholder="Question"></textarea></div>
        <div class="choice_cont">
        <div class="choice_sel"><input class="choice" type="radio" name="choice${id}" value="1"><textarea rows="1"  class="choices" type="text" placeholder="choice1" ></textarea></div>
        <div class="choice_sel"><input class="choice" type="radio" name="choice${id}" value="2"><textarea rows="1"  class="choices" type="text" placeholder="choice2" ></textarea></div>
        </div>
        <button class="add_mcq">add choice</button> 
        </div>
        <!--split-->`
    }
}

let quizProps = {
    buttonAdd: '',
    mcq: function(choiceNo, name) { return `<div class="choice_sel"><input class="choice" type="radio" name="${name}" value="${choiceNo}"><textarea rows="1"  class="choices" type="text" placeholder="choice${choiceNo}" ></textarea></div>` },
}

function initiateEventHandler(val) {
    quizProps.buttonAdd[val].addEventListener('click', (e) => {
        let sibbling = e.target.previousElementSibling;
        let childs = sibbling.querySelectorAll('.choice_sel');
        let lastChoice = childs[childs.length - 1].firstChild.getAttribute('value');
        let currentName = childs[childs.length - 1].firstChild.getAttribute('name');

        +lastChoice++;
        sibbling.insertAdjacentHTML('beforeend', quizProps.mcq(lastChoice, currentName));
    })
}


function addeventlistenerTextArea(elm) {
    elm.setAttribute("style", "height:" + (elm.scrollHeight) + "px;overflow-y:hidden; transition:1s");
    elm.addEventListener("input", OnInput, false);

    function OnInput() {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    }
}

mainpageElements.button.addEventListener('click', (e) => {
    let lastChoice = e.target?.previousElementSibling?.querySelector(`.ques`).getAttribute('id');

    if(!lastChoice) {
        lastChoice = 0
    } else {
        lastChoice++;
    }

    mainpageElements.id = lastChoice;

    e.target.insertAdjacentHTML('beforebegin', premadeElementBlocks.MCQ(lastChoice));
    let mcqDiv = e.target.previousElementSibling;
    setTimeout(() => { mcqDiv.style = '' }, 300);

    quizProps.buttonAdd = document.querySelectorAll(`.add_mcq`);

    initiateEventHandler(mainpageElements.id);
})

mainpageElements.mcqContainer.addEventListener('click', e => {
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

})