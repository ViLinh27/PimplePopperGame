const snoozeTimerBtn = document.getElementById('snooze-btn');
//Timer stuff
const timerDisplay = document.querySelector('.timer-display h1');
let timer;
let timeLeft= 0;
let remainingTimeWhenPaused = 0;
let isPaused = false;

function togglePause(){
    isPaused = !isPaused;
    snoozeTimerBtn.textContent = isPaused ? 'Resume' : 'Pause';

    if(isPaused){
        remainingTimeWhenPaused = timeLeft;
    }
}

export function timerCountdown(timerduration, callback){
    const duration = timerduration;
    clearInterval(timer);

    isPaused = false;
    timeLeft = duration;
    timerDisplay.textContent = formatTime(timeLeft);

    timer = setInterval(()=>{
        if(!isPaused && timeLeft > 0){
            timeLeft--;
            timerDisplay.textContent = formatTime(timeLeft);

            if(timeLeft<=0){
                //play alarm sound
                clearInterval(timer);
                if(typeof callback === 'function'){
                    callback();
                }
                //show start screen again??
            }
        }
    },1000);
}

export function timerStop(){
    clearInterval(timer);
    timerDisplay.textContent = '00:00';
    isPaused = false;
    snoozeTimerBtn.querySelector('.btn-text').textContent = 'Snooze';
}

function formatTime(seconds){
    const mins = Math.floor(seconds/60).toString().padStart(2,'0');
    const secs = (seconds % 60).toString().padStart(2,'0');
    return `${mins}:${secs}`;
}

snoozeTimerBtn.addEventListener('click',togglePause);