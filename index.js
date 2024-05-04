/* 
sudo - 

Cal structure- 
1 div row with c, / , x
1 div row with two div columns


1. using js to create multiple divs as squares
2. create array of the button content then insert them into each div
3. add event listner to buttons then display buttons in "results "



*/

const results = document.getElementById('results');

const numbers = document.getElementById('numbers');

function numberSquares(i) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('numsquares'); // Add the CSS class
    newSquare.addEventListener('click', insertFunction);

    const buttonText = buttonFunctions[i] === 'x' ? 'x' : buttonFunctions[i]; // Display 'x' for multiplication
    const newNum = document.createElement('span');
    newNum.textContent = buttonText;

    newNum.classList.add('numInSquares'); // Add the CSS class
    
    
    newSquare.appendChild(newNum); // Append the span to the div
    numbers.appendChild(newSquare); // Append the div to the container
}


const buttonFunctions = ["c","/","x","<","7","8","9","-","4","5","6","+","1","2","3","0","(",")","="];

// Create 19 squares
for (let i = 0; i < 19; i++) {
    numberSquares(i);
   
    
}


//-------------------------------------------------------------------
/* Add when button clicked, the span is inputed into the results bar,
then that span is mathed with the next button, then the results of it show
up in the results bar.

IF they are the braces, they will get entered along with number in results bar,
then that number is mathed first then math the next numbers.

*/

//add inner html to div results
const updateResults = document.getElementById('results');
function innerResults(param){
    updateResults.innerHTML = param;
    updateResults.classList.add('resultsNum');
}
innerResults('0');

// take button click and input that div content into innerResults function
//add event listner, when button clicked, input that span into innerResults function
// const innerNumInSquares = document.getElementsByClassName('numInSquares');
// const newNums = '';

//target specific elements and add functionality
// C resets everything but wont show in results

let grabNum = '';
let storedNums = '';



function calculate() {
    try {
        // Replace 'x' with '*' for multiplication
        const expression = storedNums.replace(/x/g, '*');
       
        const result = eval(expression); // Using eval for simplicity, but be cautious
        innerResults(result); // Update the results display with the calculated result
    } catch (error) {
        innerResults('Error'); // Handle any potential errors during calculation
    }
    if(storedNums === ''){
        innerResults('');
    }
}


function insertFunction(event) {
    let clickedButton = event.target;
    let newText = clickedButton.textContent;
    
    if (newText === '=') {
        calculate(); // Calculate when "=" button is clicked
    } else if (newText === 'c') {
        // Handle the "c" button (clear operation)
        grabNum = ''; // Reset grabNum
        storedNums = ''; // Reset storedNums
        innerResults(grabNum);
    } else if (newText === 'x') {
        // Append 'x' for multiplication to storedNums
        storedNums += newText;
        
        innerResults(storedNums);
    } else if (newText === '<') {
        // Handle the backspace button
        storedNums = storedNums.slice(0, -1); // Remove the last character
        
        innerResults(storedNums);
    } else {
        if (newText.match(/[0-9.]/)) {
            // Append numbers and decimal point to storedNums
            storedNums += newText;
        } else if (newText.match(/[+\-*/()]/)) {
            // Append operators to storedNums
            storedNums += newText;
        }
        
        innerResults(storedNums);
    }
    
    
}



// / stands for divide, wont show in results
// x stand for multiply, wont show in results
// < stands for backspace, wont show in results
// - stands for substract, wont show in results
// + stands for addition, wonts show in results
// brackets () encapsule the text so it is prioritized first
// = stands for equals and wont show in results

