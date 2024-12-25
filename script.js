const questions = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is 2 + 2?', answer: '4' }
];

let score = 0;
let currentQuestionIndex = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestionIndex].question;
    } else {
        document.getElementById('quiz').innerHTML = `<h2>Your final score: ${score}/${questions.length}</h2>`;
    }
}

function submitAnswer() {
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
        score++;
        document.getElementById('result').innerText = 'Correct!';
    } else {
        document.getElementById('result').innerText = `Wrong! The correct answer is ${questions[currentQuestionIndex].answer}.`;
    }
    currentQuestionIndex++;
    document.getElementById('answer').value = '';
    displayQuestion();
    document.getElementById('score').innerText = `Score: ${score}`;
}

// Start the quiz
displayQuestion();
