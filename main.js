let computerNum = 0;
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let mainImg = document.querySelector(".main-img")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 3;
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let history=[]

chanceArea.textContent= `남은기회:${chances}`;

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus",function(){userInput.value=""})

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("정답",computerNum);
}

function play(){
   let userValue =  userInput.value

    if(userValue <1 || userValue >100){
        resultArea.textContent="1과 100사이 숫자를 입력해주세요"
        return
    }
    if(history.includes(userValue)){
        mainImg.src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGx1czBoOG9lNmVmazZwdDYyNTYxdDNrbzlubWdsc2NjcjRqbnRqdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mz6aYifIzDqOuZSvEd/giphy.gif"
        resultArea.textContent="이미 입력한 숫자입니다."
        return
    }
    
    chances --;
    chanceArea.textContent= `남은기회:${chances},(정답은:${computerNum})`;
    history.push(userValue)

   if (userValue < computerNum){
        mainImg.src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmxta3E5NzA1bXdza3ExNHpqNTM3eTlqcjduOXV3c3FkZmgzeWphcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zihFgY0dbmlB6UOzpi/giphy.gif"
        resultArea.textContent="UP!"
   }else if(userValue>computerNum){
        mainImg.src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeno0amkwenV1MXJ1bjhjOTd0cms3cTluZXV2ZGR4b2tycXpjanQyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LkuPxRS0F6gmc/giphy.gif"
        resultArea.textContent="DOWN!"
   } else if(userValue==computerNum){
        mainImg.src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzdscHNmNXBwd2hnZGkzODliNXdyaWUwNzI1d3Nxa2xxdXliaG1vciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ov09jGgEThFKpxZ9eC/giphy.gif"
        gameOver=true;
        resultArea.textContent="tada!"
        chanceArea.textContent=""
   } 

   
   if (chances == 0 && userValue != computerNum){
    gameOver = true
    resultArea.textContent=`게임오버! 정답은~ ${computerNum} `
    mainImg.src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVlMHVxaGVoM2x6d3I2Mmx5bGR6MDV1ZnJpdnZocTNwdWd2eW9pdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JUSwkiO1Eh5K43ruN0/giphy.gif"
   }

   if (gameOver == true){
    playButton.disabled = true
 
   }
}

function reset(){
    // user input 창이 깨끗하게 정리되고
    userInput.value = "";
    // 새로운 번호가 생성되고
    pickRandomNum();
    gameOver = false;
    resultArea.textContent=""
    mainImg.src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXN4ZzgzajJldHh4Nnp6dHo3aTJzMGNwNHVpdHpiYnh2bXA2a3Z4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X5Yf2ucVFl7eU5Ir50/giphy.gif"
    chances = 5;
    chanceArea.textContent= `남은기회:${chances},(정답은:${computerNum})`;
    playButton.disabled = false;
    history = [];
}


pickRandomNum()