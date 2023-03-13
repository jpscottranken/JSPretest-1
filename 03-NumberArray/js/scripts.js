/*
	This JavaScript array program will generate
	and print out a 25 element random number 
	array, with each number between 1 - 100.
	
	It will also determine and print out:
	
	The smallest array element.
	The largest  array element.
	The sum of all array elements.
	The average of all array elements.
*/

//	Declare and initialize program constant
const SIZE = 25

//	Declare and initialize program variables
let numbers   = new Array(SIZE)
let smallest  = 101
let largest   =  -1
let sum       =   0
let avg       =   0.0
let outputStr = ""

//	Generate array of 25 random numbers between 1 - 100
for (let i = 0; i < numbers.length; ++i)
{
	//	Generate random numbers
	numbers[i] = Math.floor(Math.random() * 100) + 1

	//	Check for new smallest number
	if (numbers[i] < smallest)
	{
		smallest = numbers[i]
	}
	
	//	Check for new largest number
	if (numbers[i] > largest)
	{
		largest = numbers[i]
	}

	//	Add value of current array element to sum
	sum += numbers[i]
}

//	Calculate average
avg = sum / numbers.length / 1.0

//	Print out all elements in random number array
for (let i = 0; i < numbers.length; ++i)
{
	outputStr += numbers[i] + " "
}

outputStr += `\nThe smallest number in the array is: ${smallest}`

outputStr += `\nThe largest number in the array is: ${largest}`

outputStr += `\nThe sum of all array elements is: ${sum}`

outputStr += `\nThe average number in the array is: ${avg.toFixed(2)}`

alert(outputStr)
