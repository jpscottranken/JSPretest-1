/*
    1.	Scenario: A person's body mass index (BMI)
        is derived from the weight and height of 
        the individual using the following formula:

        bmi = (weight  / (height * height)) * 703

        BMI is an attempt to quantify the amount of 
        tissue mass (muscle, fat, and bone) in an 
        individual, and then categorize that person 
        as underweight, optimal weight, overweight, 
        or obese based on that value.
 
        Commonly accepted BMI ranges are:
        Underweight: 		    BMI <   18.50
        Optimal weight: 		BMI >=  18.50 and < 25.00
        Overweight: 		    BMI >=  25.00 and < 30.00
        Obese: 			        BMI >=  30.00

              R E Q U I R E M E N T S:
              ========================
    a)	Create constants MINWEIGHT (1 lb.), MAXWEIGHT (777 lbs), 
        MINHEIGHT (12 inches), and  MAXHEIGHT (96 inches).

    b)	At the end of each BMI iteration, ask the user if 
        s/he wants to run the program again and let them do 
        so indefinitely if/as desired.

    c)	For height and weight, do not allow for blank, NaN, 
        or out-of-range inputs.

    d)	Using the formula given, calculate the person's BMI 
        to 2 decimal places.

    e)	Using the calculated BMI and the table shown on the 
        previous page, determine the person’s BMI status, i.e.,
        Underweight, Optimal Weight, Overweight, or Obese.

    f)	Output each person's height, weight, calculated BMI, 
        and BMI status via a JavaScript alert dialog.

    g)	In addition, create accumulators for the following: 

        1.	Total number of underweight persons.
        2.	Total number of optimal weight persons.
        3.	Total number of overweight persons.
        4.	Total number of obese persons.

    h)	And at the end of the program (when the person no 
        longer wants to input any more heights and weights), 
        use a single alert() to print out the totals 
        calculated above.

    i)	Create a simple HTML file (bmi.html) that calls your 
        external JavaScript file (bmi.js) from it.  Put all 
        JavaScript code into bmi.js.
 */

//  Declare and initialize program constants
const MINWEIGHT     =   1       //  Minimum weight allowed
const MAXWEIGHT     = 777       //  Maximum weight allowed
const MINHEIGHT     =  12       //  Minimum height allowed
const MAXHEIGHT     =  96       //  Maximum weight allowed
const MINOPTIMAL    =  18.5     //  Minimum optimal weight BMI
const MINOVER       =  25.0     //  Minimum overweight BMI
const MINOBESE      =  30.0     //  Minimum obese BMI
const OORWEIGHT     = 
"Weight must be between " + MINWEIGHT + " and " + MAXWEIGHT
const OORHEIGHT     = 
"Height must be between " + MINHEIGHT + " and " + MAXHEIGHT

//  Declare and initialize program variables
let height      = 0
let weight      = 0
let bmi         = 0.0
let bmiStatus   = ""
let outputStr   = ""
let again       = ""
let firstChar   = ""
let runAgain    = true

//  Declare and initialize program accumulators
let totalUnderweight    = 0
let totalOptimalweight  = 0
let totalOverweight     = 0
let totalObese          = 0

while (runAgain)
{
    //  Input weight
    weight = parseInt(prompt("Please enter weight between " +
            MINWEIGHT + " and " + MAXWEIGHT + " pounds"))
    
    //  Validate weight
    while (isNaN(weight)     ||
        (weight < MINWEIGHT) ||
        (weight > MAXWEIGHT))
    {
        weight = parseInt(prompt("Please enter weight between " +
            MINWEIGHT + " and " + MAXWEIGHT + " pounds"))
    }

    //  Input height
    height = parseInt(prompt("Please enter height between " +
            MINHEIGHT + " and " + MAXHEIGHT + " inches"))
    
    //  Validate height
    while (isNaN(height)     ||
        (height < MINHEIGHT) ||
        (height > MAXHEIGHT))
    {
        height = parseInt(prompt("Please enter height between " +
            MINHEIGHT + " and " + MAXHEIGHT + " inches"))
    }

    //  Calculate bmi
    //bmi = (weight  / (height * height)) * 703
    bmi = (weight  / Math.pow(height, 2)) * 703

    //  Calculate bmi status
    if (bmi < MINOPTIMAL)       //  < 18.5
    {
        bmiStatus = "Underweight"
        ++totalUnderweight
    }
    else if (bmi < MINOVER)     //  < 25.0
    {
        bmiStatus = "Optimal weight"
        ++totalOptimalweight
    }
    else if (bmi < MINOBESE)   //   < 30.0
    {
        bmiStatus = "Overweight"
        ++totalOverweight
    }
    else
    {
        bmiStatus = "Obese"    //   >= 30.0
        ++totalObese
    }

    //  Print out weight, height, bmi, bmi status
    outputStr  = `Weight: ${weight}\n`
    outputStr += `Height: ${height}\n`
    outputStr += `   BMI: ${bmi.toFixed(2)}\n`
    outputStr += `Status: ${bmiStatus}\n`

    alert(outputStr)

    //  Ask user if they want to run program again
    again = prompt("Run program again? (Y/N)", "Y")
    again = again.toUpperCase()
    firstChar = again.charAt(0)
    if (firstChar !== "Y")
    {
        runAgain = false
    }
}

//  Print out our accumulators
outputStr = ""
outputStr += `Total # Underweight Persons: ${totalUnderweight}\n`
outputStr += `Total # Optimal weight Persons: ${totalOptimalweight}\n`
outputStr += `Total # Overweight Persons: ${totalOverweight}\n`
outputStr += `Total # Obese Persons: ${totalObese}\n`

alert(outputStr)