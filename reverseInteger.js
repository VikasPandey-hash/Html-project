function reverseInteger(num)  
{
    const reversedStr = num.toString().split('').reverse().join('');
    return parseInt(reversedStr) * Math.sign(num) ;
}

console.log(reverseInteger(12345))
console.log(reverseInteger(-123654))