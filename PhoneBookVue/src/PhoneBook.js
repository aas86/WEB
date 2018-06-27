var vm = new Vue({
    el: "#phone-book", //К чему подкдючить vue
    data: { //Какой-то объект, в котором хранятся все данные из формы
        name: "", //Нужно привязать эти поля к input'ам, сделав атрибуты (v-model="name"
                  // v-model="lastname v-model="telnumber") у input'ов
        lastname: "",
        telnumber: "",
        persons: []
    },
    methods : {
        addItem : function () {
            if (this.name === "" || this.lastname === "" || this.telnumber === ""){
                return;
            }
            this.persons.push({
                name: this.name,
                lastname : this.lastname,
                telnumber : this.telnumber
            });
            this.name = "";
            this.lastname = "";
            this.telnumber = "";
        },
        deleteItem : function (item) {
            this.persons = this.persons.filter(function (element) {
                return element !== item;
            });
        }
    }
});