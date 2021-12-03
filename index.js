window.onload = function () {
    let total = 0
    let blackjack = false;
    let gameEnd = false
    let sumEl = document.getElementById("sum-el")

    const newGame = document.getElementById("newGameBtn")
    const resetBut = document.getElementById("resetBtn")
    const boardEl = document.getElementById("board")
    const cardPath = ["images/ace.png", "images/2.png", "images/3.png",
        "images/4.png", "images/5.png", "images/6.png", "images/7.png",
        "images/8.png", "images/9.png", "images/jack.jpg",
        "images/queen.png", "images/king.jpg"]

    //Add Event Listener to "New Game" button to render the game
    newGame.addEventListener("click", function () {
        if (!blackjack && !gameEnd) {
            play()

        }

        function play() {
            newGame.innerText = "HIT ME"
            //Add new image elements then provide them with random image paths using random index
            let pic = document.createElement('img')
            let ran = Math.floor(Math.random() * 11)
            pic.src = cardPath[ran]
            if (ran >= 10) {
                total += ran
            } else {
                //Keep track of Total 
                total += ran + 1
            }
            //Append the newly created Image elements to the div sectional
            boardEl.appendChild(pic)
            sumEl.textContent = ` Sum:  ${total}`
            //Logics of Game
            if (total === 21) {
                won()

            } else if (total > 21) {

                lost()

            }

        }

        function won() {
            newGame.style.display = "none"
            resetBut.innerText = "NEW GAME"
            blackjack = true
            gameEnd = true
            sumEl.textContent = `CONGRATULATIONS! YOU GOT BLACKJACK! ${total}`

        }

        function lost() {
            newGame.style.display = "none"
            resetBut.innerText = "NEW GAME"
            sumEl.textContent = `You Lost!  ${total}`
            gameEnd = true

        }
    })

    //Reset Button created to start a fresh Game
    resetBut.addEventListener("click", function () {
        newGame.style.display = "inline"
        resetBut.innerText = "RESET"
        boardEl.innerHTML = ""
        total = 0
        sumEl.textContent = ""
        gameEnd = false
        blackjack = false
    })









} //end of Window onload function
