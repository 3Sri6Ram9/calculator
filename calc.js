function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function deleteLastValue() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let displayValue = document.getElementById("display").value;
    let result;
    try {
        result = eval(displayValue);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById("display").value = result;
}

