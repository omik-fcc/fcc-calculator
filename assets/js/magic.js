$("document").ready(function () {

    $(".calc-prop").on("click", inputCalc);
    $("#clear").on("click", resetCalc);
    
});

/* Variable Init */
let result = "";
let input = "";

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