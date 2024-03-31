const isFactorial = require('./lab2');

describe("Lab 2", () => {
    test('check for negative number', () => {
    expect(isFactorial(-5)).toBeLessThan(0);
    });

    test('check for a factorial number', () => {
        expect(isFactorial(24)).toBe(4);
    });

    test('check for a non factorial number', () => {
        expect(isFactorial(8)).toBe(0);
    });
});
