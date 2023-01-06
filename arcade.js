let player1 = "X";
let player2 = "O";
let playing = false;

const gameBoard =   [null,null,null,
                    null,null,null,
                    null,null,null,];

const winningGame = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

const boxes = document.getElementsByClassName("box");
const gameResult = document.querySelector("gameResult");
const playAgain = document.querySelector("playAgain");

console.log("boxes",boxes)
startGame();

function startGame(){
    // boxes.forEach(box => box.addEventListener("click",boxClick))
    for(let i=0;i<boxes.length;i++){
        boxes[i].addEventListener("click",boxClick)
    }
};

function boxClick(event){
console.log("I clicked box 3",[event.target.id])
};

function pickBox(box, index){

};

function nextPlayer(){

};





let gameTable = document.getElementById("gameTable")

function addPlayer(Name){
    alert ("Good luck, "+ Name)

    console.log(Name)
    let playerName = document.createElement("td")
    playerName.innerHTML= Name
    const input= document.getElementById("name")
    input.value= ""

    gameTable.append(playerName)
}

