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
let marryMe = document.querySelector("#marryMe");
let imMan = document.querySelector("#imMan");
let noPerfect = document.querySelector("#noPerfect");
let kiss = document.querySelector("#kiss");
let aww = document.querySelector("#aww");


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

//window.onload= function(){pageload();}

function pageLoad(){
    curtains.addEventListener('animationstart', startSong);
}


function getRandom() {
    randomZowie = Math.random() * 100;
}

function startSong() {

    console.log("game starts");
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
    daphne.setAttribute('src', 'img/daphnesleg.png');
    daphne.classList.add("glow");
    gasp.play();
    counter = 5;
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
    counterZowie = 7;
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
        zowie.addEventListener('animationend', zowieSpeaks);
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
    zowie.removeEventListener('animationend', delay);
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
    boo.volume = 0.5;
    setTimeout(popopidoEvent, 700);
}



function popopidoEvent() {
    console.log("popopido event");

    eventIndex = 2;

    counter = 7;
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
    daphne.classList.remove("glow");
    daphne.setAttribute('src', 'img/daphne.gif');
    if (eventIndex == 2) {
        popopidoWin();
    } else if (eventIndex == 4) {
        daphne.classList.remove("glowAndTalking");
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
    counter = 7;
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
    counter = 7;
    daphneClick = false;
    wigClick = false;
    zowieHere();
    wig.classList.add("wigAnim");
    daphne.classList.add("glowAndTalking")
    daphne.setAttribute('src', 'img/daphnelooking.png')
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
        setTimeout(winGame, 5000);
    }
}

function winGame() {
    zowieSound.pause();
    console.log("hurray");
    zowie.style.top = "700px";
    zowie.style.left = "470px";
    zowie.setAttribute('src', 'img/osgoodlooking.png');
    zowie.removeEventListener('animationend', zowieSpeaks);
    zowie.addEventListener('animationend', zowieMarry);
    zowie.classList.add("zowieAnim4");
}

function zowieMarry() {
    console.log("marry me");
    zowie.removeEventListener('animationend', zowieMarry);
    popopido.pause();
    setTimeout(marryMeSound, 1000);
    daphne.setAttribute('src', 'img/daphnesurprised.png');
    marryMe.addEventListener('ended', butImMan);
}

function marryMeSound() {
    console.log("marry me sound");
    zowie.style.top="250px";
    zowie.classList.remove("zowieAnim4");
    zowie.classList.add("talking");
    marryMe.play();
}

function butImMan() {
    console.log("but i am a man")
    marryMe.removeEventListener('ended', butImMan);
    zowie.classList.remove("talking");
    imMan.play();
    daphne.classList.add("talking");
    wig.style.display = "none";
    daphne.setAttribute('src', 'img/daphneasmen.png');
    josephine.setAttribute('src', 'img/josephineasmen.png');
    sugar.setAttribute('src', 'img/marilynShocked.png')
    imMan.addEventListener('ended', surprisedCrowd);
}

function surprisedCrowd() {
    console.log("gasps")
    daphne.classList.remove("talking");
    gasp.play();
    gasp.addEventListener('ended', nobodyPerfect);
}

function nobodyPerfect() {
    console.log("nobody perfect");
    zowie.classList.add("talking");
    noPerfect.play();
    noPerfect.addEventListener('ended', crowdAw);
}

function crowdAw() {
    console.log("aww")
    aww.play();
    zowie.classList.remove("talking");
    //setTimeout(theEnd, 3000);
    aww.addEventListener('ended', theEnd);
}


function theEnd() {
    console.log("the end");
    kiss.play();
    kiss.addEventListener('ended', applauseCrowd);
    curtainsClose();
    endCurtains.addEventListener('animationend', theEndscreen);

}

function applauseCrowd() {
    applause.play();

}

function theEndscreen() {
    scene.classList.add("sceneWin");
    josephine.style.display = "none";
    daphne.style.display = "none";
    zowie.style.display = "none";
    maestro.style.display = "none";
    sugar.style.display = "none";
    endCurtains.style.display = "none";
    band.style.display = "none";
    crowd.style.display = "none";
    lights.style.display = "none";
    setTimeout(trythis, 3000);
}

function trythis() {
    window.location.href = "credits.html";
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
    setTimeout(trythis, 3000);


}

pageLoad();
