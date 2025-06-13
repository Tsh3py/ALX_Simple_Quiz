function add(number1, number2) {
    return number1 + number2;
}


function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Cannot divide by zero!'; 
    }
    return number1 / number2;
}


document.addEventListener('DOMContentLoaded', function() {
    
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const calculationResultSpan = document.getElementById('calculation-result');

    function performCalculation(operationFunction) {
        
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = operationFunction(number1, number2);

        
        calculationResultSpan.textContent = result;
    }


    document.getElementById('add').addEventListener('click', function() {
        performCalculation(add); 
    });

    
    document.getElementById('subtract').addEventListener('click', function() {
        performCalculation(subtract); 
    });

    
    document.getElementById('multiply').addEventListener('click', function() {
        performCalculation(multiply); 
    });

    
    document.getElementById('divide').addEventListener('click', function() {
        performCalculation(divide); 
    });
});
