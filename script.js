// Selected for each individual button by query selecting for both their class and id.

// To make the questions, I will need a prompt that asks a question
// and an empty text box that asks for an answer.
// If the input is the same as the answer variable, then the answer is correct,
// and the accrued points will add to the total.
// Else: the player gets no points, and will return to the screen.

// Rather than making a Nintendo category, should I make a Nintendo Jeopardy board?


const mario100 = document.querySelector(".Mario > #first");
const mario200 = document.querySelector(".Mario > #second");
const mario300 = document.querySelector(".Mario > #third");
const mario400 = document.querySelector(".Mario > #fourth");
const mario500 = document.querySelector(".Mario > #fifth");

    mario100.addEventListener('click', superMario100);
    function superMario100() {
        let quiz = prompt("Who is Mario's brother?") 
        if (quiz.toUpperCase() == "LUIGI") {
            alert("Good job! You have earned 100 points.")
        } else {
            alert("Really? You couldn't get the 100 point question right?")
        }
    }

    mario200.addEventListener('click', superMario200);
    function superMario200() {
        let quiz = prompt("This is the final track of the Mario Kart Special Cup.") 
        if (quiz.toUpperCase() == "RAINBOW ROAD") {
            alert("Great job! You have earned 200 points.")
        } else {
            alert("Sorry, this one's a little tougher.")
        }
    }

    mario300.addEventListener('click', superMario300);
    function superMario300() {
        let quiz = prompt("") 
        if (quiz.toUpperCase() == "") {
            alert("Nice! 300 points!")
        } else {
            alert("Sorry, it's wrong.")
        }
    }

    mario400.addEventListener('click', superMario400);
    function superMario400() {
        let quiz = prompt(".") 
        if (quiz.toUpperCase() == "") {
            alert("Wow! 400 points!")
        } else {
            alert("Sorry, it's wrong.")
        }
    }

    mario500.addEventListener('click', superMario500);
    function superMario500() {
        let quiz = prompt("") 
        if (quiz.toUpperCase() == "") {
            alert("NO WAY! You got it right! 500 points!")
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...")
        }
    }

const zelda100 = document.querySelector(".Zelda > #first");
const zelda200 = document.querySelector(".Zelda > #second");
const zelda300 = document.querySelector(".Zelda > #third");
const zelda400 = document.querySelector(".Zelda > #fourth");
const zelda500 = document.querySelector(".Zelda > #fifth");

    zelda100.addEventListener('click', loz100);
    function loz100() {
        let quiz = prompt("") 
        if (quiz.toUpperCase() == "") {
            alert("Good job! You have earned 100 points.")
        } else {
            alert("Really? You couldn't get the 100 point question right?")
        }
    }

    zelda200.addEventListener('click', loz200);
    function loz200() {
        let quiz = prompt("Where is the main setting of the Zelda series?") 
        if (quiz.toUpperCase() == "HYRULE") {
            alert("Great job! You have earned 200 points.")
        } else {
            alert("Sorry, this one's a little tougher.")
        }
    }

    zelda300.addEventListener('click', loz300);
    function loz300() {
        let quiz = prompt("") 
        if (quiz.toUpperCase() == "") {
            alert("Nice! 300 points!")
        } else {
            alert("Sorry, it's wrong.")
        }
    }

    zelda400.addEventListener('click', loz400);
    function loz400() {
        let quiz = prompt(".") 
        if (quiz.toUpperCase() == "") {
            alert("Wow! 400 points!")
        } else {
            alert("Sorry, it's wrong.")
        }
    }

    zelda500.addEventListener('click', loz500);
    function loz500() {
        let quiz = prompt("") 
        if (quiz.toUpperCase() == "") {
            alert("NO WAY! You got it right! 500 points!")
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...")
        }
    }

