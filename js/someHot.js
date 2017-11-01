//AUDIO
let popopido = document.querySelector("#popopido");
let booo = document.querySelector("#boo");
let badsax = document.querySelector("#badsax");
let gasp = document.querySelector("#gasp");
let gunShot = document.querySelector("#guns");
let crowLose = document.querySelector("#crowdLose");
let crowdEvent = document.querySelector("#crowdEvent");
let zowieSound = document.querySelector("#zowieSound");
let applause = document.querySelector("#applause");
let daphneEvent = document.querySelector("#daphneEvent");
let daphneGirlEvent = document.querySelector("#daphneGirlEvent");
let credits = document.querySelector("#credits");



//CHARACTERS
let daphne = document.querySelector("#daphne");
let josephine = document.querySelector("#josephine");
let sugar = document.querySelector("#sugar");
let zowie = document.querySelector("#zowie");
let maestro = document.querySelector("#maestro");
let crowd = document.querySelector("#crowd");
let wig = document.querySelector("#wig");
let band = document.querySelector('#band');

let scene = document.querySelector('.scene');
let lights = document.querySelector('#spotLights');

//PROPS
//let curtainLeft = document.querySelector("#leftCurtain");
//let curtainRight = document.querySelector("#rightCurtain");
let curtains = document.querySelector("#curtains");
let endCurtains = document.querySelector("#curtainsClose");



//Click
var click = 0;
var daphneClick = false;
var josephineClick = false;
var zowieClick = false;
var crowdClick = false;
var wigClick = false;

var zowieShowedUp = false;
//experiment timer
//var imgClick = false;
var counter = -1;
var counterZowie = -1;

var randomZowie = -1;
var zowiePlace = 0;
var eventIndex = 0;

curtains.addEventListener('animationstart', startSong);

function getRandom() {
    randomZowie = Math.random() * 100;
}

function startSong() {
    console.log("game starts")
    popopido.play();
    popopido.volume = 0.4;
    curtains.addEventListener('animationend', openCurtains);

}

function openCurtains() {
    curtains.style.display = "none";
    setTimeout(skirtEvent, 5000);
}

function skirtEvent() {
    console.log("skirt event starts")
    eventIndex = 1;
    daphne.setAttribute('src', 'img/daphneevent.gif');
    daphne.classList.add("glow");
    gasp.play();
    counter = 10;
    setTimeout(countDownSkirt, 1000);
    daphne.addEventListener('click', winSkirt);
}

function winSkirt() {
    console.log("clicked, pass skirt");
    daphne.setAttribute('src', 'img/daphne.gif');
    daphneClick = true;
    //gasp.pause();
    daphne.classList.remove("glow");
    daphne.removeEventListener('click', winSkirt);
    setTimeout(downSugar, 5000);

}

function countDownSkirt() {
    console.log(counter);
    counter--;

    if (counter == 0 && !daphneClick) {
        lose();

    } else if (counter > 0 && !daphneClick) {
        setTimeout(countDownSkirt, 1000)
    }
}


function countDownZowie() {
    console.log("Zowie " + counterZowie)
    counterZowie--;
    if (counterZowie == 0 && !zowieClick) {
        zowie.removeEventListener('click', delay);
        lose();

    } else if (counterZowie > 0 && !zowieClick) {
        setTimeout(countDownZowie, 1000);
    }
}

function zowieHere() {
    console.log("zowie starts");
    console.log("zowiePlace=" + zowiePlace)
    getRandom();
    counterZowie = 10;
    zowieClick = false;
    zowieShowedUp = false;
    if (randomZowie > 0 || eventIndex == 2) {
        zowieShowedUp = true;
        //zowieSound.play();
        switch (eventIndex) {
            case 2:
                console.log("zowie is here 1");
                zowie.style.top = "30px";
                zowie.style.right = "-200px";
                zowie.classList.add("zowieAnim1");
                zowiePlace++;

                break;
            case 3:
                console.log("zowie is here 2");
                zowie.style.top = "-600px";
                zowie.style.right = "350px";
                zowie.classList.add("zowieAnim2");
                zowiePlace++;
                break;
            case 4:
                console.log("zowie is here 3");
                zowie.style.top = "10px";
                zowie.style.left = "-130px";
                zowie.classList.add("zowieAnim3");
                break;

        }
        countDownZowie();
        zowie.addEventListener('ended', zowieSpeaks);
        zowie.addEventListener('click', delay);

    }



}

