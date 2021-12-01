window.onload = function () {
    let currentNum = 0
    let blackjack = false;
    let gameEnd = false

    let sumEl = document.getElementById("sum-el")
    let newGame = document.getElementById("newGameBtn")
    let resetBut = document.getElementById("resetBtn")

    let boardEl = document.getElementById("board")
    const cardPath = ["images/ace.png", "images/2.png", "images/3.png",
        "images/4.png", "images/5.png", "images/6.png", "images/7.png",
        "images/8.png", "images/9.png", "images/jack.jpg",
        "images/queen.png", "images/king.jpg"]


    newGame.addEventListener("click", function () {
        if (!blackjack && !gameEnd) {
            let pic = document.createElement('img')
            let ran = Math.floor(Math.random() * 11)
            pic.src = cardPath[ran]
            currentNum += ran + 1
            boardEl.appendChild(pic)
            sumEl.textContent = ` Sum:  ${currentNum}`
            if (currentNum === 21) {
                blackjack = true
                gameEnd = true
                sumEl.textContent = `CONGRATULATIONS! YOU GOT BLACKJACK! ${currentNum}`

            } else if (currentNum > 21) {
                blackjack = false
                gameEnd = true
                sumEl.textContent = `Sorry, you lost! ${currentNum}`
            }

        }
    })

    resetBut.addEventListener("click", function () {
        boardEl.innerHTML = ""
        currentNum = 0
        sumEl.textContent = ""
        gameEnd = false
        blackjack = false
    })









} //end of Window onload function
