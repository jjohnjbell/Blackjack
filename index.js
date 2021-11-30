window.onload = function () {
let currentNum = 0
let sum = 0
let blackjack = false;
let randNum = Math.floor(Math.random()*11)
let sumEl = document.getElementById("sum-el")
console.log(randNum)
let boardEl = document.getElementById("board")
const cardPath = ["images/ace.png","images/2.png","images/3.png",
                "images/4.png","images/5.png","images/6.png","images/7.png",
                "images/8.png","images/9.png","images/jack.jpg",
                "images/queen.png","images/king.jpg"]
const cards = document.querySelectorAll("image")
const deck = Array.from(cards)


start()


function start(){
    let pic = document.createElement('img')
    pic.src = cardPath[randNum]
    boardEl.appendChild(pic)
    currentNum = randNum + 1
    sumEl.textContent +=  currentNum
}


// <script>
//     var images = ['img/background.png','img/background1.png','img/background2.png','img/background3.png'];
//     var index = 0;

//     function buildImage() {
//       var img = document.createElement('img')
//       img.src = images[index];
//       document.getElementById('content').appendChild(img);
//     }

//     function changeImage(){
//       var img = document.getElementById('content').getElementsByTagName('img')[0]
//       index++;
//       index = index % images.length; // This is for if this is the last image then goto first image
//       img.src = images[index];
//     }
// </script>

// <body onload="buildImage();">
//     <div class="contents" id="content"></div>
//     <button onclick="changeImage()">NextImage</button>
// </body>









} //end of Window onload function
