 let randomNumber = parseInt(Math.random()*100 + 1)
 console.log(randomNumber)
 const submit = document.querySelector("#subt")
 const userInput = document.querySelector("#guessField")
 const guessSlot = document.querySelector(".guesses");
 const remaining = document.querySelector(".lastResult");
 const lowOrHi = document.querySelector(".loworHi")
 const startOver = document.querySelector(".resultParas")

 let prevGuess = []
 let numGuess = 1
const p = document.createElement("p")
 let playGame = true;

 if (playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
 }

 function validateGuess(guess){
    if (isNaN(guess)){
        alert("Enter a valid number !")
    }else if(guess<1){
        alert("Enter a number greater than 1 !")
    }
    else if(guess>100){
        alert("Enter a number less than 100 !")
    }
    else{
        prevGuess.push(guess);
        if (numGuess===10){
            displayGuess(guess);
            displayMessage(`Game over random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }

    }
 }
 function checkGuess(guess){
    if (guess=== randomNumber){
        displayMessage("Hurray ! You Guessed the right number .")
        
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage("Number is Low !")

    }
    else if(guess > randomNumber){
        displayMessage("Number is High !")

    }
 }

 function displayGuess(guess){
    userInput.vaue = ""
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
    
 }
 function endGame(){
    userInput.value = ``;
    userInput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()

 }
 function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click",function(e){
        randomNumber  = parseInt(Math.random()*100 + 1)
        prevGuess = []
        lowOrHi.innerHTML = ''
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = ''

        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame = true
    })
 }
 function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

 }