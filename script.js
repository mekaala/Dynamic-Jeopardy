// Scoreboard:
// Created values for each prompt depending on their difficulty.
// Created a total score that increases ONLY when player gives correct answer to questions.
let score100 = 100;
let score200 = 200;
let score300 = 300;
let score400 = 400;
let score500 = 500;
let score600 = 600;
let score700 = 700;
let score800 = 800;
let score900 = 900;
let score1000 = 1000;
let scoreTotal = 0;

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
        let quiz = prompt("Mario's younger brother.\n\nA: Luigi\nB: Wario\nC: Waluigi\nD: Yoshi");
        if (quiz.toUpperCase() == "A" || quiz.toUpperCase() == "LUIGI") {
            alert("Good job! You have earned 100 points.");
            scoreTotal += score100;
            mario100.classList.add('answer');
        } else {
            alert("Really? You couldn't get the 100 point question right?\nThe correct answer is\nA: Luigi")
            mario100.classList.add('wrong');
        } mario100.disabled = true;
    }

    mario200.addEventListener('click', superMario200);
    function superMario200() {
        let quiz = prompt("The final track of the Mario Kart Special Cup.\n\nA: Bowser's Castle\nB: Mario Circuit\nC: Rainbow Road\nD: Moo Moo Meadows");
        if (quiz.toUpperCase() == "C" || quiz.toUpperCase() == "RAINBOW ROAD") {
            alert("Great job! You have earned 200 points.");
            scoreTotal += score200;
            mario200.classList.add('answer');
        } else {
            alert("Sorry, this one's a little tougher.\nThe correct answer is\nC: Rainbow Road");
            mario200.classList.add('wrong');
        } mario200.disabled = true;
    }

    mario300.addEventListener('click', superMario300);
    function superMario300() {
        let quiz = prompt("This princess rules Sarasaraland.\n\nA: Peach \nB: Rosalina \nC: Pauline \nD: Daisy");
        if (quiz.toUpperCase() == "D" || quiz.toUpperCase() == "DAISY"|| quiz.toUpperCase() == "PRINCESS DAISY") {
            alert("Nice! 300 points!");
            scoreTotal += score300;
            mario300.classList.add('answer');
        } else {
            alert("Darn, this one's not easy...\nThe correct answer is\nD: Daisy");
            mario300.classList.add('wrong');
        } mario300.disabled = true;

    }

    mario400.addEventListener('click', superMario400);
    function superMario400() {
        let quiz = prompt("This land is home to the Piantas and Noki people in the Mario World.\n\nA: Mushroom Kingdom \nB: Isle Delfino \nC: New Donk City \nD: Comet Observatory");
            if (quiz.toUpperCase() == "B" || quiz.toUpperCase() == "ISLE DELFINO") {
            alert("Wow! 400 points!");
            scoreTotal += score400;
            mario400.classList.add('answer');
        } else {
            alert("Tough luck, but you knew it was getting harder...\nThe correct answer is\nB: Isle Delfino");
            mario400.classList.add('wrong');
        } mario400.disabled = true;
    }

    mario500.addEventListener('click', superMario500);
    function superMario500() {
        let quiz = prompt("A strange old man in a white coat.\n\nA: Lubba \nB: Cappy \nC: E. Gadd \nD: Toadsworth");
        if (quiz.toUpperCase() == "C" || quiz.toUpperCase() == "E. GADD" || quiz.toUpperCase() == "E GADD") {
            alert("NO WAY! You got it right! 500 points!");
            scoreTotal += score500;
            mario500.classList.add('answer');
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...\nThe correct answer is\nC: E. Gadd");
            mario500.classList.add('wrong');
        } mario500.disabled = true;
    }

