const checkLetter = (letter) => {

    let hasAlreadyBeenChosen = false;

    choicesMapping.forEach((letterMapping) => {

        if (letterMapping.letter === letter) {

            if (letterMapping.isChosen === true) {

                hasAlreadyBeenChosen = true;
            }
        }

    });

    if (hasAlreadyBeenChosen === false) {

        
        let isLetterInWord = false;
        let isAllLetterFound = true;
       
        wordMapping.forEach((letterMapping) => {

          
            if (letterMapping.letter === letter) {

                letterMapping.isVisible = true;
                isLetterInWord = true;
            }

            if (letterMapping.isVisible === false) {

                isAllLetterFound = false;
            }
        });

        choicesMapping.forEach((letterMapping) => {

            if (letterMapping.letter === letter) {

                letterMapping.isChosen = true;
            }
        });

        displayChoices(choicesMapping);
        if (isLetterInWord === true) {

            displayWord(wordMapping);
        }
        else {

            scoreCount++
            displayScore();
           
        }


        if (scoreCount === maxScore) {

            endGame();

        }
        if (isAllLetterFound) {

            winGame();
        }
       
    }

};

const endGame = () => {

    wordMapping.forEach(w => w.isVisible = true);
    displayWord(wordMapping);
    document.querySelector("body").style.backgroundColor = "red";
    element.choices.innerHTML = `<h1>You die</h1>`;
    
    

};

const winGame = () => {

    element.choices.innerHTML = `<h1>You live</h1>`;
};

const displayChoices = (choicesMapping) => {

    const choicesHtml = choicesMapping.map((letterMapping) => {

        if (letterMapping.isChosen === false) {

            return `<li>${letterMapping.letter}</li>`;
        }
        else {

            return `<li class='disabled'>${letterMapping.letter}</li>`;
        }
    });
    element.choices.querySelector("ul").innerHTML = choicesHtml.join("");

};

const displayScore = () => {// need to add img 1<8 to display one an one

    element.score.innerHTML = `<img src= "img/00${scoreCount}.png" alt= "hangman" />`; //y must call all fonction to cant listen easly 'element'
};

const displayWord = (wordMapping) => { // must call all fonction to cant listen easly 'element'

    const wordHtml = wordMapping.map((letterMapping) => {

        if (letterMapping.isVisible === true) {// Booleen is default true  

            return `<li>${letterMapping.letter}</li>`;
        }
        else {

            return `<li>_</li>`
        }
    });
   
    element.answer.querySelector("ul").innerHTML = wordHtml.join("");

};

const generateChoices = () => {

    const choices = [];
    //ascii code: https://theasciicode.com.ar/
    for (let index = 65; index <= 90; index++) {

        choices.push(String.fromCharCode(index));

    }
    return choices;
};

const getChoicesMapping = (choices) => {

    const choicesMapping = choices.map((letter) => {

        return {

            letter,
            isChosen: false
        };
    });
    return choicesMapping;
};

const getWordMapping = (word) => {

    const wordArr = word.split("");
    
    const wordMapping = wordArr.map((letter, index) => {

        let isVisible = false;
        if (index === 0 || index == wordArr.length - 1) {

            isVisible = true;
        }
        return {

            letter,
            isVisible
        };
    });
    return wordMapping;
};

const picWord = () => {

    const randomIndex = getRandomInteger(0, words.length - 1);
    return words[randomIndex];
};
