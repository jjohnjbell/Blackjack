window.onload = function () {
    let playerTotal = 0
    let dealerTotal = 0
    
    let playerBlackJack = false;
    let dealerBlackJack = false;
    let gameEnd = false
    let sumEl = document.getElementById("sum-el")

    const newGame = document.getElementById("newGameBtn")
    const resetBut = document.getElementById("resetBtn")
    const playerBoardEl = document.getElementById("player-board")
    const dealerBoardEl = document.getElementById("dealer-board")
    const cardPath = ["images/ace.png", "images/2.png", "images/3.png",
        "images/4.png", "images/5.png", "images/6.png", "images/7.png",
        "images/8.png", "images/9.png", "images/jack.jpg",
        "images/queen.png", "images/king.jpg"]

    //Add Event Listener to "New Game" button to render the game
    newGame.addEventListener("click", function () {
        if ((!playerBlackJack && !gameEnd) || (!gameEnd && !dealerBlackJack)) {
            play()

        }

        function play() {
            newGame.innerText = "HIT ME"
            //Add new image elements then provide them with random image paths using random index
            let playerPic = document.createElement('img')
            let playerRand = Math.floor(Math.random() * 11)
            playerPic.src = cardPath[playerRand]

            if (playerRand >= 10) {
                playerTotal += playerRand
            } else {
                //Keep track of playerTotal 
                playerTotal += playerRand + 1
            }


            let dealerPic = document.createElement('img')
            let dealerRand = Math.floor(Math.random() * 11)
            dealerPic.src = cardPath[dealerRand]

            if (dealerRand >=10){
                dealerTotal += dealerRand
            } else {
                dealerTotal += dealerRand + 1
            }
  

            //Append the newly created Image elements to the div sectional
            playerBoardEl.appendChild(playerPic)
            dealerBoardEl.appendChild(dealerPic)
            sumEl.textContent = ` Dealer Sum: ${dealerTotal}  Player Sum: ${playerTotal}`


            // //Logics of Game
            // if (playerTotal === 21) {
            //     playerWon()

            // } else if (playerTotal > 21) {

            //     lost()

            // }


            //Logics of Game
            if ((playerTotal === 21 && dealerTotal != 21) || (playerTotal < 21 && dealerTotal>21)) {
                playerWon(playerTotal)

            } else if ((dealerTotal === 21 &&  playerTotal != 21) || (dealerTotal < 21 && playerTotal > 21)) {

                playerLost(dealerTotal)

            }else if (dealerTotal > 21 && playerTotal > 21) {
                draw()
            }




        }


        function draw() {
            newGame.style.display = "none"
            resetBut.innerText = "NEW GAME"
            gameEnd = true
            sumEl.textContent = `DRAW! 
            Dealer Sum: ${dealerTotal}      Player Sum: ${playerTotal}`
        }



        function playerWon(victory) {
            if(victory ===21){
                playerBlackJack = true
                sumEl.textContent = `CONGRATULATIONS!
                 YOU GOT BLACKJACK! ${playerTotal}`
            } else {
                sumEl.textContent = `CONGRATULATIONS! YOU WON!
                 Dealer Sum: ${dealerTotal}       Player Sum: ${playerTotal}`
            }
            newGame.style.display = "none"
            resetBut.innerText = "NEW GAME"
            gameEnd = true
        }

        function playerLost(victory) {
            if(victory === 21){
                dealerBlackJack=true
                sumEl.textContent = `You Lost! Dealer Got BlackJack 
                Dealer Sum: ${dealerTotal}    Player Sum: ${playerTotal}`
            }else{
                sumEl.textContent = `You Lost! 
                Dealer Sum: ${dealerTotal}       Player Sum: ${playerTotal}`
            }
            newGame.style.display = "none"
            resetBut.innerText = "NEW GAME"
            gameEnd = true

        }
    })

    //Reset Button created to start a fresh Game
    resetBut.addEventListener("click", function () {
        newGame.style.display = "inline"
        resetBut.innerText = "RESET"
        playerBoardEl.innerHTML = ""
        dealerBoardEl.innerHTML = ""
        playerTotal = 0
        dealerTotal = 0
        sumEl.textContent = ""
        gameEnd = false
        blackjack = false
    })









} //end of Window onload function
