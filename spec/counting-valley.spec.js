
describe("Counting valley test suite", function () {
    const countingValley = require("../counting-valley.js");
    it("Should be 1", function () {
        let s = "UDDDUDUU";
        expect(countingValley.countValleys(s.length, s)).toBe(1);
    })
})
