class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        return this.num1 + this.num2;
    }
    subtract() {
        return this.num1 - this.num2;
    }
    multiply() {
        return this.num1 * this.num2;
    }
    divide() {
        if (this.num2 == 0) {
            return "Division by zero not possible";
        }
        return this.num1 / this.num2;
    }
}

class DataAccess {
    static getOutput(operation) {
        const number1 = parseInt(document.getElementById("number1").value);
        const number2 = parseInt(document.getElementById("number2").value);
        let calculate = new Calculator(number1, number2);
        function getOutputString(output) {
            return "The result of chosen operation is " + output;
        }
        switch (operation) {
            case "add":
                result.innerHTML = getOutputString(calculate.add());
                break;
            case "subtract":
                result.innerHTML = getOutputString(calculate.subtract());
                break;
            case "multiply":
                result.innerHTML = getOutputString(calculate.multiply());
                break;
            case "divide":
                result.innerHTML = getOutputString(calculate.divide());
                break;

        }

    }
}
const result = document.getElementById("result");