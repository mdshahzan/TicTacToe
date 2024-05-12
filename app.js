let boxes = document.querySelectorAll(".boc");
let reset = document.querySelector("#reset");
let newGame = document.querySelector(".new-btn");
let winnerContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let player0 = true;
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];
const resetGame = ()=>{
    player0 = true;
    enableBox();
}
const disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        winnerContainer.classList.add("hide");
        box.innerText = "";
    
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player0){
            box.innerText = "X";
            player0 = false;
        }
        else{
            box.innerText = "O";
            player0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    winnerContainer.classList.remove("hide");
    disableBox();

}

const checkWinner = ()=>{
    for(let pattern of wins){
        let pos1 = boxes[pattern[0]].innerText;
       let pos2 =  boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;
       if(pos1!="" && pos2!="" && pos3!="" ){
        if(pos1==pos2 &&pos2==pos3 ){
            console.log("winner",pos1);
            showWinner(pos1);
        }
        
       }
    }
}
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);