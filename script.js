// Scoreboard:
// Created values for each prompt depending on their difficulty.
// Created a total score that increases ONLY when player gives correct answer to questions.
let score100 = 100;
let score200 = 200;
let score300 = 300;
let score400 = 400;
let score500 = 500;
let scoreTotal = 0;
let sum = 0;

// Make an alert that shows the total score of the player.
scoreBoard = document.querySelector("#score");
scoreBoard.addEventListener('click',scoreBoardPrompt);
function scoreBoardPrompt() {
    alert("Your total score is: " + scoreTotal + " out of " + sum + "!")
}

// Maybe later, I can try to update the content of the score text in the footer to display the total score.

// Selected for each individual button by query selecting for both their class and id.
// To make the questions, I will need a prompt that asks a question
// and an empty text box that asks for an answer.
// If the input is the same as the answer variable, then the answer is correct,
// and the accrued points will add to the total.
// Else: the player gets no points, and will return to the screen.
// I need to also "lock" buttons after they have been answered.
    // After each question prompt function, disable the button with "button_name:disabled = true";

const mario100 = document.querySelector(".Mario > #first");
const mario200 = document.querySelector(".Mario > #second");
const mario300 = document.querySelector(".Mario > #third");
const mario400 = document.querySelector(".Mario > #fourth");
const mario500 = document.querySelector(".Mario > #fifth");

    mario100.addEventListener('click', superMario100);
    function superMario100() {
        let quiz = prompt("Mario's younger brother.");
        if (quiz.toUpperCase() == "LUIGI") {
            alert("Good job! You have earned 100 points.");
            scoreTotal += score100;
            mario100.classList.add('answer');
        } else {
            alert("Really? You couldn't get the 100 point question right?")
            mario100.classList.add('wrong');
        } sum += score100;
        mario100.disabled = true;
    }

    mario200.addEventListener('click', superMario200);
    function superMario200() {
        let quiz = prompt("This is the final track of the Mario Kart Special Cup.");
        if (quiz.toUpperCase() == "RAINBOW ROAD") {
            alert("Great job! You have earned 200 points.");
            scoreTotal += score200;
            mario200.classList.add('answer');
        } else {
            alert("Sorry, this one's a little tougher.");
            mario200.classList.add('wrong');
        } sum += score200;
        mario200.disabled = true;
    }

    mario300.addEventListener('click', superMario300);
    function superMario300() {
        let quiz = prompt("This princess wears yellow and rules Sarasaraland.");
        if (quiz.toUpperCase() == "DAISY" || quiz.toUpperCase() == "DAISY") {
            alert("Nice! 300 points!");
            scoreTotal += score300;
            mario300.classList.add('answer');
        } else {
            alert("Darn, this one's not easy...");
            mario300.classList.add('wrong');
        } sum += score300;
        mario300.disabled = true;

    }

    mario400.addEventListener('click', superMario400);
    function superMario400() {
        let quiz = prompt("This island is home to the Piantas and Noki people in the Mario World.");
        if (quiz.toUpperCase() == "ISLE DELFINO" || quiz.toUpperCase() == "DELFINO") {
            alert("Wow! 400 points!");
            scoreTotal += score400;
            mario400.classList.add('answer');
        } else {
            alert("Tough luck, but you knew it was getting harder...");
            mario400.classList.add('wrong');
        } sum += score400;
        mario400.disabled = true;
    }

    mario500.addEventListener('click', superMario500);
    function superMario500() {
        let quiz = prompt("A strange old man in a white coat.");
        if (quiz.toUpperCase() == "PROFESSOR E GADD" || quiz.toUpperCase() == "E GADD" || quiz.toUpperCase() == "ELVIN GADD") {
            alert("NO WAY! You got it right! 500 points!");
            scoreTotal += score500;
            mario500.classList.add('answer');
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...");
            mario500.classList.add('wrong');
        } sum += score500;
        mario500.disabled = true;
    }

