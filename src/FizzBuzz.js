function FizzBuzz() {
    function transform(number) {
        if (number == 5)
            return "Buzz";
        return "Fizz";
    }

    return {
        transform : transform
    }
}
