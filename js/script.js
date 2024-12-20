let game = false;
let timer = 0;
let interval;

let displayTime = document.querySelector('#temps');

function startTimer() {
    interval = setInterval(() => {
        if (game) {
            timer++;
            displayTime.innerHTML = timer;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

game = true;
startTimer();
// game = false;
// stopTimer();