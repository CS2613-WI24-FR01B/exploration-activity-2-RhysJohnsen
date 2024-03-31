const lab13 = require('./lab13');

describe("Lab 13", () => {
    test('check for capital letters', () => {
        expect(capitals("This Should Return True")).toBe(true);
        expect(capitals("This Should return False")).toBe(false);
    });
    test('check for two words', () => {
        expect(single("This has too many words")).toBe(false);
        expect(single("Just right")).toBe(true);
        expect(single("Fewest")).toBe(false);
    });
    test('check for end starts', () => {
        expect(endStart("False Test")).toBe(false);
        expect(endStart("Perfect test")).toBe(true);
    });
    test('check for functionality', () => {
        expect(begin()).toEqual(expect.arrayContaining(['Test Test', 'Catherine Elaine', 'Question Node.js']));
        expect(begin()).toEqual(['Test Test', 'Catherine Elaine', 'Question Node.js']);
        expect(begin()).toEqual(
            expect.not.arrayContaining(["This is a test"])
        );
    });
});
