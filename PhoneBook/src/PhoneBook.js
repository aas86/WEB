$(document).ready(function () {
    var addButton = $("#add-button"); // Получили кнопку
    var id = 1;
    $(addButton).on('click', function (e) {

        var name = $("#name").val();
        var surname = $("#surname").val();
        var phone = $("#tel-number").val();

        $("<tr><th class='id'></th><th class='surname'></th><th class='name'></th>" +
            "<th class='tel-number'></th><th></th></tr>")
            .appendTo(".table-body");

        var recordNumber =  $("tr:last > th.id");
        recordNumber.text(id);

        var currentName = $("tr:last th.name");
        currentName.text(name);

        var currentSurname = $("tr:last th.surname");
        currentSurname.text(surname);

        var currentTel = $("tr:last th.tel-number");
        currentTel.text(phone);
        id++;

        $("#name").val("");
        $("#surname").val("");
        $("#tel-number").val("");
    });
});