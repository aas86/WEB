document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("input");
    var button = document.getElementById("add-button");
    var list = document.getElementById("list");

    button.addEventListener("click", function () {
        var text = input.value;
        var li = document.createElement("li");
        li.innerHTML = text;
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "delete";
        deleteButton.setAttribute("style", "background-color : green");
        list.appendChild(li);
        li.appendChild(deleteButton);
        input.value = "";
        deleteButton.addEventListener('click', function () {
            var listItem = document.getElementsByTagName("li");
            li.remove();
            deleteButton.remove();
        })
    });

});