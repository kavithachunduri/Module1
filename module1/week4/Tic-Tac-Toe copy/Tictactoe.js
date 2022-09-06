// creating variables to select the elements
//intialising X as the first player
const turns = document.getElementById('turn')
const restart=document.querySelector('button');
const winningCombo = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,6]];
const divs= document.getElementsByClassName('box');
const gameStatus= document.getElementById('winner-draw')
const boxes =  [...divs]
let currentPlayer = 'X';
let board = Array(9).fill('');
let gameon = false;
// choose a boolean value false  which means the game is not started  when it turns true it means game started
//functions for the game 
//1. to start game- gamestart();
//2.when boxes are getting clicked what should be done.boxisclicked();
//3.changing the status of the box updatebox();
//4.turns between the players changeplayer();
//5.checking for the winner checkingwinner()
//6.restarting the game restart();


const gameStart=() => {
    gameon= true;
    gameStatus.textContent = ` ${currentPlayer} turn`;
    boxes.forEach(box => box.addEventListener('click', boxIsClicked));
    restart.addEventListener('click', reset );
   
}

function boxIsClicked(){
    //let indexOfBox= this.target.id;
    let indexOfBox =  this.getAttribute('id')
    if(board[indexOfBox]!=''|| !gameon){
             return;
    }
    updateBox(this, indexOfBox);
    //changePlayer();
    checkingWinner();
}

//  function to change turns between 2 players
//if the current player is "X" then change it to "O" else its "X"
//cla this func in 
function  changePlayer(){
      if(currentPlayer ==='X'){
        currentPlayer="O";
      }
      else {
        currentPlayer="X";
      }
      gameStatus.textContent = `Player  ${currentPlayer}'s turn`
}

function updateBox(box, i){
    board[i]= currentPlayer;
    box.textContent= currentPlayer;
    
 }

 function checkingWinner(){
        let win = false;
        for(let i=0;i<winningCombo.length;i++){
            let conditionToWin = winningCombo[i];
            let box1= board[conditionToWin[0]];
            let box2= board[conditionToWin[1]];
            let box3= board[conditionToWin[2]];
        if(box1 == "" || box2 == "" || box3 == "")  {
                continue;
             }  
            
        if (box1 == box2 && box2 == box3 && box3 == box1){
        win=true;
        break;   
     }
      
        }

        if(win==true){
            gameStatus.textContent = `Congratualtions...... player ${currentPlayer} has won`
               gameon = false;
        }

        else if(board.includes('')==false){

            gameStatus.textContent = "Its a draw!!!"
            gameon= false;
        }
        else {
            changePlayer();
        }
        // for(let condition of winningCombo){
        //     let [a,b,c]= condition;
        //     if(board[a]&&(board[a]==board[b]&&board[a]==board[c]) ){
        //         return [a,b,c]
        //     }
        //    return false;
        // }

 }
 function reset(){
        currentPlayer="X"  ;
        
        board= Array(9).fill('');   
    boxes.forEach(box=> box.textContent="");
    gameStatus.textContent = ` player ${currentPlayer}'s turn`
    gameon= true;
            
 }
 gameStart();