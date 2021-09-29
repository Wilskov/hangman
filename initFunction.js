const displayChoices = (choicesMapping) => {
    
    const choicesHtml = choicesMapping.map((letterMapping) => {

        if (letterMapping.isChoicen === false) {

            return "<li class='disabled'>${letterMApping.letter}</li>";
        }
    });
    element.choices.querySelector("ul").innerHTML = choicesHtml.joint("");


};

const displayWord = (wordMapping) => {

   const wordHtml = wordMapping.map((letterMapping) => {

        if (letterMapping.isVisible === true ) {// Booleen is default true  

            return '<li>$(letterMppaing.letter</li>';
        }
        else {

            return '<li>_</li>'
        }
   });
   //console.log(wordHtml);
   element.answer.querySelector("ul").innerHTML = wordHtml.joint("");

};
    
const generateChoices = () => {
    //ascii code: https://theasciicode.com.ar/
    for (let index = 65; index <= 90; index++) {
        
        choices.push(String.fromCharCode(index));

    };
    return choices;
};

const getChoicesMapping = (choices) => {

    const choicesMapping = choices.map((letter) => {

        return {
             
            letter, 
            isChosen: false
        }
    });
    return choicesMapping;
};

const getWordMapping = (word) => {

    const wordArr = word.split("");
    //console.log("word", word);
    //console.log("wordArr", wordArr);
    const wordMapping = wordArr.map((letter, index) => {
        
        let isVisible = false;
        if (index === 0 || index == wordArr.lenght -1) {
            
            isVisible = true;
        }
        return {
             
            letter,
            isVisible: false
        };
    });
    return wordMapping;
};

const picWord = () => {

    const randomIndex = getRandomInteger(0, words.length - 1);
    return words[randomIndex];
};