const zelda100 = document.querySelector(".Zelda > #first");
const zelda200 = document.querySelector(".Zelda > #second");
const zelda300 = document.querySelector(".Zelda > #third");
const zelda400 = document.querySelector(".Zelda > #fourth");
const zelda500 = document.querySelector(".Zelda > #fifth");

    zelda100.addEventListener('click', loz100);
    function loz100() {
        let quiz = prompt("The main setting of the Zelda series.");
        if (quiz.toUpperCase() == "HYRULE" || quiz.toUpperCase() == "HYRULE KINGDOM") {
            alert("Good job! You have earned 100 points.");
            scoreTotal += score100;
            zelda100.classList.add('answer');
        } else {
            alert("Really? You couldn't get the 100 point question right?");
            zelda100.classList.add('wrong');
        } sum += score100;
        zelda100.disabled = true;
    }

    zelda200.addEventListener('click', loz200);
    function loz200() {
        let quiz = prompt("The blade of evil's bane wielded only by Link.");
        if (quiz.toUpperCase() == "MASTER SWORD") {
            alert("Great job! You have earned 200 points.");
            scoreTotal += score200;
            zelda200.classList.add('answer');
        } else {
            alert("Sorry, this one's a little tougher.");
            zelda200.classList.add('wrong');
        } sum += score200;
        zelda200.disabled = true;
    }

    zelda300.addEventListener('click', loz300);
    function loz300() {
        let quiz = prompt("In Breath of the Wild, these mechanical giants roam the land of Hyrule.");
        if (quiz.toUpperCase() == "DIVINE BEASTS" || quiz.toUpperCase() == "DIVINE BEAST" ) {
            alert("Nice! 300 points!");
            scoreTotal += score300;
            zelda300.classList.add('answer');
        } else {
            alert("Darn, this one's not easy...");
            zelda300.classList.add('wrong');
        } sum += score300;
        zelda300.disabled = true;
    }

    zelda400.addEventListener('click', loz400);
    function loz400() {
        let quiz = prompt("In Twilight Princess, this evil figure plunges Hyrule into eternal Twilight.");
        if (quiz.toUpperCase() == "ZANT" || quiz.toUpperCase() == "GANONDORF") {
            alert("Wow! 400 points!");
            scoreTotal += score400;
            zelda400.classList.add('answer');
        } else {
            alert("Tough luck, but you knew it was getting harder...");
            zelda400.classList.add('wrong');
        } sum += score400;
        zelda400.disabled = true;
    }

    zelda500.addEventListener('click', loz500);
    function loz500() {
        let quiz = prompt("In Majora's Mask, this melody creates a stone statue of Link.");
        if (quiz.toUpperCase() == "ELEGY OF EMPTINESS") {
            alert("NO WAY! You got it right! 500 points!");
            scoreTotal += score500;
            zelda500.classList.add('answer');
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...");
            zelda500.classList.add('wrong');
        } sum += score500;
        zelda500.disabled = true;
    }

