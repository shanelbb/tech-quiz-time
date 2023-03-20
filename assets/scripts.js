// Target the start button, timer, quiz section (h2 and li)
const startBtn = document.querySelector('.start')
const nextBtn = document.querySelector(".next");
const timer = document.querySelector('.countdown')
const quiz = document.querySelector('.quiz')
const quizLayout = document.querySelector('.quiz-layout')
const questionEl = document.querySelector('.quiz-layout h2')
const options = document.querySelectorAll('.options')

let i;
let chooseQuestions = [...questionsArray]

// Function to randomly set quiz questions
const setQuiz = () => {
    console.log(chooseQuestions)
    i = Math.floor(Math.random() * chooseQuestions.length);
    let setQuestion = chooseQuestions[i].question;
    questionEl.textContent = setQuestion;
    let ans = 1
    options.forEach(opt => {
        opt.textContent = `${ans}: ${chooseQuestions[i].answers[ans]}`
        ans++
    })
    chooseQuestions.splice(i, 1)
};

const setTimer = () => {
    let seconds = 99;
    timer.textContent = 100
    const countdown = setInterval(() => {
        if (seconds >= 0) {
            console.log(seconds)
            timer.textContent = seconds
            seconds--
        } else {
            clearInterval(countdown)
        }
    }, 1000)
}


// Add an click event to start button to reveal quiz section and first question
const startQuiz = () => {
    setTimer();
    setQuiz();
    quiz.style.display = "block";
    nextBtn.style.display = "block"
    startBtn.style.display = 'none'
    let counter = 0
    const intervalId = setInterval(() => {
      setQuiz();
      counter++;
      // Stop quiz and go to results page once timer hits zero
      if (counter === 10) {
        clearInterval(intervalId);
        quizLayout.innerHTML = "<h2>Your final score:</h2><h3>10/10</h3>";
      }
    }, 10000)
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