var vm = new Vue({
    el: "#phone-book", //К чему подкдючить vue
    data: { //Какой-то объект, в котором хранятся все данные из формы
        name: "", //Нужно привязать эти поля к input'ам, сделав атрибуты (v-model="name"
                  // v-model="lastName v-model="telNumber") у input'ов
        lastName: "",
        telNumber: "",
        persons: [],
        colorName : '',
        colorLastName : '',
        colorTelNumber : '',
        inputs : []
    },
    methods: {
        addItem: function () {
            if (!this.formValidation()){
                return;
            }
            if(!this.telNumberValidation()){
                this.persons.push({
                name: this.name,
                lastName: this.lastName,
                telNumber: this.telNumber
            });
            this.name = "";
            this.lastName = "";
            this.telNumber = "";
            this.colorWhite();
            } else {
                alert("Контакт с таким номером уже существует!");
            }
        },

        telNumberValidation : function(){
            var currentTelNumber = this.telNumber;
            return this.persons.some(function(e){
                console.log(e.telNumber);
                console.log(currentTelNumber);
                return e.telNumber === currentTelNumber;
            });
        },

        formValidation : function(){
            var temp = [];
                if (this.name === ""){
                    this.colorName = "#FFDAD1";
                    temp.push(1);
                } else {
                    this.colorName = "#FFFFFF";
                }
                if (this.lastName === ""){
                    this.colorLastName = "#FFDAD1";
                    temp.push(1);
                } else {
                    this.colorLastName = "#FFFFFF";
                }
                if (this.telNumber === ""){
                    this.colorTelNumber = "#FFDAD1";
                    temp.push(1);
                } else if(isNaN(Number(this.telNumber))){
                    alert("Номер телефона не может состоять из букв!");
                    temp.push(1);
                } else {
                    this.colorTelNumber = "#FFFFFF";
                }
                return temp.length === 0;
        },
        
        deleteItem: function (item) {
            if(confirm("Действительно удалить?")){
                this.persons = this.persons.filter(function (element) {
                    return element !== item;
                });
            this.colorWhite();
            }
            this.colorWhite();

        },
        colorWhite : function(){
            this.colorName = "#FFFFFF";
            this.colorLastName = "#FFFFFF";
            this.colorTelNumber = "#FFFFFF";
        }
    }
});

