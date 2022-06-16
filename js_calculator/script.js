//Calculator - descrizione

// 1- Chiede due numeri in imput;
//  1.1- Se non vengono inseriti entrambi i numeri, mostra alert e reeturn 0.

// 2- Chiede l'operazione da eseguire;
//  2.1- Se non viene specificata un'operazione, mostra alert e return 0.

// 3- Mostra il risultato dell'operazione

//Calcolatrice - codice
const firstNum = prompt("Inserisci il primo numero");
const secondNum = prompt("Inserisci il secondo numero");
const operationChoice = prompt("Inserisci l'operazione desiderata");

const parseFirstNum = parseInt(firstNum);
const parseSecondNum = parseInt(secondNum);

if (firstNum.length === 0 || secondNum.length === 0) {
    alert("Non hai inserito nulla")
}

// if"Ad") {
//     alert("Risultato: ", parseFirstNum+parseSecondNum)
// }

switch(operationChoice) {
    case "+":
        console.log("Risultato: ", parseFirstNum + parseSecondNum)
        break;
    
    case "-":
        console.log("Risultato: ", parseFirstNum - parseSecondNum)
        break;

    case "*":
        console.log("Risultato: ", parseFirstNum * parseSecondNum)
        break;
    
    case "/":
        console.log("Risultato: ", parseFirstNum / parseSecondNum)
        break;

    default:
        alert("Non hai specificato l'operazione")
}