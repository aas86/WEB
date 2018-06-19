document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("input");
    var button = document.getElementById("add-button");
    var list = document.getElementById("list");

    button.addEventListener("click", function () {
        var text = input.value;

        if (text === ""){
            return;
        }
            var li = document.createElement("li");
            li.innerHTML = text;

            var deleteButton = document.createElement("button");
            deleteButton.innerHTML = "delete";
            deleteButton.style.color = "red";
            deleteButton.style.backgroundColor = "black";


            list.appendChild(li);
            li.appendChild(deleteButton);


        deleteButton.addEventListener('click', function () {
            li.remove();
        });
        input.value = "";
    });

});