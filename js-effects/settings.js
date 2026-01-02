const gamedur30sec = document.getElementById('30secgame');
const gamedur60sec = document.getElementById('60secgame');
const gamedur120sec = document.getElementById('120secgame');

export function setGameDuration(){
    if(gamedur30sec.checked){
        return 30;
    }
    if(gamedur60sec.checked){
         return 60;
    }
    if (gamedur120sec.checked){
         return 120;
    }
    //console.log("game duration: "+gamedur);//debug
    return 30
}