const zelda100 = document.querySelector(".Zelda > #first");
const zelda200 = document.querySelector(".Zelda > #second");
const zelda300 = document.querySelector(".Zelda > #third");
const zelda400 = document.querySelector(".Zelda > #fourth");
const zelda500 = document.querySelector(".Zelda > #fifth");

    zelda100.addEventListener('click', loz100);
    function loz100() {
        let quiz = prompt("The main setting of the Zelda series.\n\nA: Termina\nB: Hyrule\nC: Skyloft\nD: Koholint");
        if (quiz.toUpperCase() == "B" || quiz.toUpperCase() == "HYRULE") {
            alert("Good job! You have earned 100 points.");
            scoreTotal += score100;
            zelda100.classList.add('answer');
        } else {
            alert("Really? You couldn't get the 100 point question right?\nThe correct answer is\nB: Hyrule");
            zelda100.classList.add('wrong');
        } zelda100.disabled = true;
    }

    zelda200.addEventListener('click', loz200);
    function loz200() {
        let quiz = prompt("The blade of evil's bane wielded only by Link.\n\nA: Great Fairy's Sword\nB: Four Sword\nC: Goddess Sword\nD: Master Sword");
        if (quiz.toUpperCase() == "D" || quiz.toUpperCase() == "MASTER SWORD") {
            alert("Great job! You have earned 200 points.");
            scoreTotal += score200;
            zelda200.classList.add('answer');
        } else {
            alert("Sorry, this one's a little tougher.\nThe correct answer is\nD: The Master Sword");
            zelda200.classList.add('wrong');
        } zelda200.disabled = true;
    }

    zelda300.addEventListener('click', loz300);
    function loz300() {
        let quiz = prompt("In Breath of the Wild, these mechanical giants roam the land of Hyrule.\n\nA: Divine Beasts\nB: GOHT\nC: Levias\nD: Guardians");
        if (quiz.toUpperCase() == "A" || quiz.toUpperCase() == "DIVINE BEASTS" ) {
            alert("Nice! 300 points!");
            scoreTotal += score300;
            zelda300.classList.add('answer');
        } else {
            alert("Darn, this one's not easy...\nThe correct answer is\nA: The Divine Beasts");
            zelda300.classList.add('wrong');
        } zelda300.disabled = true;
    }

    zelda400.addEventListener('click', loz400);
    function loz400() {
        let quiz = prompt("In Twilight Princess, this evil figure plunges Hyrule into eternal Twilight.\n\nA: Ghirahim\nB: Yuga\nC: Zant\nD: Vaati\n\nBonus: there's actually another figure who influenced the correct villain. Listing this character will earn you double points!");
        if (quiz.toUpperCase() == "C" || quiz.toUpperCase() == "ZANT") {
            alert("Wow! 400 points!");
            scoreTotal += score400;
            zelda400.classList.add('answer');
        } else if (quiz.toUpperCase() == "GANONDORF" || quiz.toUpperCase() == "GANON") {
            alert("INCREDIBLE! You've earned 800 POINTS!");
            scoreTotal += score800;
            zelda400.classList.add('answer');
        } else {
            alert("Tough luck, but you knew it was getting harder...\nThe correct answer is\nB: Zant");
            zelda400.classList.add('wrong');
        } zelda400.disabled = true;
    }

    zelda500.addEventListener('click', loz500);
    function loz500() {
        let quiz = prompt("In Majora's Mask, this melody creates a stone statue of Link.\n\nA: Nocturne of Shadow\nB: Prelude of Light\nC: Elegy of Emptiness\nD: Oath to Order");
        if (quiz.toUpperCase() == "C" || quiz.toUpperCase() == "ELEGY OF EMPTINESS") {
            alert("NO WAY! You got it right! 500 points!");
            scoreTotal += score500;
            zelda500.classList.add('answer');
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...\nThe correct answer is\nC: Elegy of Emptiness");
            zelda500.classList.add('wrong');
        } zelda500.disabled = true;
    }

