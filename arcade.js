let currentPlayer = "X";
let bot = "O";
let playing = false;
let playingBot = false;


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
const gameResult = document.getElementById("gameResult");
const playAgain = document.getElementById("playAgain");

console.log("boxes",boxes)
// startGame();



playAgain.addEventListener("click",startGame);

function startGame(){
    for(let i=0;i<boxes.length;i++){
        boxes[i].addEventListener("click",boxClick);
        gameBoard[i] = "";
        boxes[i].textContent = ""
    }

    let playerNum = document.getElementsByTagName("td");
    if(playerNum.length== 1){
        addPlayer("Computer")
        playingBot = true;
    }
    gameResult.textContent = `${currentPlayer}'s Turn!`;
    playing = true;
}



function boxClick(event){
    console.log("",[event.target.id]);
    const boxIndex = this.getAttribute("id");
    
    if(gameBoard[boxIndex] !== "" || !playing){
        console.log(boxIndex,"boxIndex");
        return;
    }

    pickBox(this, boxIndex);
    whoWon();
}


function pickBox(box, index){
    gameBoard[index]= currentPlayer;
    box.textContent = currentPlayer;
    if(gameBoard[index]!== currentPlayer){
        gameBoard[index]= bot;
        box.textContent = bot;
    }
    
}




function nextPlayer(){

    if (currentPlayer === "X"){
        currentPlayer = "O"
    }else{
        currentPlayer = "X"
    }

    if(playing == true){
        gameResult.textContent = `${currentPlayer}'s Turn!`;
        if(playingBot == true && currentPlayer =="O"){
            botMoves()
    }
   
    }
    
}   

function whoWon(){
    for(let i=0; i<winningGame.length;i++){
        let winCondition= winningGame[i];
        if (gameBoard[winCondition[0]] == currentPlayer && gameBoard[winCondition[1]] == currentPlayer && gameBoard[winCondition[2]] == currentPlayer){
            gameResult.textContent = `${currentPlayer} WON!`;
            playing = false;
        }
    }

    if(gameBoard.indexOf("")==-1){
        gameResult.textContent = `Draw! Try again!`;
        playing = false;
    }
    
    nextPlayer();
}


let gameTable = document.getElementById("gameTable")

function addPlayer(Name){
    alert ("Good luck, "+ Name + "!")

    console.log(Name)
    let playerName = document.createElement("td");
    playerName.innerHTML= Name;
    const input= document.getElementById("name");
    input.value= "";

    gameTable.append(playerName);

    // startGame()
}


// AI dumb bot
   
    console.log("indexChosen", indexChosen);
    

function botMoves(){
    
    let botMoves = [];
    for(let i=0; i<gameBoard.length; i++){
        if (gameBoard[i]==""){
            botMoves.push(i)
        }
       
    }
    const indexChosen = Math.floor(Math.random()*botMoves.length);
    let botBox = document.getElementById(indexChosen);
    
    pickBox(botBox,indexChosen);
    whoWon()

}


// AI very smart bot
//  const botMove = ()=>{
//     let bestScore = -Infinity; 
//     let move;

//     for(let i=0; i<3; i++){
//         for(let j=0; j<3; j++){
//             if(gameBoard[i][j]== ""){
//                 gameBoard[i][j] = bot;
//                 let score = minimax(gameBoard,0,false); 
//                 board[i][j] = "";
//                 if(score > bestScore){
//                     bestScore = score;
//                     move = {i,j};
//                 }
//             }
//         }
//     }
//     return move;
//  };

//     const minimax = (gameBoard,depth,isMaximizing) =>{
//     let result = whoWon();
//     if (result !== null){
//         return score[result];
//     }

//     if(isMaximizing){
//         let bestScore = -Infinity;
//         for(let i=0; i<3; i++){
//             for(let j=0; j,3; j++){
//                 if(gameBoard [i][j]==""){
//                     gameBoard[i][j] = bot;
//                     let score = minimax(gameBoard,depth+1,false);
//                     board [i][j] = "";
//                     bestScore = Math.max(score,bestScore);
//                 }
//             }
//         }
//         return bestScore;
//     }else{
//         let bestScore = Infinity;
//         for(let i=0; i<3; i++){
//             for(let j=0; j,3; j++){
//                 if(gameBoard [i][j]==""){
//                     gameBoard[i][j] = currentPlayer;
//                     let score = minimax(gameBoard,depth+1,true);
//                     board [i][j] = "";
//                     bestScore = Math.min(score,bestScore);
//                 }
//             }        
//         }
//         return bestScore;
//     }
// }
    
