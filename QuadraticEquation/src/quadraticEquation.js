document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("button");
    button.addEventListener("click", getData);

    function getData() {
        var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var c = document.getElementById("c").value;
        a = parseInt(a, 10);
        if (isNaN(a)) {
            a = 0;
        }
        b = parseInt(b, 10);
        if (isNaN(b)) {
            b = 0;
        }
        c = parseInt(c, 10);
        if (isNaN(c)) {
            c = 0;
        }
        var d = b * b - 4 * a * c;
        var x1;
        var x2;
        var result1;
        var result2;
        if (d < 0) {
            x1 = document.createElement("p");
            x1.innerHTML = "Корней нет т.к. D = " + d;
            document.body.appendChild(x1);
        } else if (d === 0) {
            x1 = -b / (2 * a);
            result1 = document.createElement("p");
            result1.innerHTML = "D =" + d + "  " + "x1 = " + x1;
        } else {
            x1 = (-b + Math.sqrt(d)) / (2 * a);
            x2 = (-b - Math.sqrt(d)) / (2 * a);
            result1 = document.createElement("p");
            result1.innerHTML = "x1 = " + x1;
            result2 = document.createElement("p");
            result2.innerHTML = "x2 = " + x2;
        }
        document.body.appendChild(result1);
        document.body.appendChild(result2);
    }
});
