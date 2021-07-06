// Play game for the first time
play();

function play() {

    // UI Vars
    const playBtn = document.querySelector('.btn');
    const cards = Array.from(document.querySelectorAll('.card'));
    const matchCounter = document.querySelector('#main p');
    const playCard = document.querySelector('.play-again');

    cards.forEach(function (card) {
        card.className = 'card logo';
    })

    // Global Variables
    let images = ['amazing', 'scarlet', 'noir', 's-2099', 'future', 'miles'];
    const newCards = [];
    let cardsPicked = [];
    let matches = 0;

    // Resetting counter
    matchCounter.innerHTML = `Matches - ${matches} out of 6`;

    playCard.classList.add('not-active');



    generateRandom();

    // Generating random selection
    function generateRandom() {

        let index;

        // Have to pick 2 cards


        // Generate random number in range of total number of cards
        while (cards.length > 0) {

            let counter = 2;
            while (counter > 0) {
                let totalCards = cards.length;

                // Generate a random index
                index = Math.floor(Math.random() * totalCards);

                // Add a random image from the array of images
                cards[index].classList.add(images[0]);

                // Remove the card from an array
                newCards.push(cards[index]);
                cards.splice(index, 1);

                // Decrement counter
                counter--;
            }

            // Remove the image from the image Array
            images.shift();

        }
    }

    console.log(newCards);


    // Load All Event Listener
    loadAllEventListeners();

    function loadAllEventListeners() {

        // Clicking a card
        newCards.forEach(function (card) {
            card.addEventListener('click', displayCard);
        });

        // Clicking play again
        playBtn.addEventListener('click', play);


    }

    // Checking card function
    function displayCard(e) {

        if (cardsPicked.length < 2) {
            e.target.classList.remove('logo');

            // Add the cards to an array
            cardsPicked.push(e.target);

            console.log(cardsPicked);

            if (cardsPicked.length == 2) {
                setTimeout(() => {


                    // Check if cards match
                    if (cardsPicked[0].classList[1] == cardsPicked[1].classList[1]) {
                        console.log('Correct match');
                        matches += 1;
                        cardsPicked = [];

                        // Check if win
                        checkWin();

                    } else {
                        console.log('Incorrect match');
                        cardsPicked[0].classList.add('logo');
                        cardsPicked[1].classList.add('logo');
                        cardsPicked = [];
                    }



                }, 800);
            }

        }

    }

    // Checking win condition
    function checkWin() {


        // Add counter
        matchCounter.innerHTML = `Matches - ${matches} out of 6`;

        if (matches == 6) {
            
            // Displaying card
            playCard.classList.remove('not-active');

        }

    }
}