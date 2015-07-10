function MultipleCalculator(multiples) {

    function calculate(number) {
        return getMultiples(number, []);
    }

    function getMultiples(number, calculatedMultiples) {
        multiples.forEach(function (multiple) {
            if (isMultiple(multiple, number))
                calculatedMultiples.push(multiple);
        });
        return calculatedMultiples.sort();
    }

    function isMultiple(multiple, number) {
        return number % multiple == 0;
    }

    return {
        calculate: calculate
    };
}
