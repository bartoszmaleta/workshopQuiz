data = {
    "quizcontent": [
        { "question": "What 'git status' do?", "correct": 1, "a1": "Show branches", "a2": "Show status of git tree", "a3": "Push changes", "a4": "Commit changes" },
        { "question": "question text 2", "correct": 3, "a1": "answer 1", "a2": "answer 2", "a3": "answer 3", "a4": "answer 4" },
        { "question": "question text 3", "correct": 4, "a1": "answer 1", "a2": "answer 2", "a3": "answer 3", "a4": "answer 4" },
        { "question": "question text 4", "correct": 4, "a1": "answer 1", "a2": "answer 2", "a3": "answer 3", "a4": "answer 4" }
    ],
};

function randomQuestion() {
    const dataLength = data.quizcontent.length;
    let question = data.quizcontent[Math.floor(Math.random() * dataLength)];
    return question;
}

const button = document.querySelector("#random");
button.addEventListener('click', loadQuestion);

const answers = document.querySelectorAll(".answers>div");
answers.forEach(answer => {
    answer.addEventListener('click', checkAnswer);
})



function loadQuestion() {
    let question = randomQuestion();

    console.log(question);

    document.getElementById("question").innerText = question.question;
    const predefinedAnswers = [question.a1, question.a2, question.a3, question.a4];

    let i = 0;

    answers.forEach(answer => {
        console.log(answer);
        answer.innerText = predefinedAnswers[i++];
    })
}

function checkAnswer() {
    console.log(this);
    alert(this.getAttribute("data-id"))
}