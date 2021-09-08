let url;

let currentSeed;

let pageVariable = {
    floatingWindow: document.querySelector(`.floating_message`),
    floatingMessage: document.querySelector(`.floating_message-message`)
}

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

let mainpageElements1 = {
    button: document.querySelectorAll(`.common_btn`)[2],
    mcqQuestions: '',
    mcqChoices: '',
    mcqChoiceCounts: [],
    globalWrittenCount: 0,
    utilityBtns: document.querySelectorAll(`.utility_btn`),
    endSection: document.querySelector(`.end_section`),
    formGenBtn: document.querySelector(`.form_gen_link`),
    formGenPage: document.querySelector(`.generatedForm`),
    queryCont: document.querySelector(`.query_part`),
    editAccessCont: document.querySelector(`.edit_access_cont`),
    imputPassCont: document.querySelector(`.input_pass`),
    responseView: document.querySelector(`.response_count`),
    submitUserSide: document.querySelector(`.submit`),
    formOwnerView: document.querySelector(`.form_owner_name`),
    formNameView: document.querySelector(`.form_purpose_name`),
    submitAs: document.getElementById(`useras`),
    editAccessBtn: document.querySelector(`.edit_form_access`),
    passUserSide: document.getElementById(`passuser`),
    passConfirm: document.querySelector(`.submit_pass`),
    editOnly: document.querySelector(`.edit_only`),
}

let creatorSideElm = {
    formPass: document.getElementById("pass"),
    formOwner: document.getElementById(`owner`),
    formPurpose: document.getElementById(`purpose`),
    confirmBtn: document.querySelectorAll(`.common_btn`)[3],
    checkForAll: document.getElementById(`fillAll`),
}

let userSideElm = {
    genFormUser: document.querySelector(`.wrapper_genform`),
    endSectionUser: document.querySelector(`.end_section_user`)
}

let mainpageElements2 = {
    editBtnResponse: document.querySelector(`.see_responses`),
    editBtnDelete: document.querySelector(`.delete_form`),
    editBtnEdit: document.querySelector(`.edit_form`),
    responseViewCont: document.querySelector(`.response_view_window`),
    responseBack: document.querySelector(`.response_back`),
    responseViewContWindow: document.querySelector(`.response_view_window_cont`),
}

let toSendToDB = {
    mcqQuestions: [],
    mcqChoices: []
}

let upperCont = {
    button: document.querySelector(`.create_form`),
    arrowcont: document.getElementById(`toanimate_cont`),
    arrows: document.querySelectorAll(`.toanimate`),
}

let logics = {
    optionsIsOpen: false,
    hasPass: false,
    animated: false,
    hasInput: false,
}

let pageCommon = {
    button: document.querySelectorAll(`.common_btn`),
    buttonback: document.querySelectorAll(`.common_btn_back`),
    addbutton: document.querySelector(`.add`),
    deletebutton: document.querySelector(`.delete`),
    options: document.querySelector(`.select_options`),
    wrapper: document.querySelectorAll(`.wrapper`),
    wrapperGenForm: document.querySelector(`.wrapper_genform`),
    queryCont: document.querySelector(`.queries`),
}

let containerProp = {
    frameCount: 0,
    currentContainer: '',
    animationparams: [],
    sibblinganimeparam: [],
    lastSibbling: [],
    interval: null,
    nextCont: '',
    activeLayer: 1,
    layerValues: [20, 40, 60]
}

let globalClicks = {
    back: 0,
}