const pokemon100 = document.querySelector(".Pokemon > #first");
const pokemon200 = document.querySelector(".Pokemon > #second");
const pokemon300 = document.querySelector(".Pokemon > #third");
const pokemon400 = document.querySelector(".Pokemon > #fourth");
const pokemon500 = document.querySelector(".Pokemon > #fifth");

    pokemon100.addEventListener('click', poke100);
    function poke100() {
        let quiz = prompt("This Pokémon is known as the Yellow Mouse Pokémon.\n\nA: Simisear\nB: Lucario\nC: Meowth\nD: Pikachu");
        if (quiz.toUpperCase() == "D" || quiz.toUpperCase() == "PIKACHU") {
            alert("Good job! You have earned 100 points.");
            scoreTotal += score100;
            pokemon100.classList.add('answer');
        } else {
            alert("Really? You couldn't get the 100 point question right?\nThe correct answer is\nD: Pikachu")
            pokemon100.classList.add('wrong');
        } pokemon100.disabled = true;
    }

    pokemon200.addEventListener('click', poke200);
    function poke200() {
        let quiz = prompt("The very first town you start your Pokémon adventure.\n\nA: Pallet Town\nB: Castelia City\nC: Celestic Town\nD: Sootopolis City");
        if (quiz.toUpperCase() == "A" || quiz.toUpperCase() == "PALLET TOWN" ) {
            alert("Great job! You have earned 200 points.");
            scoreTotal += score200;
            pokemon200.classList.add('answer');
        } else {
            alert("Sorry, this one's a little tougher.\nThe correct answer is\nA: Pallet Town");
            pokemon200.classList.add('wrong');
        } pokemon200.disabled = true;
    }

    pokemon300.addEventListener('click', poke300);
    function poke300() {
        let quiz = prompt("The boss of the evil Team Rocket.\n\nA: Ghetsis\nB: Giovanni\nC: Cyrus\nD: Lysandre");
        if (quiz.toUpperCase() == "B" || quiz.toUpperCase() == "GIOVANNI") {
            alert("Nice! 300 points!");
            scoreTotal += score300;
            pokemon300.classList.add('answer');
        } else {
            alert("Darn, this one's not easy...\nThe correct answer is\nB: Giovanni");
            pokemon300.classList.add('wrong');
        } pokemon300.disabled = true;
    }

    pokemon400.addEventListener('click', poke400);
    function poke400() {
        let quiz = prompt("This legendary Pokémon sworn to lend its power to one who wishes to build an ideal world.\n\nA: Kyurem\nB: Landorus\nC: Zekrom\nD: Reshiram");
        if (quiz.toUpperCase() == "ZEKROM" || quiz.toUpperCase() == "ZEKROM") {
            alert("Wow! 400 points!");
            scoreTotal += score400;
            pokemon400.classList.add('answer');
        } else {
            alert("Tough luck, but you knew it was getting harder...\nThe correct answer is\nC: Zekrom");
            pokemon400.classList.add('wrong');
        } pokemon400.disabled = true;
    }

    pokemon500.addEventListener('click', poke500);
    function poke500() {
        let quiz = prompt("Before Pikachu was decided, this other Pokémon was going to the main mascot of the series\n\nA: Clefairy\nB: Mew\nC: Jigglypuff\nD: Charizard.");
        if (quiz.toUpperCase() == "A" || quiz.toUpperCase() == "CLEFAIRY") {
            alert("NO WAY! You got it right! 500 points!");
            scoreTotal += score500;
            pokemon500.classList.add('answer');
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...\nThe correct answer is\nA: Clefairy");
            pokemon500.classList.add('wrong');
        } pokemon500.disabled = true;
    }

