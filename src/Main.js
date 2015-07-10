define(["src/FizzBuzz"], function () { return Main().main();});
function Main(){

    function main() {
        $("#toTransform").on("keyup", function () {
            outputValue(FizzBuzz().transform(inputValue()).toString());
        })
    }

    function inputValue() {
        return eval($("#toTransform").val());
    }

    function outputValue(value) {
        return $("#transformed").val(value);
    }

    return {
        main : main
    }
}
