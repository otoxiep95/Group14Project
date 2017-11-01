
//Intro

let scene_intro = document.querySelector(".scene_intro");

let Title = document.querySelector("#title");
let Instructions = document.querySelector("#instructions");
let names = document.querySelector ("#names");
let button = document.querySelector ("#button");
let gangster = document.querySelector ("#gangster");
let subtitles = document.querySelector (".subtitles");
let applause = document.querySelector ("#applause");





//INTRO


function pageLoad() {

    applause.play();
    applause.addEventListener('ended', gangsterTalk);

}

function gangsterTalk(){

    names.style.display="none";
    gangster.play();
    subtitles.style.display="block";
    gangster.addEventListener('ended', fadeIn);

}
function fadeIn(){

    crowd.style.display="none";
    subtitles.style.display="none";
    Title.style.display="none";
    scene_intro.classList.add("scene_intro2");
    setTimeout(InstructionsAppears, 10000);

}

function InstructionsAppears(){

    scene_intro.classList.remove("scene_intro2");
   scene_intro.classList.add("scene_intro3");
    button.style.display="inline";
}
pageLoad();
