let counter = 0;
let intervalId;
let likeCount = 0;
let isPaused = false;

function incrementCounter() {
    counter++;
    document.getElementById('counter').textContent = counter;
}

window.onload = () => {
    intervalId = setInterval(incrementCounter, 1000);
};

document.getElementById('plus').addEventListener('click', () => {
    counter++;
    document.getElementById('counter').textContent = counter;
});

document.getElementById('minus').addEventListener('click', () => {
    counter--;
    document.getElementById('counter').textContent = counter;
});

document.getElementById('heart').addEventListener('click', () => {
    likeCount++;
    const likesList = document.querySelector('.likes');
    const newLike = document.createElement('li');
    newLike.textContent = `❤️ ${counter} has ${likeCount} likes`;
    likesList.appendChild(newLike);
});

document.getElementById('pause').addEventListener('click', () => {
    if (!isPaused) {
        clearInterval(intervalId);
        document.getElementById('pause').textContent = 'resume';
        disableButtons(true);
        isPaused = true;
    } else {
        intervalId = setInterval(incrementCounter, 1000);
        document.getElementById('pause').textContent = 'pause';
        disableButtons(false);
        isPaused = false;
    }
});

function disableButtons(disable) {
    document.getElementById('minus').disabled = disable;
    document.getElementById('plus').disabled = disable;
    document.getElementById('heart').disabled = disable;
    document.getElementById('submit').disabled = disable;
}

document.getElementById('comment-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;
    if (commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.textContent = commentText;
        document.getElementById('list').appendChild(commentDiv);
        commentInput.value = ''; 
    }
});
