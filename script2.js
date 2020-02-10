// Created point values.
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

const btns = document.getElementsByClassName("openmodal");
const modal = document.querySelectorAll(".modal");
const spans = document.getElementsByClassName("close-btn");
const answer = document.querySelectorAll(".modal-footer");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', openModal);
    function openModal() {
        modal[i].style.display = "block";
    }
}

for (let i = 0; i < spans.length; i++) {
    spans[i].addEventListener('click', closeBox);
    function closeBox() {
       modal[i].style.display = "none";
       Array.from(document.querySelectorAll(".modal-footer"), e => e.style.display = "none");
    }
 }

 window.onclick = function(event) {
    if (event.target == modal) {
      modal[i].style.display = "none";
    }
  }

// Choose an answer
// Clicking button will display answer at bottom
// Right answer will turn button blue
// Wrong answer will turn button red
// Button will be disabled

const multButton = document.querySelectorAll(".modal-content");
for (let i = 0; i < multButton.length; i++) {
    multButton[i].addEventListener('click', showAnswer);
    function showAnswer() {
        for (let i = 0; i < answer.length; i++) {
            answer[i].style.display = "block";
        } btns[i].disabled = true;
    }
}

const correctAnswer = document.querySelectorAll(".correct");
for (let i = 0; i < correctAnswer.length; i++) {
    correctAnswer[i].addEventListener('click', getPoints);
    function getPoints() {
        btns[i].classList.add('correct');
    }
}




















// Defined variables for the correct multiple choice answer
// (depending on the value of the question),
// such that awards the correct amount of points to player
// by adding new points to the total they have collected so far.
const p100 = document.querySelectorAll("#one")
for (let i = 0; i < p100.length; i++) {
p100[i].addEventListener('click',add100);
function add100() {
    scoreTotal += score100;
}}
const p200 = document.querySelectorAll("#two")
for (let i = 0; i < p200.length; i++) {
p200[i].addEventListener('click',add200);
function add200() {
    scoreTotal += score200;
}}
const p300 = document.querySelectorAll("#three")
for (let i = 0; i < p300.length; i++) {
p300[i].addEventListener('click',add300);
function add300() {
    scoreTotal += score300;
}}
const p400 = document.querySelectorAll("#four")
for (let i = 0; i < p400.length; i++) {
p400[i].addEventListener('click',add400);
function add400() {
    scoreTotal += score400;
}}
const p500 = document.querySelectorAll("#five")
for (let i = 0; i < p500.length; i++) {
p500[i].addEventListener('click',add500);
function add500() {
    scoreTotal += score500;
}}









const scoreBoard = document.querySelector("#score");
const body = document.querySelector('body');
scoreBoard.addEventListener('click',finalScore);
function finalScore() {
    if (confirm("Are you sure you want to submit your score?")) {
        if (scoreTotal < 2000) {
            gameOver.play();
            body.classList.add('game_over');
            alert("GAME OVER\n" + scoreTotal + " Points");
        } else if (scoreTotal < 7000) {
            niceWork.play();
            body.classList.add('great')
            alert("CONGRATULATIONS!\nIt wasn't easy to come this far... give yourself a pat on the back!\n" + scoreTotal + " Points!");
        } else if (7000 <= scoreTotal) {
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