function zowieSpeaks() {
    console.log("zowieSpeaks?")
    zowieSound.play();
}

function delay() {
    console.log("zowie clicked")
    // if(zowieShowedUp==true){
    zowieClick = true;
    zowieSound.pause();
    switch (eventIndex) {
        case 2:
            zowie.classList.remove("zowieAnim1");
            zowie.style.top = "-600px";
            zowie.style.right = "350px";
            break;
        case 3:
            zowie.classList.remove("zowieAnim2");
            zowie.style.top = "10px";
            zowie.style.left = "-130px";
            //nextEvent
            break;
        case 4:
            zowie.classList.remove("zowieAnim3");
            //nextEvent
            break;


    }
    zowie.removeEventListener('click', delay);
}




function downSugar() {
    console.log("sugar down")
    sugar.setAttribute('src', 'img/marilyndown.gif');
    setTimeout(surprise, 700);
}

function surprise() {
    console.log("suprised faces")
    josephine.setAttribute('src', 'img/josephinesurprized.png');
    daphne.setAttribute('src', 'img/daphnesurprised.png');
    booo.play();
    setTimeout(popopidoEvent, 700);
}



function popopidoEvent() {
    console.log("popopido event");

    eventIndex = 2;

    counter = 10;
    daphneClick = false;
    josephineClick = false;
    zowieHere();
    maestro.setAttribute('src', 'img/conductorevent.png');
    josephine.classList.add("glow");
    daphne.classList.add("glow");
    //booo.play();
    setTimeout(countDownPopopido, 1000);
    josephine.addEventListener('click', josephineClicked);
    daphne.addEventListener('click', daphneClicked);


}

function countDownPopopido() {
    console.log(counter)
    counter--;
    if (counter == 0 && (!josephineClick || !daphneClick)) {
        josephine.removeEventListener('click', josephineClick);
        daphne.removeEventListener('click', daphneClicked);
        lose();

    } else if (counter > 0 && (!josephineClick || !daphneClick)) {
        setTimeout(countDownPopopido, 1000);
    }
}

function josephineClicked() {
    console.log("josephine clicked " + eventIndex);
    josephineClick = true;
    josephine.classList.remove("glow");
    josephine.setAttribute('src', 'img/josephine.gif');
    if (eventIndex == 2) {
        popopidoWin();
    } else if (eventIndex == 3) {
        winSax();
    }


}

function daphneClicked() {
    console.log("daphne clicked");
    daphneClick = true;
    daphne.classList.remove("glow")
    daphne.setAttribute('src', 'img/daphne.gif');
    if (eventIndex == 2) {
        popopidoWin();
    } else if (eventIndex == 4) {
        daphneEvent.pause();
        daphneGirlEvent.play();
        wigWin();
    }
}



function popopidoWin() {
    if (josephineClick == true && daphneClick == true) {
        console.log("passed");
        boo.pause();
        maestro.setAttribute('src', 'img/conductor.gif');
        sugar.setAttribute('src', 'img/marilyn.gif');
        setTimeout(SaxEvent, 5000);
    } else {
        console.log("keep counting?")
        //countDownPopopido();
    }
}

function SaxEvent() {
    console.log("sax event starts")
    eventIndex = 3;
    console.log(eventIndex);
    counter = 10;
    josephineClick = false;
    crowdClick = false;
    zowieHere();
    badsax.play();
    badsax.volume = 0.3;
    console.log("badsaxsound");
    josephine.classList.add("glow");
    maestro.setAttribute('src', 'img/conductorevent.png');
    josephine.setAttribute('src', 'img/josephine.gif');
    setTimeout(crowdComplainig, 700);
    setTimeout(countDownSax, 1000);
    josephine.addEventListener('click', josephineClicked);
    crowd.addEventListener('click', crowdCliked);
    //booo.play();
}

