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
        <textarea rows="1"  class="choices" type="text" placeholder="Answer" ></textarea>
        </div>
        </div>
        <!--split-->`
    },

    WRITTENuserSide: function(id, question) {
        return `<div class="user_choice written" style="opacity:1;padding: 0; transition:.5s;">
        <div class="choice_sel"><p>${id+1}.</p><p>${question}</p></div>
        <div class="choice_cont answer">
        <textarea rows="1"  class="choices" type="text" placeholder="Answer" id=${id} ></textarea>`
    },

    MCQuserSide: function(id, question) {
        return `<div class="user_choice mcq" style="opacity:1;padding: 0; transition:.5s;">
        <div class="choice_sel"><p>${id+1}.</p><p class="ques">${question}</p></div>
        <div class="choice_cont">
        `
    },

}

let quizProps = {
    buttonAdd: '',
    mcq: function(choiceNo, name) { return `<div class="choice_sel"><input class="choice" type="radio" name="${name}" value="${choiceNo}"><textarea rows="1"  class="choices" type="text" placeholder="choice${choiceNo}" ></textarea></div>` },
    mcquserside: function(choiceNo, it, answer, name) { return `<div class="choice_sel"><input class="choice" type="radio" name="${name}" id="${choiceNo+""+it}"  value="${answer}"><p class="choices">${answer}</p></div>` },
}