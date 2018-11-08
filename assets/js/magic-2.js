$("document").ready(function () {

    $(".calc-prop").on("click", inputCalc);
    $("#clear").on("click", resetCalc);
    
});

/* Variable Init */
let result = "";
let input = "";


function isNumber(k) {
    var button = k.target.innerHTML;

    input =+ button;
}

function isOperator(k) {
    

    if (input.endsWith("+") || input.endsWith("-") || input.endsWith("*") || input.endsWith("/")) {

    } else {
        var operator = k.target.innerHTML;
        input =+ operator;
    }
}

function inputCalc(k) {

    var button = k.target.innerHTML;

    if (button != "=") {
        if (button === "." && input.endsWith(".")) {
            /* PASS */
        } else if (button === "0" && input.startsWith("0")) {
            /* PASS */
        } else {
            input += button;
            if (input.startsWith("00")) input = "0";
            console.log(input)
            $("#display").text(input)
        }
    } else {
        calcOps();
    }
}

function resetCalc() {
    result = "";
    input = "";
    $("#display").text("0")
}

function calcOps() {
    result = eval(input);
    input = result;
    console.log(result);
    $("#display").text(result);
}