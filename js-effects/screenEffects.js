//screens
const mainscreen = document.getElementById('start-screen');
const gamescreen = document.getElementById('game-screen');
const creditsscreen = document.getElementById('credits-screen');
const gameoverscreen = document.getElementById('gameover-screen');
//screen buttons
const stopBtn = document.getElementById('stop-btn');
const startBtn = document.getElementById('start-btn');
const backBtns = document.querySelectorAll('.back-btn');
const creditsBtn = document.getElementById('credits-btn');
const backaftergame = document.getElementById('back-after-game-btn');
const GAME_DURATION = 10; //change later

startBtn.addEventListener('click',()=>{
    backaftergame.style.display = 'none';
    showScreen('game');
    if (typeof timerCountdown === 'function') {
        timerCountdown(GAME_DURATION, ()=>{
            //make a game over screen
            showScreen('gameover');
        }); 
    } else {
        console.error("timerCountdown function did not call");
    }
})
stopBtn.addEventListener('click',()=>{
    backaftergame.style.display = 'block';
    //clear time interval
    timerStop();
    //show main screen;
    //showScreen('main');
});
backaftergame.addEventListener('click',()=>{
    showScreen('main');
});
backBtns.forEach(btn =>{
    btn.addEventListener('click',()=>{
        showScreen('main');
    })
})
creditsBtn.addEventListener('click',()=>{
    showScreen('credits');
})

function showScreen(screenName){
    mainscreen.style.display = 'none';
    gamescreen.style.display = 'none';
    creditsscreen.style.display = 'none';
    gameoverscreen.style.display = 'none';
    if(screenName === 'main') mainscreen.style.display = 'block'
    if(screenName === 'game') gamescreen.style.display = 'block'
    if(screenName === 'credits') creditsscreen.style.display = 'block'
    if(screenName === 'gameover') gameoverscreen.style.display = 'block'
}