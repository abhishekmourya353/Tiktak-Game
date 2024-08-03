const boxes=document.querySelectorAll(".box");
const gameinfo=document.querySelector(".ghame-info");
const newGameBtn=document.querySelector(".btn");
let currentplayer;
let Gamegrid;
const winningposition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
//let's creat the frunct5ion initialise the game
function initGame(){
    currentplayer="X";
   Gamegrid=["","","","","","","","",""];
   
   newGameBtn.classList.remove("active");
   boxes.forEach((box,index)=>{
    box.innerText="";
    boxes[index].style.pointerEvents="all";
    box.classList.remove("win");
   });

   gameinfo.innerText = `Current Player - ${currentplayer.toUpperCase()}`;

}
initGame();
function swapturn(){
    currentplayer = currentplayer === "X" ? "O" : "X";
    gameinfo.innerText = `Current Player - ${currentplayer.toUpperCase()}`;
}
  function gameover(){
    let answer="";
    winningposition.forEach((position)=>{
       // alll 3bpox  is empty  and same CSSFontFeatureValuesRule
       if((Gamegrid[position[0]]!==""||Gamegrid[position[1]!==""]||Gamegrid[position[2]!==""])&&
       (Gamegrid[position[0]]===Gamegrid[position[1]])&& (Gamegrid[position[1]]===Gamegrid[position[2]])){
        if(Gamegrid[position[0]]==="X")answer="X";
        else
        answer="O";
    //disable the pointer Event
     boxes.forEach((box)=>{
        box.style.pointerEvents="none";
     });
    // now we kno X/O is a winner
    boxes[position[0]].classList.add("win");
    boxes[position[1]].classList.add("win");
    boxes[position[2]].classList.add("win");

       }
    });
    if(answer!==""){
        gameinfo.innerText = `Winner - ${answer.toUpperCase()}`;        newGameBtn.classList.add("active");
        return;
    }
     // checks if its a draw
     let allBoxesFilled = true;
     Gamegrid.forEach((box) => {
         if(box === ""){
             allBoxesFilled = false;
         }
     });
 
     if(allBoxesFilled){
         gameinfo.innerText = `It's a Draw`;
         newGameBtn.classList.add("active");
     }
  }
function handleCklick(index){
    if(Gamegrid[index] === "" ){
        boxes[index].innerText=currentplayer;
        Gamegrid[index]=currentplayer;
        boxes[index].style.pointerEvents="none";
    }
    // swap kro turn ko
    swapturn();
    //check lkoi jeet toh nhi ghya
    gameover();
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleCklick(index);
    })
});

newGameBtn.addEventListener('click', initGame);