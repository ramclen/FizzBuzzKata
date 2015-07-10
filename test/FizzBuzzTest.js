define(['src/FizzBuzz'], function () { return FizzBuzzTest() });

function FizzBuzzTest() {
    describe("Should return Fizz when:", function () {
        it("is the number three", function () {
            expect("Fizz").toEqual(FizzBuzz().transform(3));
        })
    });
    describe("Should return Buzz when:", function () {
        it("is the number five", function () {
            expect("Buzz").toEqual(FizzBuzz().transform(5));
        })
    })
}
