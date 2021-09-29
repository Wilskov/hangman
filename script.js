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

const init = () => {
    //console.log('>> #init');
    
    //Attach elements
    element.score = document.querySelector("#score");
    element.answer = document.querySelector("#answer");
    element.choices = document.querySelector("#choices");

    //Pick word
    word = picWord();
    //console.log("word", word);
    
    // - create word mapping
    wordMapping = getWordMapping(word);
    //console.log(wordMapping);
   
    //Generate choices
    choices = generateChoices();
    //console.log(choices);
    
    // - create choices mapping
    choicesMapping = getChoicesMapping(choices);
    //console.log("choicesMapping", wordMapping);
    
    //Display word
    displayWord(wordMapping);

    //Dsiplay choises
    displayChoices(choicesMapping);

    //Display score
    displayScore
    //Listen events
    //      - mouse events 
    //      -keybord events
    //check letter
    // - if not in word: add score
    // - if in word: disp^lay letter
    // - endGame 
    //   - if score == max: loseGame
    //   - if letter are vivisble: winGame

};


// Same as window.addEventlistener("load", init);
window.addEventListener("load", () => {
    
    init();

});


// stack overflow random integer    
function getRandomInteger(min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
