var pickedLetters = [];
var countrylist = ["austria","aruba","australia","belgium","bolivia","brazil","chile","china","canada","cuba","denmark","ecuador","finland",
        "france","greece","germany","hungary","honduras","iceland","iraq","italy","india","ireland","israel","japan","kenya",
        "libya","malaysia","mexico","morocco","nepal","norway","netherlands","pakistan","paraguay","peru","portugal","qatar",
        "romania","spain","sudan","somalia","sweden","thailand","turkey","ukraine","uruguay","vanuata","vietnam","zimbabwe"];
var rockBands = ["beatles","ledzeppelin", "pinkfloyd","metallica","aerosmith","nirvana","queen","radiohead","eagles","vanhalen",
        "pearljam","rush","Doors","ramones","bonjovi","defleopard","journey","linkinpark","ironmaiden","coldplay","rem","kiss"];
var states= ["alabama","alaska","arizona","arkansas","california","colorado","delaware","florida","georgia","hawaii","idaho",
            "illinois","indiana","indiana","iowa","kansas","kentucky","louisiana","maine","maryland","michigan","minnesota",
            "missouri","newjersey","newmexico","newyork","northcarolina","ohio","oklahoma","oregon","tennessee","texas","utah",
            "vermont","virginia","wisconsin","wyoming"];
var animals= ["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog",
            "dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippo",
            "horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion",
            "seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra"];

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var selectedList = countrylist;

var word = printScreen();
var numGuesses = word.length + 5;
var lettersCorrect = 0;

$(".dropdown-menu a:eq(0)").on("click", function(){
    selectedList = countrylist;
    $("body").css("background", "url(assets/images/map-of-the-world-2401458_1920_copy.jpg) no-repeat center center fixed");
    $(".dropdown-toggle").text("World Countries");
    resetPage();
    word = printScreen();
});

$(".dropdown-menu a:eq(1)").on("click", function(){
    selectedList = rockBands;
    $("body").css("background", "url(assets/images/rockbands.jpg) no-repeat center center fixed");
    $(".dropdown-toggle").text("Rock Bands");
    resetPage();
    word = printScreen();
});

$(".dropdown-menu a:eq(2)").on("click", function(){
    selectedList = states;
    $("body").css("background", "url(assets/images/states.jpg) no-repeat center center fixed");
    $(".dropdown-toggle").text("US States");
    resetPage();
    word = printScreen();
});

$(".dropdown-menu a:eq(3)").on("click", function(){
    selectedList = animals;
    $("body").css("background", "url(assets/images/animals.jpg) no-repeat center center fixed");
    $(".dropdown-toggle").text("Animals");
    resetPage();
    word = printScreen();
});

function printScreen () {
var randomIndexValue = Math.floor(Math.random()*selectedList.length);
var newWord = selectedList[randomIndexValue];

for (i=0; i < 26; i++) {
    $(".mybtngrp").append('<button class = "btn btn-secondary abcbutton" onclick="printLetter('+"'" + alphabet[i] + "'"+')">' + alphabet[i] + '</button>'); 
}

for (i=0; i < newWord.length; i++) {    
    $("#answerSpace").append('<span class="badge badge-success mybadge"><button class="mybutton"><p class="answer-p"></p></button></span>');
}
numGuesses = newWord.length + 5;
lettersCorrect = 0;
pickedLetters = [];

return newWord;
}

$("#reset").append('<button class = "btn btn-secondary resetbutton">Reset</button>');

$(".resetbutton").on("click", function() {
    resetPage();
    word = printScreen();
});

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
                resetPage();
                word = printScreen();
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
            
                $("#lostAud")[0].play();
                setTimeout(function () {
                alert("You lost!!!");
                resetPage();
                word = printScreen();
                }, 500);
        }
}

function resetPage(){
    $("#picks").empty();
    $("#guess-ltr").empty();
    $("#guesses").empty();
    $("#answerSpace").empty();
    $(".mybtngrp").empty();
} 