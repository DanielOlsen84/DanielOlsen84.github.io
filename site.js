var out = document.getElementById("answer");
var btn1 = document.getElementById("btn1");
var input = document.getElementById("input");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

btn1.addEventListener("click", function (e) {
    out.innerHTML = "Tjena " + input.value + "!";

    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
    ctx.moveTo(100, 0);
    ctx.lineTo(0, 200);
    ctx.stroke();
});