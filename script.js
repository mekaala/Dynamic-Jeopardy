// Selected for each individual button by query selecting for both their class and id.

// To make the questions, I will need a prompt that asks a question
// and an empty text box that asks for an answer.
// If the input is the same as the answer variable, then the answer is correct,
// and the accrued points will add to the total.
// Else: the player gets no points, and will return to the screen.



const nin100 = document.querySelector(".Nintendo > #first");
const nin200 = document.querySelector(".Nintendo > #second");
const nin300 = document.querySelector(".Nintendo > #third");
const nin400 = document.querySelector(".Nintendo > #fourth");
const nin500 = document.querySelector(".Nintendo > #fifth");


nin100.addEventListener('click', nintendo100);
function nintendo100() {
    let quiz = prompt("Who is Mario's brother?") 
    if (quiz.toUpperCase() == "LUIGI") {
        alert("Good job! You have earned 100 points.")
    } else {
        alert("Really? You couldn't get the 100 point question right?")
    }
}

nin200.addEventListener('click', nintendo200);
function nintendo200() {
    let quiz = prompt("Who is Mario's brother?") 
    if (quiz.toUpperCase() == "LUIGI") {
        alert("Good job! You have earned 100 points.")
    } else {
        alert("Really? You couldn't get the 100 point question right?")
    }
}

nin300.addEventListener('click', nintendo300);
function nintendo300() {
    let quiz = prompt("Who is Mario's brother?") 
    if (quiz.toUpperCase() == "LUIGI") {
        alert("Good job! You have earned 100 points.")
    } else {
        alert("Really? You couldn't get the 100 point question right?")
    }
}

nin400.addEventListener('click', nintendo400);
function nintendo400() {
    let quiz = prompt("Who is Mario's brother?") 
    if (quiz.toUpperCase() == "LUIGI") {
        alert("Good job! You have earned 100 points.")
    } else {
        alert("Really? You couldn't get the 100 point question right?")
    }
}

nin500.addEventListener('click', nintendo500);
function nintendo500() {
    let quiz = prompt("Before publishing The Legend of Zelda: Breath of the Wild in 2017, what open world game did Nintendo publish in 2015?") 
    if (quiz.toUpperCase() == "XENOBLADE CHRONICLES X" || quiz.toUpperCase() == "XENOBLADE X" || quiz.toUpperCase() == "XENOBLADEX") {
        alert("NO WAY! You got it right! 500 points!")
    } else {
        alert("Yeah... I wouldn't blame you for getting this one wrong...")
    }
}


const pho100 = document.querySelector(".Photography > #first");
const pho200 = document.querySelector(".Photography > #second");
const pho300 = document.querySelector(".Photography > #third");
const pho400 = document.querySelector(".Photography > #fourth");
const pho500 = document.querySelector(".Photography > #fifth");





const food100 = document.querySelector(".Food > #first");
const food200 = document.querySelector(".Food > #second");
const food300 = document.querySelector(".Food > #third");
const food400 = document.querySelector(".Food > #fourth");
const food500 = document.querySelector(".Food > #fifth");





const world100 = document.querySelector(".World > #first");
const world200 = document.querySelector(".World > #second");
const world300 = document.querySelector(".World > #third");
const world400 = document.querySelector(".World > #fourth");
const world500 = document.querySelector(".World > #fifth");





const ast100 = document.querySelector(".Astronomy > #first");
const ast200 = document.querySelector(".Astronomy > #second");
const ast300 = document.querySelector(".Astronomy > #third");
const ast400 = document.querySelector(".Astronomy > #fourth");
const ast500 = document.querySelector(".Astronomy > #fifth");