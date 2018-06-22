$(document).ready(function () {
    var addButton = $("#add-button"); // Получили кнопку
    // var id = 1;
    $(addButton).on('click', function (e) {
        var name = $("#name").val();           // Получил значение поля ИМЯ
        var surname = $("#surname").val();     // Получил значение поля ФАМИЛИЯ
        var phone = $("#tel-number").val();    // Получил значение поля №телефона

        var form = $(".contact-form");
        if (name === "") {
            form.find("#name").style();
            return;
        } else if (surname === "") {
            form.find("#surname").style.borderColor = "red";
            return;
        } else if (phone === "") {
            form.find("#phone").style.borderColor = "red";
            return;
        }


        var tr = $("<tr><th></th><th></th><th></th><th></th>" +
            "<th><button id='delete-button' type='button'> Удалить</button></th></tr>");
        tr.find("th:eq(1)").text(name);
        tr.find("th:eq(2)").text(surname);
        tr.find("th:eq(3)").text(phone);
        /*tr.find("th:eq(0)").text(id);
        id++;*/

        $(".table").find("tbody").append(tr);
        setRowsNumber();

        $(".contact-form").find("input").val("");

        tr.find("#delete-button").on("click", function () {
            $(this).closest("tr").remove();
            setRowsNumber();
        });
    });

    function setRowsNumber() {
        $(".table").find("tbody").find("tr").each(function (i, tr) {
            $(tr).find("th:eq(0)").text(i + 1);
        });

    }

});