function countDownSax() {
    console.log(counter)
    counter--;

    if (counter == 0 && (!josephineClick || !crowdClick)) {
        josephine.removeEventListener('click', josephineClicked);
        crowd.removeEventListener('click', crowdCliked);
        lose();

    } else if (counter > 0 && (!josephineClick || !crowdClick)) {
        setTimeout(countDownSax, 1000);
    }
}

function crowdComplainig() {
    console.log("crowdComplainig");
    crowd.classList.add("glow");
    crowdEvent.play();
}

function crowdCliked() {
    console.log("crowd clicked");
    crowd.classList.remove("glow");
    crowdEvent.pause();
    crowdClick = true;
    winSax();
}

function winSax() {
    if (josephineClick == true && crowdClick == true) {
        console.log("pass sax");
        josephine.setAttribute('src', 'img/josephine.gif');
        badsax.pause();
        josephine.removeEventListener('click', winSax);
        crowd.removeEventListener('click', winSax);
        setTimeout(wigEvent, 3000);
    }
}

function wigEvent() {
    console.log("wig event starts")
    eventIndex = 4;
    console.log(eventIndex);
    counter = 10;
    daphneClick = false;
    wigClick = false;
    zowieHere();
    wig.classList.add("wigAnim");
    daphne.classList.add("glow");
    daphneEvent.play();
    setTimeout(countDownWig, 1000);
    wig.addEventListener('click', wigClicked);
    daphne.addEventListener('click', daphneClicked);

}

function wigClicked() {
    console.log("wig clicked");
    wigClick = true;

    wig.classList.remove("wigAnim");
    wigWin();
}

function countDownWig() {
    console.log(counter)
    counter--;

    if (counter == 0 && (!wigClick || !daphneClick)) {
        lose();

    } else if (counter > 0 && (!wigClick || !daphneClick)) {
        setTimeout(countDownWig, 1000);
    }
}


function wigWin() {
    if (wigClick == true && daphneClick == true) {
        console.log("pass wig");
        wig.removeEventListener('click', wigClicked)
        daphne.removeEventListener('click', daphneClicked);
        winGame();
    }
}

function winGame() {
    console.log("hurray");
    //zowie.classList("zowieAnim4");
    //sound will you marry me



    //blackscreen of winning ending
    //yesButton.addEventListener('click', yesFinal);
    //noButton.addEventListener('click', noFinal());
}

function yesFinal() {
    //sound
    //kiss
    //sound.addEventListener('ended', theEnd)
}

function noFinal() {
    //sound
    //kiss
    //sound.addEventListener('ended', theEnd)
}

function theEnd() {
    //endScreen
    josephine.style.display = "none";
    daphne.style.display = "none";
    zowie.style.display = "none";
    maestro.style.display = "none";
    sugar.style.display = "none";
    endCurtains.style.display = "none";
    band.style.display = "none";
    crowd.style.display = "none";
    lights.style.display = "none";
    crowdLose.pause();


    scene.classList.add("sceneWin");
}

function lose() {


    console.log("lose");

    popopido.pause();
    wig.style.display = "none";
    josephine.setAttribute('src', 'img/josephineasmen.png');
    daphne.setAttribute('src', 'img/daphneasmen.png');
    maestro.setAttribute('src', 'img/conductorevent.png');
    sugar.setAttribute('src', 'img/marilynShocked.png');
    crowLose.play();
    setTimeout(curtainsClose, 6000);
    //crowLose.addEventListener('ended', curtainsClose);
    setTimeout(endLoseScreen, 8000);


}

function curtainsClose() {
    endCurtains.style.display = "inline";
    endCurtains.classList.add("closeSprite");
}


function endLoseScreen() {
    josephine.style.display = "none";
    daphne.style.display = "none";
    zowie.style.display = "none";
    maestro.style.display = "none";
    sugar.style.display = "none";
    endCurtains.style.display = "none";
    band.style.display = "none";
    crowd.style.display = "none";
    lights.style.display = "none";
    crowdLose.pause();


    scene.classList.add("sceneLost");
    gunShot.play();





}
