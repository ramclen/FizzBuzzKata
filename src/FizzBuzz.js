function FizzBuzz() {

    function transform(number) {
        if(isFiveMultiple(number) && isThreeMultiple(number))
            return "FizzBuzz";
        if (isFiveMultiple(number))
            return "Buzz";
        if (isThreeMultiple(number))
            return "Fizz";
        return number.toString();
    }

    function isThreeMultiple(number) {
        return number % 3 == 0;
    }

    function isFiveMultiple(number) {
        return number % 5 == 0;
    }

    return {
        transform : transform
    }
}
