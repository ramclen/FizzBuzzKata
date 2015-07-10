define(['src/FizzBuzz'], function () { return FizzBuzzTest() });

function FizzBuzzTest() {
    describe("Should return Fizz when:", function () {
        it("is the number three", function () {
            expect("Fizz").toEqual(FizzBuzz().transform(3));
        });

        it("is a three multiple", function () {
            expect("Fizz").toEqual(FizzBuzz().transform(6));
        })
    });

    describe("Should return Buzz when:", function () {
        it("is the number five", function () {
            expect("Buzz").toEqual(FizzBuzz().transform(5));
        });

        it("is a five multiple", function () {
            expect("Buzz").toEqual(FizzBuzz().transform(10));
        })
    });

    describe("Should return the number when:", function () {
        it("is not a multiple of five or three", function () {
            expect("2").toEqual(FizzBuzz().transform(2));
        });
    });

    describe("Should return FizzBuzz when:", function () {
        it("is a multiple of five or three", function () {
            expect("FizzBuzz").toEqual(FizzBuzz().transform(15));
        });
    });
}
