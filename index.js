window.onload = function () {
    let currentNum = 0
    let blackjack = false;

    let sumEl = document.getElementById("sum-el")
    let newGame = document.getElementById("newGameBtn")
    let resetBut = document.getElementById("resetBtn")

    let boardEl = document.getElementById("board")
    const cardPath = ["images/ace.png", "images/2.png", "images/3.png",
        "images/4.png", "images/5.png", "images/6.png", "images/7.png",
        "images/8.png", "images/9.png", "images/jack.jpg",
        "images/queen.png", "images/king.jpg"]


    newGame.addEventListener("click", function () {
            let pic = document.createElement('img')
            let ran = Math.floor(Math.random() * 11)
            pic.src = cardPath[ran]
            boardEl.appendChild(pic)
            checkWin()
            currentNum += ran + 1
            sumEl.textContent = ` Sum:  ${currentNum}`
    })

    function checkWin(){
       if (currentNum === 21) {
            blackjack = true
            sumEl.textContent = `Congratulations! You Won!`
        } else {
            blackjack = false
            sumEl.textContent = `Sorry! You lost! New Game?`
        }
    }

    resetBut.addEventListener("click", function () {
        boardEl.innerHTML = ""
        currentNum = 0
        sumEl.textContent = ""
    })









} //end of Window onload function
