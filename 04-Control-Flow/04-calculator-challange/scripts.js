function calculator(num1, num2, operator) {

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return alert('Dude you messed up');

    }

}

console.log(calculator(5, 2, '/'));