const smash100 = document.querySelector(".Smash > #first");
const smash200 = document.querySelector(".Smash > #second");
const smash300 = document.querySelector(".Smash > #third");
const smash400 = document.querySelector(".Smash > #fourth");
const smash500 = document.querySelector(".Smash > #fifth");

    smash100.addEventListener('click', smashBros100);
    function smashBros100() {
        let quiz = prompt("This fighter shows his moves with his legendary Falcon Punch.\n\nA: Mr. Game and Watch\nB: Fox\nC: Captain Falcon\nD: Byleth");
        if (quiz.toUpperCase() == "CAPTAIN FALCON") {
            alert("Good job! You have earned 100 points.");
            scoreTotal += score100;
            smash100.classList.add('answer');
        } else {
            alert("Really? You couldn't get the 100 point question right?\nThe correct answer is\nA: Captain Falcon")
            smash100.classList.add('wrong');
        } smash100.disabled = true;
    }

    smash200.addEventListener('click', smashBros200);
    function smashBros200() {
        let quiz = prompt("Since Super Smash Bros. Melee, characters send a Sandbag flying in this mode.\n\nA: Home Run Contest\nB: Break the Targets\nC: Smash Run\nD: Board the Platforms");
        if (quiz.toUpperCase() == "A" || quiz.toUpperCase() == "HOME RUN CONTEST" || quiz.toUpperCase() == "HRC") {
            alert("Great job! You have earned 200 points.");
            scoreTotal += score200;
            smash200.classList.add('answer');
        } else {
            alert("Sorry, this one's a little tougher.\nThe correct answer is\nA: Home Run Contest");
            smash200.classList.add('wrong');
        } smash200.disabled = true;
    }

    smash300.addEventListener('click', smashBros300);
    function smashBros300() {
        let quiz = prompt("This feature in Super Smash Bros. Brawl upset many competitive players for being unfair.\n\nA: Wave Dashing\nB: Tripping\nC: The Subspace Emissary\nD: Final Smash");
        if (quiz.toUpperCase() == "B" || quiz.toUpperCase() == "TRIPPING") {
            alert("Nice! 300 points!");
            scoreTotal += score300;
            smash300.classList.add('answer');
        } else {
            alert("Darn, this one's not easy...\nThe answer is\nB: Tripping");
            smash300.classList.add('wrong');
        } smash300.disabled = true;
    }

    smash400.addEventListener('click', smashBros400);
    function smashBros400() {
        let quiz = prompt("Excluding DLC, this newcomer was the last addition to Super Smash Bros. for Nintendo 3DS and Wii U.\n\nA: Shulk\nB: Bayonetta\nC: Duck Hunt\nD: Cloud");
        if (quiz.toUpperCase() == "C" || quiz.toUpperCase() == "DUCK HUNT") {
            alert("Wow! 400 points!");
            scoreTotal += score400;
            smash400.classList.add('answer');
        } else {
            alert("Tough luck, but you knew it was getting harder...\nThe correct answer is\nC: Duck Hunt");
            smash400.classList.add('wrong');
        } smash400.disabled = true;
    }

    smash500.addEventListener('click', smashBros500);
    function smashBros500() {
        let quiz = prompt("In the World of Darkness, this boss lacks a concentrated weak spot.\n\nA: Dracula\nB: Rathalos\nC: Ganon\nD: Marx") 
        if (quiz.toUpperCase() == "D" || quiz.toUpperCase() == "MARX") {
            alert("NO WAY! You got it right! 500 points!");
            scoreTotal += score500;
            smash500.classList.add('answer');
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...\nThe correct answer is\nD: Marx");
            smash500.classList.add('wrong');
        } smash500.disabled = true;
    }

