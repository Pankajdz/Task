import { add } from './StringCalculator';  // Adjust path if necessary

describe('String Calculator', () => {
    
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add('1')).toBe(1);
    });

    test('should return the sum of two numbers', () => {
        expect(add('1,5')).toBe(6);
    });

    test('should return the sum of multiple numbers', () => {
        expect(add('1,2,3')).toBe(6);
    });

    test('should handle new lines between numbers', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    test('should support custom delimiters', () => {
        expect(add('//;\n1;2')).toBe(3);
        expect(add('//|\n1|2|3')).toBe(6);
    });

    test('should throw an exception for negative numbers', () => {
        expect(() => add('1,-2')).toThrowError('negative numbers not allowed: -2');
        expect(() => add('1,-2,-3')).toThrowError('negative numbers not allowed: -2, -3');
    });

    test('should ignore numbers greater than 1000', () => {
        expect(add('1001,2')).toBe(2);
        expect(add('1000,2')).toBe(1002);
    });

    test('should handle custom delimiters with multiple characters', () => {
        expect(add('//[***]\n1***2***3')).toBe(6);
    });
});
