let turn = "O";
let total_moves = 0;

let winner =[
    [0,1,2], [3,4,5], [6,7,8], //row
    [0,3,6], [1,4,7], [2,5,8], //column
    [0,4,8], [2,4,6]    //diagonal
];

let board_array = new Array(9).fill("E");     //initially all the elements are empty.

function checkWinner(){
    for(let [index0, index1, index2] of winner){
        if(board_array[index0]!= "E" && board_array[index0]===board_array[index1] && board_array[index1]===board_array[index2]){
            return 1;
        }
    }
    return 0;
}


const printer = (event) => {

    const element = event.target;
    if(board_array[element.id] === "E"){

        total_moves++;
        if(turn === "O"){
            element.innerHTML = "O";
            board_array[element.id] = "O";
            if(checkWinner()){
                document.getElementById("winningM-id").innerHTML = "Player O wins!";
                board.removeEventListener('click', printer); // Remove any existing event listener
                // board.style.pointerEvents = "none"; // Disable further clicks
                return;
            }
            turn = "X";
        }
        else{
            element.innerHTML = "X";
            board_array[element.id] = "X";
            if(checkWinner()){
                document.getElementById("winningM-id").innerHTML = "Player X wins!";
                board.removeEventListener('click', printer); // Remove any existing event listener
                // board.style.pointerEvents = "none"; // Disable further clicks
                return;
            }
            turn = "O";
        }

        if(total_moves === 9){
            document.getElementById("winningM-id").innerHTML = "It's a draw!";
            board.removeEventListener('click', printer);
            // board.style.pointerEvents = "none"; // Disable further clicks
        }
    }   
}
        
const board = document.querySelector('.board');
board.addEventListener('click', printer);


const restart = document.getElementById('restartButton');
    restart.addEventListener('click', () => {
        const cell = document.getElementsByClassName("cell");   //html collection or node list
        Array.from(cell).forEach(value => {
            value.innerHTML = "";
        });
    turn = "O";
    total_moves = 0;
    board_array = new Array(9).fill("E"); 
    document.getElementById("winningM-id").innerHTML = ""; // Clear the winning message
    board.addEventListener('click', printer); // Re-enable the event listener 
    // board.style.pointerEvents = "auto"; // Re-enable clicks
    })



    // project: ROCK PAPER SCISSORS