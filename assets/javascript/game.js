var pickedLetters = [];
var countrylist = ["aruba","australia","belgium","brazil","chile","canada","cuba","denmark","ecuador","finland","france","greece",
        "germany","hungary","honduras","iceland","iraq","italy","india","ireland","israel","japan","kenya","libya","malaysia","mexico",
        "morocco","nepal","norway","netherlands","pakistan","paraguay","peru","qatar","romania","spain","sudan","somalia","thailand",
        "turkey","ukraine","uruguay","vanuata","zimbabwe"];
    
var randomIndexValue = Math.floor(Math.random()*countrylist.length);
var word = countrylist[randomIndexValue];
var numGuesses = word.length + 5;
var lettersCorrect = 0;

console.log(randomIndexValue);
console.log(word);
console.log(word.length);

for (i=0; i < word.length; i++) {    
    $("#answerSpace").append('<span class="badge badge-success mybadge"><button class="mybutton"><p class="answer-p"></p></button></span>');
}

function printLetter(letter) {
        if (numGuesses > 0) {
        numGuesses--;
        document.getElementById('para').innerHTML = letter;

        var alreadyPicked = false;

        if (pickedLetters.indexOf(letter) === -1) {
            pickedLetters.push(letter);
        }
        else {
            alert("You already picked that one!");
            numGuesses++;
            alreadyPicked = true;
        }

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
            alert("You won!!!");
        }
        if (numGuesses == 0) {
            alert("You lost!!!");
        }

        console.log(pickedLetters);
        console.log(letter);
        console.log(numGuesses);
        console.log(lettersCorrect);
}