define(['src/FizzBuzz'], function () { return FizzBuzzTest() });

function FizzBuzzTest() {
    describe("Should return Fizz when:", function () {
        it("is the number three", function () {
            expect("Fizz").toEqual(FizzBuzz().transform(3));
        })
    })
}