const smash100 = document.querySelector(".Smash > #first");
const smash200 = document.querySelector(".Smash > #second");
const smash300 = document.querySelector(".Smash > #third");
const smash400 = document.querySelector(".Smash > #fourth");
const smash500 = document.querySelector(".Smash > #fifth");

    smash100.addEventListener('click', smashBros100);
    function smashBros100() {
        let quiz = prompt(".") 
        if (quiz.toUpperCase() == "") {
            alert("Good job! You have earned 100 points.")
        } else {
            alert("Really? You couldn't get the 100 point question right?")
        }
    }

    smash400.addEventListener('click', smashBros400);
    function smashBros400() {
        let quiz = prompt(".") 
        if (quiz.toUpperCase() == "") {
            alert("Great job! You have earned 200 points.")
        } else {
            alert("Sorry, this one's a little tougher.")
        }
    }

    smash300.addEventListener('click', smashBros300);
    function smashBros300() {
        let quiz = prompt("Before he worked on the Super Smash Bros. series, Masahiro Sakurai at 19 created this adorable character.") 
        if (quiz.toUpperCase() == "KIRBY") {
            alert("Nice! 300 points!")
        } else {
            alert("Sorry, it's wrong.")
        }
    }

    smash400.addEventListener('click', smashBros400);
    function smashBros400() {
        let quiz = prompt(".") 
        if (quiz.toUpperCase() == "") {
            alert("Wow! 400 points!")
        } else {
            alert("Sorry, it's wrong.")
        }
    }

    smash500.addEventListener('click', smashBros500);
    function smashBros500() {
        let quiz = prompt("") 
        if (quiz.toUpperCase() == "") {
            alert("NO WAY! You got it right! 500 points!")
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...")
        }
    }


const pokemon100 = document.querySelector(".Pokemon > #first");
const pokemon200 = document.querySelector(".Pokemon > #second");
const pokemon300 = document.querySelector(".Pokemon > #third");
const pokemon400 = document.querySelector(".Pokemon > #fourth");
const pokemon500 = document.querySelector(".Pokemon > #fifth");

    pokemon100.addEventListener('click', poke100);
    function poke100() {
        let quiz = prompt(".") 
        if (quiz.toUpperCase() == "") {
            alert("Good job! You have earned 100 points.")
        } else {
            alert("Really? You couldn't get the 100 point question right?")
        }
    }

    pokemon200.addEventListener('click', poke200);
    function poke200() {
        let quiz = prompt(".") 
        if (quiz.toUpperCase() == "") {
            alert("Great job! You have earned 200 points.")
        } else {
            alert("Sorry, this one's a little tougher.")
        }
    }

    pokemon300.addEventListener('click', poke300);
    function poke300() {
        let quiz = prompt(".") 
        if (quiz.toUpperCase() == "") {
            alert("Nice! 300 points!")
        } else {
            alert("Sorry, it's wrong.")
        }
    }

    pokemon400.addEventListener('click', poke400);
    function poke400() {
        let quiz = prompt("This legendary Electric type Pokémon is known to lend its power to one who wish to build an ideal world.") 
        if (quiz.toUpperCase() == "ZEKROM") {
            alert("Wow! You know about my favorite legendary Pokémon! 400 points!")
        } else {
            alert("Sorry, it's wrong.")
        }
    }

    pokemon500.addEventListener('click', poke500);
    function poke500() {
        let quiz = prompt("") 
        if (quiz.toUpperCase() == "") {
            alert("NO WAY! You got it right! 500 points!")
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...")
        }
    }



const mat100 = document.querySelector(".Mature > #first");
const mat200 = document.querySelector(".Mature > #second");
const mat300 = document.querySelector(".Mature > #third");
const mat400 = document.querySelector(".Mature > #fourth");
const mat500 = document.querySelector(".Mature > #fifth");

    mat100.addEventListener('click', mature100);
    function mature100() {
        let quiz = prompt(".") 
        if (quiz.toUpperCase() == "") {
            alert("Good job! You have earned 100 points.")
        } else {
            alert("Really? You couldn't get the 100 point question right?")
        }
    }

    mat200.addEventListener('click', mature200);
    function mature200() {
        let quiz = prompt(".") 
        if (quiz.toUpperCase() == "") {
            alert("Great job! You have earned 200 points.")
        } else {
            alert("Sorry, this one's a little tougher.")
        }
    }

    mat300.addEventListener('click', mature300);
    function mature300() {
        let quiz = prompt(".") 
        if (quiz.toUpperCase() == "") {
            alert("Nice! 300 points!")
        } else {
            alert("Sorry, it's wrong.")
        }
    }

    mat400.addEventListener('click', mature400);
    function mature400() {
        let quiz = prompt(".") 
        if (quiz.toUpperCase() == "") {
            alert("Wow! 400 points!")
        } else {
            alert("Sorry, it's wrong.")
        }
    }

    mat500.addEventListener('click', mature500);
    function mature500() {
        let quiz = prompt("Before publishing The Legend of Zelda: Breath of the Wild in 2017, what open world game did Nintendo publish in 2015?") 
        if (quiz.toUpperCase() == "XENOBLADE CHRONICLES X" || quiz.toUpperCase() == "XENOBLADE X" || quiz.toUpperCase() == "XENOBLADEX") {
            alert("NO WAY! You got it right! 500 points!")
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...")
        }
    }