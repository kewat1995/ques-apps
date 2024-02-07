const questions = [
  {
    question: "which of the largest animal in the world ",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elepant", correct: false },
      { text: "Tiger", correct: false },
    ],
  },
  {
    question: "which of the smallest country in the world ",
    answers: [
      { text: "Vatican city", correct: true },
      { text: "America", correct: false },
      { text: "Japan", correct: false },
      { text: "Southafrica", correct: false },
    ],
  },
  {
    question: "which of the largest desert in the world ",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antartica", correct: true },
    ],
  },
  {
    question: "which of the smallest continent in the world ",
    answers: [
      { text: "Asia", correct: false },
      { text: "India", correct: true },
      { text: "Austallia", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
    resetState()
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML =
    questionNo + ". " + currentQuestion.question + "?";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if(answer.correct){
button.dataset.correct = answer.correct;
    }
    
    button.addEventListener("click" ,selectedAnswer)
  });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectedAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    console.log(isCorrect)
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
// console.log(answerButtons.childNodes)
    Array.from(answerButtons.children).forEach(button =>{
 if(button.dataset.correct === "true"){
button.classList.add("correct");
 }
 button.disabled = true;
 nextButton.style.display = "block";
    })
};

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score ${score} out of ${questions.length} !`;
    nextButton.innerHTML = `Play Again`;
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex ++ ;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click" ,()=>{

    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


startQuiz();
