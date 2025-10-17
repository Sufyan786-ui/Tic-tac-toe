let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turn0 = true;

const winpatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

reset.addEventListener("click", () => {
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
    turn0 = true; // reset turn to O
});

function disableButton(){
    for(let box of boxes){
        box.disabled = true;
    }
}

function checkWinner(){
    for(let pattern of winpatterns){
        let pos1 = pattern[0];
        let pos2 = pattern[1];
        let pos3 = pattern[2];
        if(boxes[pos1].innerText !== "" &&
           boxes[pos1].innerText === boxes[pos2].innerText &&
           boxes[pos2].innerText === boxes[pos3].innerText){
            alert(boxes[pos1].innerText + " has won the game!");
            disableButton();
            return;
        }
    }

    // Optional: check for draw
    let isDraw = [...boxes].every(box => box.innerText !== "");
    if(isDraw){
        alert("It's a draw!");
    }
}
