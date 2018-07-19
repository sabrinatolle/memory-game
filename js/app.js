/*
 * Create a list that holds all of your cards
 */

 

const deck = document.querySelector('.deck');

let toggledCards = [];

let moves = 0;

let clockOff = true;

let time = 0;

let clockId;

let matched = 0;


//getting cards to shuffle

function shuffleDeck() {
    const cardsToShuffle = Array.from(document.querySelectorAll('.deck li'));
    console.log('cards shuffle' , cardsToShuffle);
    const shuffledCards = shuffle(cardsToShuffle);
    for (card of shuffledCards) {
        deck.appendChild(card);
        }
}
shuffleDeck();



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}






//event listener for when card is clicked
deck.addEventListener('click', event => {
    const clickTarget = event.target;
    if (isClickValid(clickTarget)) { 
        if (clockOff) {
            startClock();
            clockOff = false;
        }
        toggleCard(clickTarget);
        addToggleCard(clickTarget);
     } else (toggledCards.length === 2) {
        checkForMatch(clickTarget);
        addMove();
        checkScore();
    console.log(' 2 cards clicked!');
    }
  }
);

// get cards to flip over storing in a function
function toggleCard (card) {
    card.classList.toggle('open');
    card.classList.toggle('show');
} 



function addToggleCard(clickTarget) {
    toggledCards.push(clickTarget);
    console.log(toggledCards);
}

// check for a match
function checkForMatch() {
    if (
        toggledCards[0].firstElementChild.className ===
        toggledCards[1].firstElementChild.className
    ) {
        toggledCards[0].classList.toggle('match');
        toggledCards[1].classList.toggle('match');
        toggledCards = [];
        matched++;
   
} else {
    setTimeout(() => {
    console.log('not a match');
   
    toggleCard(toggledCards[0]);
    toggleCard(toggledCards[1]);
    toggledCards = [];

    }, 1000);
}
}

function isClickValid(clickTarget)
{
    return (
        clickTarget.classList.contains('card') &&
        !clickTarget.classList.contains('match') &&
        toggledCards.length < 2 &&
        !toggledCards.includes(clickTarget)
    );
    
}
// counting moves 
function addMove() {
    moves++;
    const movesText = document.querySelector('.moves');
    movesText.innerHTML = moves;
}

// giving star rating

function checkScore() {
    if (moves === 16 || moves === 24
    ) {
        removeStar();
    }
}
 
// hiding stars
function hideStar() {
    const starList = document.querySelectorAll('.stars li');
    for (star of starList) {
        if (star.style.display !== 'none') {
            star.style.display = 'none';
            break;
      }
   }
}
hideStar();
hideStar();

// starting clock
function startClock() { 
    
     clockId = setInterval(() =>
     {
       time++;
       displayTime();
        console.log(time);
    }, 1000);
}
startClock();

function displayTime(){
    const clock = document.querySelector('.clock');
    
    const seconds = time & 60;
    const minutes = Math.floor(time / 60);
        if (seconds < 10) {
            clock.innerHTML = `${minutes}:0${seconds}`;

        } else {
            clock.innerHTML = `${minutes}:${seconds}`;
        }
    console.log(clock);
    clock.innerHTML = time;
}


// stopping the clock
function stopClock () {
    clearInterval(clockId);
}

function toggleModal() {
    const modal = documents.querySelector('.modal__background');
    modal.classList.toggle('hide');
}

toggleModal() // opens modal
toggleModal() // calling again closes the modal


// modal test
 time = 121;
 displayTime(); // 2:01
 moves =16;
 checkScore(); // 2 stars

 writeModalStats(); // write stats to modal
 toggleModal(); // open modal

function writeModalStats() {
    const timeStat = document.querySelector('.modal__time');
    const clockTime = document.querySelector('.clock').innerHTML;
    const movesStat = document.querySelector('.modal__moves');
    const starsStat = document.querySelector('.modal__stars');
    const stars = getStars();
   
   
    timeStat.innerHTML = `Time = ${clockTime}`;
    movesStat.innerHTML = `Moves = ${moves}`;
    starsStat.innerHTML = `Stars = ${stars}`;
}

function getStars() {
    stars = document.querySelectorAll('.stars li');
    starCount = 0;
    for (star of stars) {
        if (star.style.display !== 'none') {
            starCount++;
        }
    }
}


retun(starCount);
console.log(starCount); //2

//game over

function gameOver() {
    stopClock();
    writeModalStats();
    toggleModal();

}
 // replaying the game

 function replayGame() {
     document.querySelector('.modal__replay').addEventListener('click', replayGame);
     resetGame();
     toggleModal();
 }
     /*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
