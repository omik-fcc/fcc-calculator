$("document").ready(function () {
    $(".calc-prop").on("click", numbers);
    $("#clear").on("click", resetCalc);
    $(".calc-op").on("click", operators);
    $(".calc-result").on("click", calcOps);
    $("#decimal").on("click", handleDecimals);
});

let result = "";
let newBlock = true;

function numbers(k) {
    var button = k.target.innerHTML; 
    if (button === "0" && result.startsWith("0")) {     
        /* PASS */
    } else {
        result += button;
        $("#display").text(result);
    }
}

function handleDecimals(k) {
    var button = k.target.innerHTML;
    if (newBlock) {
        if (result.endsWith(".")) {
            result = result.slice(0, -1) + button;
            $("#display").text(result);
        } else {
            result = result + button;
            $("#display").text(result);
        }
        newBlock = false;
    }        
}

function operators(k) {
    var button = k.target.innerHTML;
    newBlock = true;
    if (result.endsWith("+") || result.endsWith("-") || result.endsWith("*") || result.endsWith("/")) {
        result = result.slice(0, -1) + button;
    } else {
        result = result + button;
    }
    $("#display").text(result);
}

function calcOps() {
    console.log(eval(result));
    $("#display").text(eval(result));
    result = (eval(result)).toString();
}

function resetCalc() {
    result = "";
    operator = "";
    newBlock = true;
    $("#display").text("0")
}