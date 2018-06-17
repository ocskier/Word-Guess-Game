var pickedLetters = [];
var countrylist = ["austria","aruba","australia","belgium","bolivia","brazil","chile","china","canada","cuba","denmark","ecuador","finland",
        "france","greece","germany","hungary","honduras","iceland","iraq","italy","india","ireland","israel","japan","kenya",
        "libya","malaysia","mexico","morocco","nepal","norway","netherlands","pakistan","paraguay","peru","portugal","qatar",
        "romania","spain","sudan","somalia","sweden","thailand","turkey","ukraine","uruguay","vanuata","vietnam","zimbabwe"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        
var randomIndexValue = Math.floor(Math.random()*countrylist.length);
var word = countrylist[randomIndexValue];
var numGuesses = word.length + 5;
var lettersCorrect = 0;

for (i=0; i < 26; i++) {
    $(".mybtngrp").append('<button class = "btn btn-secondary abcbutton" onclick="printLetter('+"'" + alphabet[i] + "'"+')">' + alphabet[i] + '</button>'); 
}
$("#reset").append('<button class = "btn btn-secondary resetbutton">Reset</button>');

console.log(word);

for (i=0; i < word.length; i++) {    
    $("#answerSpace").append('<span class="badge badge-success mybadge"><button class="mybutton"><p class="answer-p"></p></button></span>');
}

$(".resetbutton").on("click", refreshPage);

function printLetter(letter) {
        if (numGuesses > 0) {
        numGuesses--;
        document.getElementById('guess-ltr').innerHTML = letter;

        var alreadyPicked = false;

        if (pickedLetters.indexOf(letter) === -1) {
            pickedLetters.push(letter);
            pickedLetters.sort();
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
                $("#wonAud")[0].play();
                alert("You won!!!");
                refreshPage();
                }, 500);
        }

        if (numGuesses == 0 && !(lettersCorrect == word.length)) {
            for (i=0; i < word.length; i++) {
                var j=i+1;
                if (i===0) {
                        $(".mybadge:nth-child(" + j + ") .mybutton p").text(word[i].toUpperCase());   
                    }
                    else {
                        $(".mybadge:nth-child(" + j + ") .mybutton p").text(word[i]);
                    }
                }
            
                setTimeout(function () {
                $("#lostAud")[0].play();
                alert("You lost!!!");
                refreshPage();
                }, 500);
        }
}

function refreshPage(){
    window.location.reload();
} 