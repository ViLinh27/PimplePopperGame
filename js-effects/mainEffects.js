document.addEventListener('DOMContentLoaded', ()=>{
    const facecontainer = document.getElementById('faceContainer');
    const pimpleSrc = 'https://placehold.co/50x50';
    const numImgs = 5;

    function getRndPos(max){
        //generate random positoin between 0 and max (exc)
        return Math.floor(Math.random() * max);
    }//getRndPos(max)

    function placeRndPimples(){
        //clear any pimples
        facecontainer.innerHTML = '';

        //container dimensions
        const containerW = facecontainer.offsetWidth;
        const containerH = facecontainer.offsetHeight;

        for(let i=0; i< numImgs; i++){
            //create the pimples
            const pimple = document.createElement('img');
            pimple.src = pimpleSrc;
            pimple.classList.add('pimples');

            //wait for pimple img to load to get dimensions
            pimple.onload = () =>{
                const imgW = pimple.offsetWidth;
                const imgH = pimple.offsetHeight;

                //max space available and prevent overflow
                const maxX = containerW - imgW;
                const maxH = containerH - imgH;

                //set rnd top and left
                pimple.style.top = getRndPos(maxH) + 'px';
                pimple.style.left = getRndPos(maxX) + 'px';
            };

            facecontainer.appendChild(pimple);
        }//loop through images to make sure we go through correct num pimples

    }//placeRndPimples()

    //place pimple images and load
    placeRndPimples();

    //re-randomize pimples every few seconds
    setInterval(placeRndPimples, 5000);
});