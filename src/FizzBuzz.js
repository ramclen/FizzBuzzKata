define(['src/MultipleCalculator'], function () { return FizzBuzz; })

function FizzBuzz() {

    var multipleDictionary = {
        '3': "Fizz",
        '5': "Buzz",
        '3,5': "FizzBuzz"
    };

    function transform(number) {
        var multiples = MultipleCalculator([3, 5]).calculate(number);
        if(noMultiples(multiples))
            return number.toString();
        return multipleDictionary[multiples.toString()];
    }

    function noMultiples(multiples) {
        return multiples.length == 0;
    }

    return {
        transform : transform
    }
}
