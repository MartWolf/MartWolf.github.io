const qwerty = document.getElementById("qwerty"),
phrase = document.getElementById("phrase"),
overlay = document.getElementById("overlay"),
btn = document.getElementsByClassName("btn__reset")[0],
phrase_ul = document.querySelector("#phrase ul");
var  missed = 0,
letterscorrect = 0,
letter = document.getElementsByClassName("letter"),
tries = document.getElementsByClassName("tries");



btn.addEventListener("click", function() {
    
    overlay.style.display = "none";
});

const phrases = [
"yesterday was cold",
"star wars sucks",
"children are annoying",
"I dont wanna be a lawyer",
"reindeers are cool"
];

function checkWin(a, b) {
    if ( a  >= 5) {
        overlay.classList.add("lose");
        overlay.style.display = "";

    } else if (b >= letter.length) {
        overlay.classList.add("win");
        overlay.style.display = "";
    }
}

function getRandomPhraseAsArray(arr) {
    let randomarray = arr[Math.floor(Math.random() * arr.length)];
    let newarray = randomarray.split("");
    return newarray;
};

function addPhraseToDisplay(array) {
    for (let i = 0; i < array.length; i++) {
        
        var li = document.createElement('li');

        if (array[i] === " ") {
            
            phrase_ul.appendChild(li);
            li.innerHTML = li.innerHTML + array[i];
            li.classList.add("space");
        }
        else {
            phrase_ul.appendChild(li);
            li.innerHTML = li.innerHTML + array[i];
            li.classList.add("letter");
        }  
    }

};


function checkLetter(letter) {
    let letters = document.querySelectorAll('.letter'),
    matchedLetterCount = 0;

    letters.forEach(item => {
        let currentLetter = item.innerHTML.toLowerCase();
        
        if (currentLetter === letter ) {
            item.classList.add('show');
            matchedLetterCount++;
            checkWin(missed, letterscorrect)
        }
    });

    if ( matchedLetterCount > 0){
    letterscorrect = letterscorrect + matchedLetterCount;
    console.log(letterscorrect);
    checkWin(missed, letterscorrect)
    }  else {
        document.getElementsByClassName("tries")[missed].src = "images/lostHeart.png";
        missed++;
        checkWin(missed, letterscorrect)
    }
    
}


qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
    e.target.classList.add("chosen");
    e.target.disabled = true;
    let letterFound = e.target.innerHTML;
    console.log(letterFound)    
    checkLetter(letterFound);
    
}

});



const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
