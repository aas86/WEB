document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener('onclick', getData);

    function getData() {
        var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var c = document.getElementById("c").value;
        alert(a + b + c);
    }
});
