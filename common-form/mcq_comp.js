//main  mcq functionalities
let mainpageElements ={
    generatedMCQ:[],
    button: document.querySelector(`.add`),
    choiceCont:  document.querySelector(`.choice_cont`),
    textAreas: document.querySelectorAll(`.ques`),
    id:0,
}

let premadeElementBlocks={
    MCQ: function(id){
        return `<div class="user_choice mcq" style="opacity:0;padding: 0; transition:.5s;">
        <div class="choice_sel"><p>${id+1}.</p><textarea rows="1"  class="ques" type="text" name="question"  id="${id}" placeholder="Question"></textarea></div>
        <div class="choice_cont">
        <div class="choice_sel"><input class="choice" type="radio" name="choice${id}" value="1"><textarea rows="1"  class="choices" type="text" placeholder="choice1" ></textarea></div>
        <div class="choice_sel"><input class="choice" type="radio" name="choice${id}" value="2"><textarea rows="1"  class="choices" type="text" placeholder="choice2" ></textarea></div>
        </div>
        <button class="add_mcq">add choice</button> 
        </div>`
        
       }
}

let quizProps ={
    buttonAdd : document.querySelectorAll(`.add_mcq`),
    textAreas: document.querySelectorAll(`.choices`),
    
    mcq: function(choiceNo,name){return `<div class="choice_sel"><input class="choice" type="radio" name="${name}" value="${choiceNo}"><textarea rows="1"  class="choices" type="text" placeholder="choice${choiceNo}" ></textarea></div>`},
}


mainpageElements.button.addEventListener('click',(e)=>{
    let lastChoice = e.target?.previousElementSibling?.querySelector(`.ques`).getAttribute('id');
    
    if(!lastChoice){
        lastChoice=0
    }else{
        lastChoice++;
    }

    mainpageElements.id=lastChoice;

    e.target.insertAdjacentHTML('beforebegin',premadeElementBlocks.MCQ(lastChoice)); 
    let mcqDiv =  e.target.previousElementSibling;
    setTimeout( ()=>{mcqDiv.style = ''} ,300);
   
    quizProps.buttonAdd = document.querySelectorAll(`.add_mcq`);
    mainpageElements.textAreas =  document.querySelectorAll(`.ques`)
    
    initiateEventHandler(mainpageElements.id);  
})

function initiateEventHandler(val){
    quizProps.buttonAdd[val].addEventListener('click',(e)=>{
    let sibbling = e.target.previousElementSibling;
    let childs =  sibbling.querySelectorAll('.choice_sel');
    let lastChoice = childs[childs.length-1].firstChild.getAttribute('value');
    let currentName = childs[childs.length-1].firstChild.getAttribute('name');

    +lastChoice++;
    sibbling.insertAdjacentHTML('beforeend',quizProps.mcq(lastChoice,currentName)); 
    quizProps.textAreas =  document.querySelectorAll(`.choices`);

    mainpageElements.choiceCont.addEventListener('input',(e)=>{
        if(e.target==='.choice_sel'){
            console.log(e.target);
            
        }
    })
    })

    addeventlistener(mainpageElements.textAreas[val]);
}


function addeventlistener(elm) { 
    elm.setAttribute("style", "height:" + ( elm.scrollHeight) + "px;overflow-y:hidden; transition:1s");
    elm.addEventListener("input",OnInput, false);

    function OnInput(){
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    }
 }




 



