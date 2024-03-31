const lab7 = require('./lab7');

describe("Lab 7", () => {
    const inputFile = `calculations.json`
    test('check for file name, and make sure data is actually takeed from a file', () => {
        expect(getFile()).toBe(`calculations.json`)
        expect(readAFile(`calculations.json`)).toBeDefined();
        expect(readAFile(`Doesn'tExist.json`)).not.toBeDefined();
    });
    test('check for required json variables', () => {
        expect(readAFile(inputFile)).toContain('"data":');
        expect(readAFile(inputFile)).toContain('"numbers":');
        expect(readAFile(inputFile)).toContain('"a":');
        expect(readAFile(inputFile)).toContain('"b":');
    });
    test('check for functionality', () => {
        expect(beginning()).toBeDefined();
        expect(beginning()).toBe(10);
    });
    test('check for functionality', () => {
        expect(beginning()).toBe(10);
    });
});
