function isBalanced(expression) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const openingBracket = openingBrackets[closingBrackets.indexOf(char)];
            if (stack.length === 0 || stack.pop() !== openingBracket) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isBalanced('((2+3)*5)'))
console.log(isBalanced('({[})'));