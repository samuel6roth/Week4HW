let start = document.getElementById('start')
let main = document.getElementById('main')
let quizContainer = document.getElementById('quiz-container')
let correct = true
let quizTime = 60;
let wrongAnswer = 1;
let questionNumber = 0;
let score = 0;
let timerPenalize = 10;
let timeLeft = document.getElementById("countdown");
let userHighscoresTable = document.getElementById('HS');


let choiceA = document.getElementById('choiceA'),
    choiceB = document.getElementById('choiceB'),
    choiceC = document.getElementById('choiceC'),
    choiceD = document.getElementById('choiceD'),
    questionText = document.getElementById('questionText');

let questionsTable = [
    { question : "Commonly used data types DO NOT include:",
    answerA : "strings",
    answerB : "booleans",
    answerC : "alerts",
    answerD : "numbers",
    correctAnswer : "C" 
    },

    { question: "Arrays in JS can be used to store",
    answerA : "Numbers and strings",
    answerB : "Other arrays",
    answerC : "Booleans",
    answerD : "All of the above",
    correctAnswer : "D"
    },

    { question: "The condition in an if / else statement is enclosed within ____." ,
    answerA : "Quotes",
    answerB : "Curly brackets",
    answerC : "Parentheses",
    answerD : "Square Brackets",
    correctAnswer : "C"
    },

    { question: "String values must be enclosed within ___ when being assigned to variables.",
    answerA : "Commas",
    answerB : "Curly brackets",
    answerC : "Quotes",
    answerD : "Parentheses",
    correctAnswer : "C"
    },

    { question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerA : "Javascript",
    answerB : "terminal / bash",
    answerC : "for loops",
    answerD : "console.log",
    correctAnswer : "D"
    }
];

start.addEventListener('click', startGame)
//this is the main function that contains the other functions, which starts the game
function startGame () {
    main.style.display = 'none';
    quizContainer.style.display = 'block'
    StartDownCounting()
    verifyAnswer()
}

//This sets the questions and answers for the HTML
function StartDisplayingQuestions() {
    let qst = questionsTable[questionNumber];
    questionText.innerText = qst.question;
    choiceA.textContent = qst.answerA;
    choiceB.textContent = qst.answerB;
    choiceC.textContent = qst.answerC;
    choiceD.textContent = qst.answerD;
    console.log('click')
}

//This is the function for the timer
function StartDownCounting() {       
    let interval = setInterval( () => { 
        //Keeps timer color black
        if (quizTime <= 60 && quizTime >= 11) { 
            timeLeft.style.color = "black"; 
        }
        //Turns timer color red
        else if (quizTime <= 10 && quizTime >= 0) {
            timeLeft.style.color = "red";
        }

        timeLeft.innerText = quizTime;
        quizTime -= 1;

        //If time runs out, alert message pops up
        if (quizTime < 0) {
            clearInterval(interval);
            alert("Time's up, try again")
            
        }
    }, 1000);
}

//This is where an answer is selected and next question appears
function NextQ() {
    if (correct){
        questionNumber++;
        console.log('choicesel')
        score++;
    }
    else{
        questionNumber++;
        score = score - wrongAnswer;
        quizTime = quizTime - timerPenalize
    }
}


document.getElementById('answer-buttons').addEventListener('click', (verifyAnswer))
//This function sets the questions
function verifyAnswer() {
    if (questionNumber <= questionsTable.length) {
        console.log(questionNumber, questionsTable)
        StartDisplayingQuestions()
        NextQ()
    }

    if (score === 5) {
        let collectUserName = prompt('Your score is: [ ' + quizTime + ' ] Please enter your initials in the box below.')
        location.href = './HS.html'
    }
}