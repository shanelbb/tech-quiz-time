// Target the start button, timer, quiz section (h2 and li)
const startBtn = document.querySelector('.start')
const timer = document.querySelector('.countdown')
const quiz = document.querySelector('.quiz')
const quizLayout = document.querySelector('.quiz-layout')
const questionEl = document.querySelector('.quiz-layout h2')
const answerContainer = document.querySelector('.answer-container')
const options = document.querySelectorAll('.options')
const msgContainer = document.querySelector('.msg-container')


let i;
let isCorrect;
let questionCounter = 6
let chooseQuestions = [...questionsArray]
let countdown;
let seconds = 60

const setTimer = () => {
    countdown = setInterval(() => {
        seconds--;
        timer.textContent = seconds;
        if (seconds < 1) {
            clearInterval(countdown);
            seconds = 0
            quizLayout.innerHTML = `<h2>You've run out of time</h2>`;
        }
    }, 1000);
};


// Function to randomly set quiz questions
const setQuiz = () => {
    i = Math.floor(Math.random() * chooseQuestions.length);
    let setQuestion = chooseQuestions[i].question;
    let correctAnswer = chooseQuestions[i].correct
    questionEl.textContent = setQuestion;
    answerContainer.style.display = 'block'
    let ans = 1
    options.forEach(opt => {
        opt.textContent = `${chooseQuestions[i].answers[ans]}`
        ans++
    })
    checkAnswer(correctAnswer);
    
    chooseQuestions.splice(i, 1);
};

const setInputResult = (res, answer) => {
    answerContainer.style.display = "none";
    msgContainer.style.display = "block";
    msgContainer.innerHTML = `
                <h3>That's ${res}</h3>
                <p class='correct'>Answer: ${answer}</p>
                <button class="nextBtn ${res}Btn">Next Question</button>`;
    return
}

const goToNext = () => {
    setTimer()
    if (!isCorrect) {
        seconds -= 10
        timer.textContent = seconds
        timer.style.color = "#000"
    }
    questionCounter--;

    
    if (questionCounter > 0) {
      msgContainer.style.display = "none";
        setQuiz();
        return
    } else {
        clearInterval(countdown)
        msgContainer.innerHTML = `<h2>Your final score:</h2><h3>${seconds}</h3>`;
        return;
    }
}

const checkAnswer = (correct) => {
    let userAnswer;

    answerContainer.addEventListener('click', function (e) { 
        userAnswer = e.target.textContent;
        if (userAnswer === correct) {
            setInputResult("correct", correct);
            isCorrect = true
            msgContainer.addEventListener("click", goToNext);
         } else {
            setInputResult("incorrect", correct);
            isCorrect = false
            timer.textContent = "-10";
            timer.style.color = "#a62c2b";
            clearInterval(countdown)
            msgContainer.addEventListener("click", goToNext);
         }
    })  
    
}
// Add an click event to start button to reveal quiz section and first question
const startQuiz = () => {
    setTimer();
    setQuiz();
    quiz.style.display = "block";
    startBtn.style.display = 'none';
}
    
startBtn.addEventListener("click", startQuiz)


 



// Create a timer to count down remaining time to finish quiz. 

// Have timer element show countdown

// Variable to take in user response

// Function to determine if answer is correct

// Function to remove 5secs for each incorrect response



// Add an input and button where user can put in initials and submit their score.

// Show user the high score page with top 10 scores

// ** Stretch Goal **

// Store user results into a database (MongoDB) so the leader board will reflect all user scores 

// document.querySelector(".nextBtn").addEventListener("click", () => {
//   questionCounter--;
//   if (questionCounter > 0) {
//     msgContainer.style.display = "none";
//     setQuiz();
//   } else {
//     msgContainer.innerHTML = `<h2>Your final score:</h2><h3>${seconds}</h3>`;
//     return;
//   }
// });  