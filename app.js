 let gameSeq=[];
 let userSeq=[];

 let btns=["yellow" , "red" , "purple", "green"];

 let started=false;
 let level=0;
 let h2=document.querySelector("h2");

 document.addEventListener("keypress" , startGame);//taki pure body pe kam kre eventlistener
  document.addEventListener("click", startGame);
document.addEventListener("touchstart", startGame);
function startGame(){
    if(started==false){
      console.log("game is started");
      started=true;

      levelUp();
    }
  }
 

 function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function () {
  btn.classList.remove("flash");
} , 250);
 }

 function levelUp(){
  userSeq = [];
  level++;
  h2.innerText=`Level ${level}`;


  //choose random button.
let randomidx=Math.floor(Math.random() * 3); //randoom index
console.log(`randomidx ${randomidx}`);
let randColor=btns[randomidx];//random color
console.log(`randColor ${randColor}`);
let randBtn = document.querySelector(`.${randColor}`);

gameSeq.push(randColor);
console.log(gameSeq);
  btnFlash(randBtn);

 } 


function checkAns(idx){
   

   if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp , 1000);
    }
   }
   else{
    h2.innerText = `Game over! Your score was  ${level} Press any key to start`;
    document.querySelector("body").style.backgroundColor ="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },200);
    reset();
   }
}
 


 function btnPress(){
  console.log(this);
  let btn=this;
  btnFlash(btn);

   let userColor=btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);

  checkAns(userSeq.length-1);
 }

 let allBtns=document.querySelectorAll(".btn");//accessing all buttons.
 for(btn of allBtns){
  btn.addEventListener("click" , btnPress);
 }


 function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level =0;
 }