const quizApi = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'

// Let's get the elements first

let questionElement = document.getElementById('question')
let answer_container = document.getElementById('answers')
let next_button = document.getElementById('next-btn')

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    next_button.innerHTML = 'Next';
    quizMe()
}

async function quizMe(){
    let response = await fetch(quizApi)
    let data = await response.json()

    const questionData = data.results[currentQuestionIndex];
    const question_no = currentQuestionIndex + 1;
    let question = questionData.question;
    let answers = [...questionData.incorrect_answers, questionData.correct_answer];


    // Setting the Question
    questionElement.innerHTML = `${question_no}: ${question}`;
    

    // Clear previous answers
    answer_container.innerHTML = '';
    
    // Create answer buttons dynamically
    answers.forEach(answer => {
        let button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = answer;
        button.onclick = () => checkAnswer(answer, questionData.correct_answer, answers.indexOf(answer));
        answer_container.appendChild(button);
    });
}


function checkAnswer(selectedAnswer, correctAnswer, array) {
    let button = document.getElementsByClassName('btn');
    // console.log(button);
    // button.style.color = 'green'
    if (selectedAnswer === correctAnswer) {
        score++;
        button[array].style.backgroundColor = 'green'
        button[array].style.color = 'white'
        button[array].disabled = true;
    } else {
        button[array].style.backgroundColor = 'red'
        button[array].style.color = 'white'
        button[array].disabled = true;

    }


    // Making Sure if user selects wrong button above so highlight the correct button too
    for (let i = 0; i < button.length; i++) {
        if (button[i].textContent.trim() === correctAnswer) {
            button[i].style.backgroundColor = 'green';
            button[i].style.color = 'white';
            break;
        }
    }
      // Disable all buttons after the user selects an answer
      for (let i = 0; i < button.length; i++) {
        button[i].style.cursor = 'not-allowed';
        button[i].disabled = true;
    }

    next_button.style.display = 'block'
}


    next_button.addEventListener('click',()=>{
        currentQuestionIndex++;
        if (currentQuestionIndex < 10) {
            quizMe();
            next_button.style.display = 'none'
        } else {
            questionElement.innerHTML = `Your total score: ${score} out of ${currentQuestionIndex}`;
            answer_container.innerHTML = '';
            next_button.innerText = 'Restart';
            // next_button.style.display = 'none'
            next_button.onclick = () => startQuiz();
        }
    });

startQuiz();