const pokemon100 = document.querySelector(".Pokemon > #first");
const pokemon200 = document.querySelector(".Pokemon > #second");
const pokemon300 = document.querySelector(".Pokemon > #third");
const pokemon400 = document.querySelector(".Pokemon > #fourth");
const pokemon500 = document.querySelector(".Pokemon > #fifth");

    pokemon100.addEventListener('click', poke100);
    function poke100() {
        let quiz = prompt("This Pokémon is known as the Yellow Mouse Pokémon.");
        if (quiz.toUpperCase() == "PIKACHU") {
            alert("Good job! You have earned 100 points.");
            scoreTotal += score100;
            pokemon100.classList.add('answer');
        } else {
            alert("Really? You couldn't get the 100 point question right?");
            pokemon100.classList.add('wrong');
        } sum += score100;
        pokemon100.disabled = true;
    }

    pokemon200.addEventListener('click', poke200);
    function poke200() {
        let quiz = prompt("The very first town you start your Pokémon adventure.");
        if (quiz.toUpperCase() == "PALLET" || quiz.toUpperCase() == "PALLET TOWN" ) {
            alert("Great job! You have earned 200 points.");
            scoreTotal += score200;
            pokemon200.classList.add('answer');
        } else {
            alert("Sorry, this one's a little tougher.");
            pokemon200.classList.add('wrong');
        } sum += score200;
        pokemon200.disabled = true;
    }

    pokemon300.addEventListener('click', poke300);
    function poke300() {
        let quiz = prompt("The boss of the evil Team Rocket.");
        if (quiz.toUpperCase() == "GIOVANNI") {
            alert("Nice! 300 points!");
            scoreTotal += score300;
            pokemon300.classList.add('answer');
        } else {
            alert("Darn, this one's not easy...");
            pokemon300.classList.add('wrong');
        } sum += score300;
        pokemon300.disabled = true;
    }

    pokemon400.addEventListener('click', poke400);
    function poke400() {
        let quiz = prompt("This legendary Pokémon sworn to lend its power to one who wishes to build an ideal world.");
        if (quiz.toUpperCase() == "ZEKROM") {
            alert("Wow! 400 points!");
            scoreTotal += score400;
            pokemon400.classList.add('answer');
        } else {
            alert("Tough luck, but you knew it was getting harder...");
            pokemon400.classList.add('wrong');
        } sum += score400;
        pokemon400.disabled = true;

    }

    pokemon500.addEventListener('click', poke500);
    function poke500() {
        let quiz = prompt("Before Pikachu was decided, this other Pokémon was going to the main mascot of the series.");
        if (quiz.toUpperCase() == "CLEFAIRY") {
            alert("NO WAY! You got it right! 500 points!");
            scoreTotal += score500;
            pokemon500.classList.add('answer');
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...");
            pokemon500.classList.add('wrong');
        } sum += score500;
        pokemon500.disabled = true;

    }

const smash100 = document.querySelector(".Smash > #first");
const smash200 = document.querySelector(".Smash > #second");
const smash300 = document.querySelector(".Smash > #third");
const smash400 = document.querySelector(".Smash > #fourth");
const smash500 = document.querySelector(".Smash > #fifth");

    smash100.addEventListener('click', smashBros100);
    function smashBros100() {
        let quiz = prompt("This fighter shows his moves with his legendary Falcon Punch.");
        if (quiz.toUpperCase() == "CAPTAIN FALCON") {
            alert("Good job! You have earned 100 points.");
            scoreTotal += score100;
            smash100.classList.add('answer');
        } else {
            alert("Really? You couldn't get the 100 point question right?");
            smash100.classList.add('wrong');
        } sum += score100;
        smash100.disabled = true;
    }

    smash200.addEventListener('click', smashBros200);
    function smashBros200() {
        let quiz = prompt("Since Super Smash Bros. Melee, characters send a Sandbag flying in this mode");
        if (quiz.toUpperCase() == "HOME RUN CONTEST" || quiz.toUpperCase() == "HRC") {
            alert("Great job! You have earned 200 points.");
            scoreTotal += score200;
            smash200.classList.add('answer');
        } else {
            alert("Sorry, this one's a little tougher.");
            smash200.classList.add('wrong');
        } sum += score200;
        smash200.disabled = true;
    }

    smash300.addEventListener('click', smashBros300);
    function smashBros300() {
        let quiz = prompt("This random mechanic in Super Smash Bros. Brawl upset many competitive players.");
        if (quiz.toUpperCase() == "TRIPPING") {
            alert("Nice! 300 points!");
            scoreTotal += score300;
            smash300.classList.add('answer');
        } else {
            alert("Darn, this one's not easy...");
            smash300.classList.add('wrong');
        } sum += score300;
        smash300.disabled = true;
    }

    smash400.addEventListener('click', smashBros400);
    function smashBros400() {
        let quiz = prompt("Including DLC, this newcomer was the last addition to Super Smash Bros. for Nintendo 3DS and Wii U.");
        if (quiz.toUpperCase() == "BAYONETTA") {
            alert("Wow! 400 points!");
            scoreTotal += score400;
            smash400.classList.add('answer');
        } else {
            alert("Tough luck, but you knew it was getting harder...");
            smash400.classList.add('wrong');
        } sum += score400;
        smash400.disabled = true;
    }

    smash500.addEventListener('click', smashBros500);
    function smashBros500() {
        let quiz = prompt("In the World of Darkness, this boss lacks a concentrated weak spot.") 
        if (quiz.toUpperCase() == "MARX") {
            alert("NO WAY! You got it right! 500 points!");
            scoreTotal += score500;
            smash500.classList.add('answer');
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...");
            smash500.classList.add('wrong');
        } sum += score500;
        smash500.disabled = true;
    }

