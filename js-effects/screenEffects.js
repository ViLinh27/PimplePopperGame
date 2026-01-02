import { resetScoreDisplay } from "./mainEffects.js";
import { timerCountdown,timerStop } from "./timerEffects.js";
import { setGameDuration } from "./settings.js";
//screens
const mainscreen = document.getElementById('start-screen');
const gamescreen = document.getElementById('game-screen');
const creditsscreen = document.getElementById('credits-screen');
const gameoverscreen = document.getElementById('gameover-screen');
const settingsscreen = document.getElementById('settings-screen');
//screen buttons
const stopBtn = document.getElementById('stop-btn');
const startBtn = document.getElementById('start-btn');
const backBtns = document.querySelectorAll('.back-btn');
const creditsBtn = document.getElementById('credits-btn');
const settingsbtn = document.getElementById('settings-btn');
const backaftergame = document.getElementById('back-after-game-btn');

startBtn.addEventListener('click',()=>{
    let gamedur = setGameDuration();
    backaftergame.style.display = 'none';
    showScreen('game');
    if (typeof timerCountdown === 'function') {
        timerCountdown(gamedur, ()=>{
            //make a game over screen
            //resetScoreDisplay();
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
});
backaftergame.addEventListener('click',()=>{
    showScreen('main');
    resetScoreDisplay();
});
backBtns.forEach(btn =>{
    btn.addEventListener('click',()=>{
        showScreen('main');
        resetScoreDisplay();
    })
})
creditsBtn.addEventListener('click',()=>{
    showScreen('credits');
})
settingsbtn.addEventListener('click',()=>{
    showScreen('settings');
})

function showScreen(screenName){
    mainscreen.style.display = 'none';
    gamescreen.style.display = 'none';
    creditsscreen.style.display = 'none';
    gameoverscreen.style.display = 'none';
    settingsscreen.style.display = 'none';
    if(screenName === 'main') mainscreen.style.display = 'block'
    if(screenName === 'game') gamescreen.style.display = 'block'
    if(screenName === 'credits') creditsscreen.style.display = 'block'
    if(screenName === 'gameover') gameoverscreen.style.display = 'block'
    if(screenName === 'settings') settingsscreen.style.display = 'block'
}