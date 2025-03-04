import { add } from './calculator.js';

test('empty string should return 0', () => {
    expect(add('')).toBe(0);
});

test('single number returns itself', () => {
    expect(add('1')).toBe(1);
    expect(add('5')).toBe(5);
});

test('two numbers separated by comma return sum', () => {
    expect(add('1,2')).toBe(3);
    expect(add('3,4')).toBe(7);
});
