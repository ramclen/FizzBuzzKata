function MultipleCalculator(multiples) {

    function calculate(number) {
        return getMultiples(number, []);
    }

    function getMultiples(number, calculateMultiples) {
        multiples.forEach(function (multiple) {
            if (isMultiple(multiple, number))
                calculateMultiples.push(multiple);
        });
        return calculateMultiples.sort();
    }

    function isMultiple(multiple, number) {
        return number % multiple == 0;
    }

    return {
        calculate: calculate
    };
}
