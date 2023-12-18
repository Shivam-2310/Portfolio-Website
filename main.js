const dynamicContent = document.getElementById("dynamic");

const phrases = ["a student at GGSIPU...", "currently in 3rd year...", "a Beginner Web Developer..."]
let phraseindex = 0
let letterindex = 0;
let typingspeed = 120;
let erasingspeed = 120;

function printLetter(phrase){
    if(letterindex < phrase.length){
        dynamicContent.textContent += phrase.charAt(letterindex);
        letterindex++;
        setTimeout(function(){
            printLetter(phrase);
        }, typingspeed)
    }
    else if(letterindex == phrase.length){
        clearletter()
    }
}

function clearletter(phrase){
    if(letterindex>-1){
        let updatedPhrase = "";
        for(let index = 0; index < letterindex; index++){
            updatedPhrase += phrases[phraseindex].charAt(index);
        }
        dynamicContent.textContent = updatedPhrase;
        letterindex -= 1;
        setTimeout(clearletter, erasingspeed);
    }
    else if(letterindex==-1){
        phraseindex = (phraseindex+1) % phrases.length;
        letterindex = 0;
        printLetter(phrases[phraseindex]);
    }
}
printLetter(phrases[phraseindex]);