document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-answer');

    submitButton.addEventListener('click', checkAnswer);
});

function checkAnswer() {
    const correctAnswer = "4";

    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    let userAnswer = '';

    if (selectedOption) {
        userAnswer = selectedOption.value;
    }

    const feedbackElement = document.getElementById('feedback');

    feedbackElement.classList.remove('correct', 'incorrect');

    if (userAnswer === '') {
        feedbackElement.textContent = 'Please select an answer.';
        feedbackElement.style.color = '#FFA500'; 
    } else if (userAnswer === correctAnswer) {
        
        feedbackElement.textContent = "Correct! Well done."; 
        feedbackElement.classList.add('correct'); 
    } else {
        
        feedbackElement.textContent = "That's incorrect. Try again!"; 
        feedbackElement.classList.add('incorrect');
    }
}
