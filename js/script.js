//Get all the cards
var cards = document.querySelectorAll('.card');

//Keep track of the first and second cards that are flipped
var firstCard, secondCard;

//Add event listener to each card
cards.forEach(function(card) {
    card.addEventListener('click', flipCard);
    });


//Flip the card
function flipCard() {
    this.classList.add('flipped');
    if (!firstCard) {
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMatch();
}

//Check for match
function checkForMatch() {
    if (firstCard.innerHTML === secondCard.innerHTML) {
        disableCards();
        return;
    }
    unflipCards();
}

//Disable cards
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

//Unflip cards
function unflipCards() {
    setTimeout(function() {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1500);
}

//Reset board
function resetBoard() {
    firstCard = null;
    secondCard = null;    
}

//Shuffle cards
(function shuffle() {
    cards.forEach(function(card) {
        var randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();


