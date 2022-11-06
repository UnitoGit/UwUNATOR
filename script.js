var UwUInput = document.getElementById("input-id");
var Button = document.getElementById("buttonSumbit");

function UwUGenerator(stringForUwU) {
    var Words = stringForUwU.toString().split(" ");
    var OwOs = ["UwU", "OwO", "QwQ", "oWo", "OvO", ">W<", "^w^"]
    var RandomWordPosition = Math.floor(Math.random() * Words.length)
    var RandomOwos = Math.floor(Math.random() * OwOs.length)
    Words.splice(RandomWordPosition, 0, OwOs[RandomOwos])
    var Result = Words.join(' ')
    return Result;
}

Button.onclick = function() {
    UwUInput = document.getElementById("input-id");
    UwUInput.value = UwUGenerator(UwUInput.value);
};