const mat100 = document.querySelector(".Mature > #first");
const mat200 = document.querySelector(".Mature > #second");
const mat300 = document.querySelector(".Mature > #third");
const mat400 = document.querySelector(".Mature > #fourth");
const mat500 = document.querySelector(".Mature > #fifth");

    mat100.addEventListener('click', mature100);
    function mature100() {
        let quiz = prompt("The very first Lord of the Fire Emblem series.");
        if (quiz.toUpperCase() == "MARTH") {
            alert("Good job! You have earned 100 points.");
            scoreTotal += score100;
            mat100.classList.add('answer');
        } else {
            alert("Really? You couldn't get the 100 point question right?");
            mat100.classList.add('wrong');
        } sum += score100;
        mat100.disabled = true;
    }

    mat200.addEventListener('click', mature200);
    function mature200() {
        let quiz = prompt("This sequel became a Nintendo exclusive when the company funded its developer.");
        if (quiz.toUpperCase() == "BAYONETTA 2") {
            alert("Great job! You have earned 200 points.");
            scoreTotal += score200;
            mat200.classList.add('answer');
        } else {
            alert("Sorry, this one's a little tougher.");
            mat200.classList.add('wrong');
        } sum += score200;
        mat200.disabled = true;
    }

    mat300.addEventListener('click', mature300);
    function mature300() {
        let quiz = prompt("Before publishing The Legend of Zelda: Breath of the Wild in 2017, what open world game did Nintendo publish in 2015?");
        if (quiz.toUpperCase() == "XENOBLADE CHRONICLES X" || quiz.toUpperCase() == "XENOBLADE X" || quiz.toUpperCase() == "XENOBLADEX") {
            alert("Nice! 300 points!");
            scoreTotal += score300;
            mat300.classList.add('answer');
        } else {
            alert("Darn, this one's not easy...");
            mat300.classList.add('wrong');
        } sum += score300;
        mat300.disabled = true;
    }

    mat400.addEventListener('click', mature400);
    function mature400() {
        let quiz = prompt("This Intellectual Property from Nintendo has only been released on Mobile Devices.");
        if (quiz.toUpperCase() == "DRAGALIA LOST") {
            alert("Wow! 400 points!");
            scoreTotal += score400;
            mat400.classList.add('answer');
        } else {
            alert("Tough luck, but you knew it was getting harder...");
            mat400.classList.add('wrong');
        } sum += score400;
        mat400.disabled = true;
    }

    mat500.addEventListener('click', mature500);
    function mature500() {
        let quiz = prompt("This game was the very first Nintendo published 'M rated' game."); 
        if (quiz.toUpperCase() == "ETERNAL DARKNESS" || quiz.toUpperCase() == "ETERNAL DARKNESS: SANITY'S REQUIEM") {
            alert("NO WAY! You got it right! 500 points!");
            scoreTotal += score500;
            mat500.classList.add('answer');
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...");
            mat500.classList.add('wrong');
        } sum += score500;
        mat500.disabled = true;
    }


// BONUS
// Make another board with double values on HTML, CSS, JavaScript, Git, and Outcomes.
// Give players bonus points for being precise with their answers.