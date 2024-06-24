let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let timer;

const updateDisplay = () => {
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('milliseconds').textContent = String(milliseconds).padStart(2, '0');
};

const startTimer = () => {
    timer = setInterval(() => {
        milliseconds += 1;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds += 1;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
        updateDisplay();
    }, 10);
};

const stopTimer = () => {
    clearInterval(timer);
};

const resetTimer = () => {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    document.getElementById('lapTimes').innerHTML = '';
};

const lapTime = () => {
    const lap = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    const li = document.createElement('li');
    li.textContent = lap;
    document.getElementById('lapTimes').appendChild(li);
};

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', lapTime);

updateDisplay();
