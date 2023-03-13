/*
      2.	Scenario: Write a JavaScript program that generates 
          a random number 1 - 100 and asks the user to guess 
          the number.  
          
      See the following URL: https://www.w3schools.com/js/js_random.asp

                      Requirements:
                      =============
      a)	Create constants MINGUESS (1), MAXGUESS (100),
          and any string error text desired.

      b)	At the end of each guessing game iteration, ask 
          the user if s/he wants to run the program again and 
          let them do so indefinitely if/as desired.

      c)	Put in code to clear all variables at the beginning 
          of each program run.

      d)	Put in the code that generates a random number from 
          1 – 100 (use the constants).

      e)	Put in the code that lets the user make a guess. 

      f)	Put in the code to determine the guess status 
          (too high, too low, or correct guess).

        If a (non-) guess is non-numeric, < 1 or > 100, the 
        program should display "All guesses must be numbers 
        between 1 - 100.  Please try again."  Do not increment 
        total guesses.

        If a guess (e.g., 67) is higher/lower than the 
        generated random number, the program should display 
        "The guess of 67 is too high/low. Please try again."  
        Do increment total guesses.

        If a guess (e.g., 67) is correct, the user should be 
        given an associated message like "The guess of 67 in 4 
        guesses was correct!"  Increment total guesses.  Do 
        increment total guesses.

      g)	The program should continue to solicit user guesses 
          until the user correctly guesses the random number 
          and then print out the message as shown above. Let 
          the user continue to “play the game” as many times 
          as desired, generating a new random number each time.
 */

//  Declare and initialize program constants
const MINGUESS =   1            //  Minimum legal guess to make
const MAXGUESS = 100            //  Maximum legal guess to make
const ILLGUESS = "Illegal Guess. Must Be A Number Between 1 - 100"
const TGO      = "The Guess Of "
const TOOHIGH  = " Was Too High."
const TOOLOW   = " Was Too Low."
const CORRECT  = " Was Correct In "
const PTA      = "\nPlease Try Again"

//  Declare and initialize program variables
let guess        = 0
let totalGuesses = 0
let again        = ""
let firstChar    = ""
let runAgain     = true
let wrongNumber  = true

let randNum = Math.floor(Math.random() * 100) + 1

while (runAgain)
{
    alert("New Game Starting Now!!!")
    
    while (wrongNumber)
    {
        //  Make guess
        guess = parseInt(prompt("Make a guess between " +
                MINGUESS + " and " + MAXGUESS))

        //  Validate Guess
        while (isNaN(guess)      ||
            (guess < MINGUESS) ||
            (guess > MAXGUESS))
        {
            alert(ILLGUESS)
            guess = parseInt(prompt("Make a guess between " +
                MINGUESS + " and " + MAXGUESS), 50)
        }

        //  Increment total number of guesses
        ++totalGuesses

        //  Figure out the status of a valid guess
        if (guess < randNum)                        //  Guess too low
        {
            alert(TGO + guess + TOOLOW + PTA)
        }
        else if (guess > randNum)                   //  Guess too high
        {
            alert(TGO + guess + TOOHIGH + PTA)
        }
        else                                        //  Guess correct
        {
            alert(TGO + guess + CORRECT + totalGuesses + " Guesses")
            wrongNumber = false
        }
    }

    //  Prompt use to run program again
    again = prompt("Run Program Again?(Y/N)", "Y")
    again = again.toUpperCase()
    firstChar = again.charAt(0)
    if (firstChar !== "Y")
    {
        runAgain = false
    }
    else 
    {
        totalGuesses = 0
        randNum = Math.floor(Math.random() * 100) + 1
        wrongNumber = true
        runAgain = true
    }
}

