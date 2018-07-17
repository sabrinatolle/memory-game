/*
 * Create a list that holds all of your cards
 */
const deck = document.querySelector('.deck');
 
let toggledCards = []; // add the card to a list of open cards



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
deck.addEventListener('click', function (event) {
    const click = event.target;
if (click.classList.contains('card') && toggledCards.length < 2){
    //getting cards to flip over
    toggleCard(click);
  addToggleCard(click);
  if (toggledCards.length === 2) {
      console.log ('2 cards!');
  }
}
});

// get cards to flip over storing in a function
 function toggleCard (click) {
     click.classList.toggle('open');
     click.classList.toggle('show');
 }

 function addToggleCard(click) {
     toggledCards.push(click);
     console.log(toggledCards);
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