const mat100 = document.querySelector(".Mature > #first");
const mat200 = document.querySelector(".Mature > #second");
const mat300 = document.querySelector(".Mature > #third");
const mat400 = document.querySelector(".Mature > #fourth");
const mat500 = document.querySelector(".Mature > #fifth");

    mat100.addEventListener('click', mature100);
    function mature100() {
        let quiz = prompt("The very first Lord of the Fire Emblem series.\n\nA: Chrom\nB: Ike\nC: Corrin\nD: Marth");
        if (quiz.toUpperCase() == "D" || quiz.toUpperCase() == "MARTH") {
            alert("Good job! You have earned 100 points.");
            scoreTotal += score100;
            mat100.classList.add('answer');
        } else {
            alert("Really? You couldn't get the 100 point question right?\nThe correct answer is\nD: Marth")
            mat100.classList.add('wrong');
        } mat100.disabled = true;
    }

    mat200.addEventListener('click', mature200);
    function mature200() {
        let quiz = prompt("This sequel became a Nintendo exclusive when the company funded its developer.\n\nA: Fire Emblem Gaiden\nB: Bayonetta 2\nC: Daemon X Machina\nD: Resident Evil 3");
        if (quiz.toUpperCase() == "B" || quiz.toUpperCase() == "BAYONETTA 2") {
            alert("Great job! You have earned 200 points.");
            scoreTotal += score200;
            mat200.classList.add('answer');
        } else {
            alert("Sorry, this one's a little tougher.\nThe correct answer is\nB: Bayonetta 2");
            mat200.classList.add('wrong');
        } mat200.disabled = true;
    }

    mat300.addEventListener('click', mature300);
    function mature300() {
        let quiz = prompt("Before publishing The Legend of Zelda: Breath of the Wild in 2017, Nintendo published this open world game in 2015.\n\nA: Codename STEAM\nB: Disaster: Day of Crisis\nC: Xenoblade Chronicles X\nD: Star Fox Zero");
        if (quiz.toUpperCase() == "C" || quiz.toUpperCase() == "XENOBLADE CHRONICLES X") {
            alert("Nice! 300 points!");
            scoreTotal += score300;
            mat300.classList.add('answer');
        } else {
            alert("Darn, this one's not easy...\nThe correct answer is\nC: Xenoblade Chronicles X");
            mat300.classList.add('wrong');
        } mat300.disabled = true;
    }

    mat400.addEventListener('click', mature400);
    function mature400() {
        let quiz = prompt("This Intellectual Property from Nintendo has only been released on Mobile Devices.\n\nA: Miitomo\nB: Dragalia Lost\nC: Fire Emblem Heroes\nD: Dr. Mario World");
        if (quiz.toUpperCase() == "B" || quiz.toUpperCase() == "DRAGALIA LOST") {
            alert("Wow! 400 points!");
            scoreTotal += score400;
            mat400.classList.add('answer');
        } else {
            alert("Tough luck, but you knew it was getting harder...\nThe correct answer is\nB: Dragalia Lost");
            mat400.classList.add('wrong');
        } mat400.disabled = true;
    }

    mat500.addEventListener('click', mature500);
    function mature500() {
        let quiz = prompt("This game was the very first Nintendo published 'M rated' game.\n\nA: Eternal Darkness\nB: Mortal Kombat\nC: DOOM\nD: Resident Evil 4"); 
        if (quiz.toUpperCase() == "A" || quiz.toUpperCase() == "ETERNAL DARKNESS") {
            alert("NO WAY! You got it right! 500 points!");
            scoreTotal += score500;
            mat500.classList.add('answer');
        } else {
            alert("Yeah... I wouldn't blame you for getting this one wrong...\nThe correct answer is\nA: Eternal Darkness");
            mat500.classList.add('wrong');
        } mat500.disabled = true;
    }


const finalQuestion = document.querySelector("#last");
finalQuestion.addEventListener('click',lastFight);
function lastFight() {
    let quiz = prompt("This Tanooki charges you endlessly, sinking you into deeper debt."); 
        if (quiz.toUpperCase() == "TOM NOOK" || quiz.toUpperCase() == "NOOK") {
            alert("NO WAY! You got it right! 1000 points!");
            scoreTotal += score1000;
            finalQuestion.classList.add('answer');
        } else {
            alert("TOM NOOK WILL TAKE YOUR SOUL.");
            finalQuestion.classList.add('wrong');
        } finalQuestion.disabled = true;
    }


// I need to make an alert that activates when every prompt has been answered.
// This can only happen when the sum = 7500.
// Create a conditional that determines if the player has passed or failed the jeopardy board.
    // Higher points = higher rank
    // Need to create a button that will submit their scores.
const scoreBoard = document.querySelector("#score");
const body = document.querySelector('body');
scoreBoard.addEventListener('click',finalScore);
function finalScore() {
    if (confirm("Are you sure you want to submit your score?")) {
        if (scoreTotal < 2000) {
            gameOver.play();
            body.classList.add('game_over');
            alert("GAME OVER\n" + scoreTotal + " Points");
        } else if (scoreTotal < 6000) {
            niceWork.play();
            body.classList.add('great')
            alert("CONGRATULATIONS!\nIt wasn't easy to come this far... give yourself a pat on the back!\n" + scoreTotal + " Points!");
        } else if (6000 <= scoreTotal) {
            incredible.play();
            body.classList.add('incredible')
            alert("WOW! INCREDIBLE!\nYou're a Nintendo EXPERT!\n...is that a good thing?\n" + scoreTotal + " Points!");
        }
    }
}

// BONUS
// Make another board with double values on HTML, CSS, JavaScript, Git, and Outcomes.
// Give players bonus points for being precise with their answers.

// AUDIO
const gameOver = new Audio('sounds/Game-over effect.mp3');
const niceWork = new Audio('sounds/nice_work.mp3');
const incredible = new Audio('sounds/incredible.mp3');