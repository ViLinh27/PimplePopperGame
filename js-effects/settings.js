const gamedur30sec = document.getElementById('30secgame');
const gamedur60sec = document.getElementById('60secgame');
const gamedur120sec = document.getElementById('120secgame');

export function setGameDuration(){
    let gamedur = 0;
    if(gamedur30sec.checked){
         gamedur= 30;
    }
    else if(gamedur60sec.checked){
         gamedur= 60;
    }
    else if (gamedur120sec.checked){
         gamedur= 120;
    }

    return gamedur;
}