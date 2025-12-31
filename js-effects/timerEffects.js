document.addEventListener('DOMContentLoaded',()=>{
    const snoozeTimerBtn = document.getElementById('snooze-btn');
    //Timer stuff
    const timerDisplay = document.querySelector('.timer-display');
    let timer;
    let timeLeft= 0;
    let remainingTimeWhenPaused = 0;
    let isPaused = false;
    let ringSound = null;

    function togglePause(){
        isPaused = !isPaused;
        snoozeTimerBtn.textContent = isPaused ? 'Resume' : 'Pause';

        if(isPaused){
            remainingTimeWhenPaused = timeLeft;
        }
    }
});
