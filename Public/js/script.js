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