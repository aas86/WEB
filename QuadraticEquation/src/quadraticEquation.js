document.addEventListener("DOMContentLoaded", function () {
        var button = document.getElementById("button");
        button.addEventListener("click", calculate);

        function calculate() {
            var a = document.getElementById("a").value;
            var b = document.getElementById("b").value;
            var c = document.getElementById("c").value;
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);
            if (isNaN(a) || isNaN(b) || isNaN(c)) {
                alert("Ввели фигню");
            } else {
                var x1;
                var x2;
                var result1 = document.getElementById("result1");
                var result2 = document.getElementById("result2");
                var D = document.getElementById("d");
                if (a === 0) {
                    x1 = -c / b;
                    result1.innerHTML = x1;
                    result2.innerHTML = "";
                } else {
                    var d = b * b - 4 * a * c;
                    if (d < 0) {
                        D.innerHTML = "D = " + d;
                        result1.innerHTML = "Нет корней";
                        result2.innerHTML = "";
                    } else if (d === 0) {
                        x1 = -b / (2 * a);
                        D.innerHTML = "D = " + d;
                        result1.innerHTML = "x1 = " + x1;
                        result2.innerHTML = "";
                    } else {
                        x1 = (-b + Math.sqrt(d)) / (2 * a);
                        x2 = (-b - Math.sqrt(d)) / (2 * a);
                        D.innerHTML = "D = " + d;
                        result1.innerHTML = "x1 = " + x1;
                        result2.innerHTML = "x2 = " + x2;
                    }
                }
            }
        }
    }
);
