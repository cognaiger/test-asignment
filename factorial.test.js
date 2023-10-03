const chai = require("chai");
const expect = chai.expect;
const factorial = require("./factorial");

describe("Factorial Function", () => {
    it("should throw an error for negative input", () => {
        expect(() => factorial(-5)).to.throw("Factorial is not defined for negative numbers");
    });

    it("should return 1 for input 0", () => {
        expect(factorial(0)).to.equal(1);
    });

    it("should return 1 for input 1", () => {
        expect(factorial(1)).to.equal(1);
    });
});