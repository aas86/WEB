var vm = new Vue({
    el: "#phone-book", //К чему подкдючить vue
    data: { //Какой-то объект, в котором хранятся все данные из формы
        name: "", //Нужно привязать эти поля к input'ам, сделав атрибуты (v-model="name"
                  // v-model="lastName v-model="telNumber") у input'ов
        lastName: "",
        telNumber: "",
        persons: [],
        activeColor : ''
    },
    methods: {
        addItem: function () {
            if (this.name === "" || this.lastName === "" || this.telNumber === "") {
                
                this.activeColor = "#FFDAD1";
                return;
            } else{
                this.activeColor = "white";
            }
            this.persons.push({
                name: this.name,
                lastName: this.lastName,
                telNumber: this.telNumber
            });
            this.name = "";
            this.lastName = "";
            this.telNumber = "";
        },
        deleteItem: function (item) {
            this.persons = this.persons.filter(function (element) {
                return element !== item;
            });
        }
    }
});

