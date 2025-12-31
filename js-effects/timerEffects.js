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

    export function timerCountdown(timerduration){
        duration = 10000;//change later
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
                    new Notification('Popping Pimples', {
                        body: 'You are done.'//change later
                    });
                    //show start screen again??
                }
            }
        },1000);
    }

    function formatTime(seconds){
        const mins = Math.floor(seconds/60).toString().padStart(2,'0');
        const secs = (seconsd % 60).toString().padStart(2,'0');
        return `${mins}:${secs}`;
    }