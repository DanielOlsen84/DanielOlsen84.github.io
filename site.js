var out = document.getElementById("answer");
var btn1 = document.getElementById("btn1");
var input = document.getElementById("input");

btn1.addEventListener("click", function (e) {
    out.innerHTML = "Tjena " + input.value + "!";

});