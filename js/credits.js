let credits=document.querySelector("#credits");
let theEnd=document.querySelector("#theEnd");
let blackScreen=document.querySelector("#blackScreen");
let song= document.querySelector("#creditsSong");

song.play();
theEnd.classList.add('translation');
blackScreen.classList.add('translation');
theEnd.addEventListener('animationend', translateCredits);

function translateCredits(){

    credits.classList.add('translationCredits');


}
