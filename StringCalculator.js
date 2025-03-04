// StringCalculator.js

export function add(numbers) {
    if (numbers === '') {
        return 0;
    }

    const delimiterPattern = /^\/\/(.*)\n/;
    let delimiter = ',';
    let numbersToSum = numbers;

    // Handle custom delimiters
    const match = numbers.match(delimiterPattern);
    if (match) {
        delimiter = match[1];
        numbersToSum = numbers.replace(delimiterPattern, '').replace(new RegExp(delimiter, 'g'), ',');
    }

    // Split by comma or newline
    const numArray = numbersToSum.split(/[\n,]/).map(num => parseInt(num, 10));

    // Check for negative numbers
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error('negative numbers not allowed: ' + negativeNumbers.join(', '));
    }

    // Filter numbers greater than 1000
    const validNumbers = numArray.filter(num => num <= 1000);

    return validNumbers.reduce((sum, num) => sum + num, 0);
}
