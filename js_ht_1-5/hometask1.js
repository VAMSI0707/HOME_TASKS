/*
Transport on vacation
DESCRIPTION:
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/
function rentalCarCost(days) {
    let total = days * 40;
    if (days >= 7) {
        total -= 50;
    }
    else if (days >= 3) {
        total -= 20;
    }
    return total;
}

/*
Printing Array elements with Comma delimiters
DESCRIPTION:
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/
function printArray(array) {
    return array.join(',');
}

/*
Basic Mathematical Operations
DESCRIPTION:
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            if (value2==0) {
                return "Division by zero not possible";
            }
            return value1 / value2;

    }
}

/*
Opposite number
DESCRIPTION:
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34

*/
function opposite(number) {
    return -1 * number;
}


