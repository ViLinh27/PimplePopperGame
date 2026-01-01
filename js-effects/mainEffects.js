//face and pimple stuff
    const facecontainer = document.getElementById('faceContainer');
    const pimpleSrc = 'https://placehold.co/50x50';
    const numImgs = 5;
    const PIMPLE_WIDTH = 50;
    const PIMPLE_HEIGHT = 50;

    //minimm separation dist of 60 makes 10px gap
    const MIN_DIST_SQUARED = Math.pow(60,2);

    //score stuff
    const myGamescoreDisplay = document.querySelector('#game-screen .my-score p');
    const myGameOverscoreDisplay = document.querySelector('#gameover-screen .my-score p');
    let myscore = 0;

    function getRndPos(max){
        //generate random positoin between 0 and max (exc)
        return Math.floor(Math.random() * max);
    }//getRndPos(max)

    
    //Checks if a new pos overlaps with existing pimple pos.
    //parameter x  - curr X coordinate.
    //parameter y - curr Y coordinate.
    //array existingPimples - Array of already placed coordinates {x, y}.
    //method below returns {boolean} True if overlapping, false otherwise.
     
    function isOverlap(x,y,existingPimples){
        //loop to go through existing pimples and find distance
        for(const existing of existingPimples){
            const distSquared = Math.pow(x-existing.x,2) + Math.pow(y-existing.y,2);
            if (distSquared < MIN_DIST_SQUARED){
                return true;//we have an overlap
            }
        }
        return false;//we're good there's no overlap
    }

    function placeRndPimples(){
        //clear any pimples
        facecontainer.innerHTML = '';

        //container dimensions
        const containerW = facecontainer.offsetWidth;
        const containerH = facecontainer.offsetHeight;

        const placedPimples = [];//no overlap pimples
        //how much space we have avilable:
        const maxX = containerW - PIMPLE_WIDTH;
        const maxY = containerH - PIMPLE_HEIGHT;

        for(let i=0; i< numImgs; i++){
            //safe positions
            let safePos = false;
            let newX, newY;
            let attemptsPlaces = 0;
            const MAX_ATTEMPTS = 50;//so we don't have infinite loops, gotta settle
            while (!safePos && attemptsPlaces < MAX_ATTEMPTS){
                newX = getRndPos(maxX);
                newY = getRndPos(maxY);

                if (!isOverlap(newX, newY, placedPimples)){
                    safePos = true;
                }
                attemptsPlaces++;
            }

            if (safePos){
                //pimple safe position has been found
                //create the pimples
                const pimple = document.createElement('img');
                pimple.src = pimpleSrc;
                pimple.classList.add('pimples');
                pimple.alt = `Pimple ${i+1}`;

                //set the safe non overlapping coord
                pimple.style.top = newY + 'px';
                pimple.style.left = newX + 'px';

                facecontainer.appendChild(pimple);

                placedPimples.push({x:newX, y: newY});

                pimple.addEventListener('click',()=>{
                    console.log('pimple is clicked');//debug
                    myscore++;
                    updateScoreDisplay(myscore);
                    pimple.remove();
                })
            }else{
                console.warn(`Could not find a safe spot for pimple ${i + 1} after ${MAX_ATTEMPTS} attempts.`);
                //note: better to stop than crash
                break;//the stop
            }

            //wait for pimple img to load to get dimensions
            /* pimple.onload = () =>{
                const imgW = pimple.offsetWidth;
                const imgH = pimple.offsetHeight;

                //max space available and prevent overflow
                const maxX = containerW - imgW;
                const maxH = containerH - imgH;

                //set rnd top and left
                pimple.style.top = getRndPos(maxH) + 'px';
                pimple.style.left = getRndPos(maxX) + 'px';
            };

            facecontainer.appendChild(pimple); */
        }//loop through images to make sure we go through correct num pimples

    }//placeRndPimples()

    //place pimple images and load
    placeRndPimples();

    //re-randomize pimples every few seconds
    setInterval(placeRndPimples, 5000);

    function updateScoreDisplay(newScore){
        myscore = newScore;
        if(myGameOverscoreDisplay){
            myGameOverscoreDisplay.textContent = `${myscore}`;
        }
        if(myGamescoreDisplay){
            myGamescoreDisplay.textContent = `${myscore}`;
        }
    }
   updateScoreDisplay(myscore);