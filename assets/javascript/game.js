var pickedLetters = [];
var countrylist = ["aruba","australia","belgium","brazil","chile","canada","cuba","denmark","ecuador","finland","france","greece",
        "germany","hungary","honduras","iceland","iraq","italy","india","ireland","israel","japan","kenya","libya","malaysia","mexico",
        "morocco","nepal","norway","netherlands","pakistan","paraguay","peru","qatar","romania","spain","sudan","somalia","thailand",
        "turkey","ukraine","uruguay","vanuata","zimbabwe"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        
var randomIndexValue = Math.floor(Math.random()*countrylist.length);
var word = countrylist[randomIndexValue];
var numGuesses = word.length + 5;
var lettersCorrect = 0;

for (i=0; i < 26; i++) {
    $(".mybtngrp").append('<button class = "btn btn-secondary abcbutton" onclick="printLetter('+"'" + alphabet[i] + "'"+')">' + alphabet[i] + '</button>'); 
}

console.log(word);

for (i=0; i < word.length; i++) {    
    $("#answerSpace").append('<span class="badge badge-success mybadge"><button class="mybutton"><p class="answer-p"></p></button></span>');
}

function printLetter(letter) {
        if (numGuesses > 0) {
        numGuesses--;
        document.getElementById('guess-ltr').innerHTML = letter;

        var alreadyPicked = false;

        if (pickedLetters.indexOf(letter) === -1) {
            pickedLetters.push(letter);
            document.getElementById('picks').innerHTML = pickedLetters;
        }

        else {
            alert("You already picked that one!");
            numGuesses++;
            alreadyPicked = true;
        }

        document.getElementById('guesses').innerHTML = numGuesses;

        if ((word.indexOf(letter) > -1) && (word.indexOf(letter) < word.length) && (alreadyPicked ==false)) {
            for (i=0; i < word.length; i++) {
                var j=i+1;  
                if (word[i] === letter) {
                    if (i==0) {
                        $(".mybadge:nth-child(" + j + ") .mybutton p").text(word[i].toUpperCase());   
                    }
                    else {
                        $(".mybadge:nth-child(" + j + ") .mybutton p").text(word[i]);
                    }
                    lettersCorrect++;
                }
            }
        }
        }

        if (lettersCorrect === word.length) {
            setTimeout(function () {
                alert("You won!!!");
                refreshPage();
            }, 300);
        }
        if (numGuesses == 0 && !(lettersCorrect == word.length)) {
            setTimeout(function () {
                alert("You lost!!!");
                refreshPage();
            }, 300);
        }
}

function refreshPage(){
    window.location.reload();
} 