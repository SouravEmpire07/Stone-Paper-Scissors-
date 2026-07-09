 let userScore = 0;
 let compScore =0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

 const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
 }

 const drawGame = () => {
    console.log("draw");
    msg.innerText = "Game was Draw! Try Again...";
    msg.style.backgroundColor = "#081b31";
    
 } 

 const showWinner =(userWin,userChoice,compChoice)=> {
    if(userWin) {
        console.log(`you win! ${userChoice} beats ${compChoice}`);
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }else{
        console.log(`you lose! ${compChoice} beats ${userChoice}`);
        msg.innerText =` You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
 }

 const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice", compChoice);

    if(userChoice == compChoice) {
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "stone") {
         userWin =  compChoice === "paper" ? false : true;
        }else if(userChoice  === "paper") {
            userWin =  compChoice === "scissors" ? false : true;   
        }else if(userChoice === "scissors") {
            userWin =  compChoice === "stone" ? false : true;   
        }
        showWinner(userWin, userChoice, compChoice);
        
    }
 } 



 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
 });

