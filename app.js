let boxes=document.querySelectorAll(".box");
let  resetBtn=document.querySelector("#reset");
let newGameBten=document.querySelector("#new");
let messageContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg"); 

let turnO=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame =() =>{
    turnO=true;
    EnablesBoxes();
    
}
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("boxes was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner()
    });
});
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const EnablesBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        messageContainer.classList.add("hide");
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations the winner is ${winner}`
    messageContainer.classList.remove("hide");
    disabledBoxes();
}
const checkwinner= ()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }

}
resetBtn.addEventListener("click",resetGame);
newGameBten.addEventListener("click",resetGame);

