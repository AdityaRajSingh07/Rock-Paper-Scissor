const choices=["Rock","Paper","Scissors"]

const buttons=document.querySelectorAll(".button")
const userChoiceDisplay=document.getElementById("user-choice")
const computerChoiceDisplay=document.getElementById("computer-choice")
const resultDisplay=document.getElementById("result")

buttons.forEach(button => {
    button.addEventListener("click",(e)=>{
        const userChoice=e.target.value
        userChoiceDisplay.textContent=`Your choice: ${userChoice}`

        const computerChoice=choices[Math.floor(Math.random()*choices.length)]
        computerChoiceDisplay.textContent=`computer choice: ${computerChoice}`

        const result=getResult(userChoice,computerChoice)
        resultDisplay.textContent=`result: ${result}`

    })

    function getResult(userChoice,computerChoice){
        if(userChoice===computerChoice){
            return "Draw!"
        }
        else if((userChoice==="Rock" && computerChoice==="Scissors") || (userChoice==="Paper") && (computerChoice==="Rock") || (userChoice==="Scissors") && (computerChoice==="Paper")){
            return "You win"
        }
        else{
            return "You loss"
        }

    }
    
});