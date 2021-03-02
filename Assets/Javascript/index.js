let timeLeft = document.getElementById("countdown");
let userHighscoresTable = document.getElementById('eeee');


let quizTime = 75;
let questionNumber = 0;
let score = 0;

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



let start = document.getElementById('start')
let main = document.getElementById('main')
let quizContainer = document.getElementById('quiz-container')

start.addEventListener('click', StartDisplayingQuestions)

function StartDisplayingQuestions() {
    main.style.display = 'none';
    StartDownCounting()
    quizContainer.style.display = 'block'
    let qst = questionsTable[questionNumber];
    questionText.innerText = qst.question;
    choiceA.textContent = qst.answerA;
    choiceB.textContent = qst.answerB;
    choiceC.textContent = qst.answerC;
    choiceD.textContent = qst.answerD;
    console.log('click')
}

function StartDownCounting() {       
    let interval = setInterval( () => { 
        if (quizTime <= 75 && quizTime >= 11) { 
            timeLeft.style.color = "black"; 
        }
        else if (quizTime <= 10 && quizTime >= 0) {
            timeLeft.style.color = "red";
        }

        timeLeft.innerText = quizTime;
        quizTime -= 1;

        if (quizTime < 0) {
            clearInterval(interval);
            alert("Time's up, try again")
            location.href = './home.html';
            
        }
    }, 1000);
}

/*function answerSelection() {
    let answerBtns = document.getElementById('answer-buttons')
    answerBtns.addEventListener('click')
}*/


function VerifyAnswer(answer) {
    if (answer === questionsTable[questionNumber].correctAnswer) {
         questionNumber++;
         score++;

    if (questionNumber < questionsTable.length) {
         StartDisplayingQuestions();
         }
    }

    else {
        quizTime = parseInt(timeLeft.innerText);
        quizTime -= 10;
        timeLeft.innerText = quizTime;
    }

    if (score === 5) {
        let collectUserName = prompt('Your score is: [ ' + quizTime + ' ] Please enter your initials in the box below.')
        location.href = './HS.html'
    }
}

