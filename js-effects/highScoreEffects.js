import { myscore } from "./mainEffects.js";
const LEADERBOARD_KEYS = {
    "shortGame": "30SECPUBLICKEY GOES HERE",//put public keys here
    "normalGame": "60SECPUBLIC KEY GOES HERE",//put public keys here
    "longGame": "120sec public key goes here"//put public keys here
}
function submitScore(gameID,gameduration, playerName, playerscore){
    const publicKey = LEADERBOARD_KEYS[gameduration];
    //make post request to api endpoint with pub key, name ad score
    //api uses pub key for submission and retrieval
}

function displayLeaderboard(gameID, gameduration){
    const publicKey = LEADERBOARD_KEYS[gameduration];
    //make GET reqeust to api endpoint to fetch top entries for this current key
    //parse json response and display in game UI
}