const element = {

    score: null,
    answer: null,
    choices: null
};

const words = [

    "POWER",// [0]
    "CONGRATULATION", // [1]
    "GOOD",// [2]
    "VIBES",// [3]
    "JAVASCRIPT"//[4]
];

let choices = [];
let word = "";
let wordMapping = [];
let choicesMapping = [];
let scoreCount = 0;
let maxScore = 8;// number of image to lose 

const init = () => {
   
    element.score = document.querySelector("#score");
    element.answer = document.querySelector("#answer");
    element.choices = document.querySelector("#choices");

    word = picWord();

    wordMapping = getWordMapping(word);
  
    
    choices = generateChoices();
    
    choicesMapping = getChoicesMapping(choices);

    displayWord(wordMapping);

    displayChoices(choicesMapping);

    element.choices.addEventListener("click", ({ target }) => {
       
        if (target.matches("li")) {

            checkLetter(target.innerHTML);

        }
    });
   
     document.addEventListener("keydown", ({ keyCode }) => {

        const letter = (String.fromCharCode(keyCode));
     
        if (keyCode >= 65 && keyCode <= 90);
        checkLetter(letter);
    });    
        
};

// Same as window.addEventlistener("load", init);
window.addEventListener("load", () => {

    init();

});

// stack overflow random integer    
function getRandomInteger(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
