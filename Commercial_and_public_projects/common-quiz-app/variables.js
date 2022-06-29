let start = document.querySelector(`.start`);
let startUser = document.querySelector(`.start_user`);
let make = document.querySelector(`.make`);

let quizId = document.querySelector(`h2`);
let add = document.querySelector(`.add`);
let delet = document.querySelector(`.delete`);
let done = document.querySelector(`.done`);
let show = document.querySelector(`.show`);
let back = document.querySelector(`.back`);
let floatingWindow = document.querySelector(`.floating_message`);
let floatingMessage = document.querySelector(`.floating_message-message`);
let userPage = false;

let latestCorrect = [];
let lastSelections = [];

let availableQuizzes = document.querySelector(`.available_quizzes`);

let innerContainer = document.querySelectorAll(".inner_container");

let quizCollection = {};

let availableQuizzesData = {};

let quizzes = 0;

let lastQuizInd = 0;

let quizPage = document.querySelector(`.make_give_quiz`);
let quizContainer = document.querySelector(`.quiz_container`);
let userResultPage = document.querySelector(`.userResultPage`);

let currentSeed = "";

let extraData = document.querySelectorAll(`.util`);
let timeLimit = 0;
let currentAuthor;
let currentTitle;

let interval = [];
