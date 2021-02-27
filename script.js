

//--------------------TASK-1---------------------

// let firstNum = parseInt(prompt("Enter start of diapason",""));
// let secondNum = parseInt(prompt("Enter end of diapason",""));
// let sum = 0;
 
// while(firstNum <= secondNum){       
//        sum += firstNum;  
//        firstNum++;
//     }

// console.log(sum)

//--------------------TASK-2---------------------
let firstNum = parseInt(prompt("Enter a first number"));
let secondNum = parseInt(prompt("Enter a second number"));



//--------------------TASK-3---------------------
//--------------------TASK-4---------------------
//--------------------TASK-5---------------------
//--------------------TASK-6---------------------

//--------------------TASK-7---------------------



//--------------------TASK-10---------------------
let minBorder = 0;  
let maxBorder = 100;


function checkChoise() {

    let middleValue = Math.round((maxBorder + minBorder) / 2); 
    let usenChoise = prompt("Ваше число > " + middleValue + " < " + middleValue + " или ==" + middleValue + "?");

    switch (usenChoise) {

        case ">":
            minBorder = middleValue;
            checkChoise()
        break
        
        case "<":
            maxBorder = middleValue;
            checkChoise()
        break
        
        case "==":
            alert("мы угадали, съебался");
        break
            
    }
    
}
checkChoise()

