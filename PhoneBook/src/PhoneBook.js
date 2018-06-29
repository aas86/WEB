$(document).ready(function () {
    var addButton = $("#add-button"); // Получили кнопку
    // var id = 1;
    $(addButton).on('click', function (e) {
        var name = $("#name").val();           // Получил значение поля ИМЯ
        var surname = $("#surname").val();     // Получил значение поля ФАМИЛИЯ
        var phone = $("#tel-number").val();    // Получил значение поля №телефона

        if(name !== "" && surname !== "" && phone !== ""){
            var tr = $("<tr><th></th><th></th><th></th><th></th>" +
                    "<th><button id='delete-button' type='button'> Удалить</button></th></tr>"); // Создаём строку
            // создали jquery объект (строка таблицы)
                setInput();
                // функция find ищет всех детей th у строки tr
                tr.find("th:eq(1)").text(name);
                tr.find("th:eq(2)").text(surname);
                tr.find("th:eq(3)").text(phone);
                /*tr.find("th:eq(0)").text(id);
                id++;*/

                // Создаётся объект jquery из тега с классом .table, ищется его ребёнок с тегом tbody,
                // в его конец вставляется созданная выше tr
                $(".table").find("tbody").append(tr);
                setRowsNumber();
        } else{
                var form = $(".contact-form input"); // Получаю набор объектов jquery всех input'ов в .contact-form
                form.each(function(){
                    var temp = $(this).val();
                    if(temp === ""){
                    $(this).css({"background-color": "#FFDAB9"});
                    }
                });
        }

        tr.find("#delete-button").on("click", function () {
            $(this).closest("tr").remove();
            setRowsNumber();
            setInput();
        });
    });

    function setRowsNumber() {
        $(".table").find("tbody").find("tr").each(function (i, tr) {
            $(tr).find("th:eq(0)").text(i + 1);
        });
    }

    function setInput(){
            $(".contact-form").find("input").val(""); // сброс полей ввода
            $(".contact-form input").each(function(){
                $(this).css({"background-color" : "#FFFfFf"});
            });
    }

});