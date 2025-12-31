document.addEventListener('DOMContentLoaded',()=>{
    //screens
    const mainscreen = document.getElementById('start-screen');
    const gamescreen = document.getElementById('game-screen');
    //screen buttons
    const snoozeTimerBtn = document.getElementById('snooze-btn');
    const stopBtn = document.getElementById('stop-btn');
    const startBtn = document.getElementById('start-btn');

    startBtn.addEventListener('click',()=>{
        showScreen('game');
    })
    stopBtn.addEventListener('click',()=>{
        //clear time interval
        //show main screen;
        showScreen('main');
    });

    function showScreen(screenName){
        mainscreen.style.display = 'none';
        gamescreen.style.display = 'none';

        if(screenName === 'main') mainscreen.style.display = 'block'
        if(screenName === 'game') gamescreen.style.display = 'block'
    }

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