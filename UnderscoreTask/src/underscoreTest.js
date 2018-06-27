document.addEventListener("DOMContentLoaded", function () {
    function Person(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    var personList = [];

    personList.push(new Person("Andrey", "Alaev", 31));
    personList.push(new Person("Ivan", "Ivanov", 32));
    personList.push(new Person("Petr", "Petrov", 29));
    personList.push(new Person("Sergey", "Sidorov", 30));
    personList.push(new Person("Artem", "Borovov", 33));
    personList.push(new Person("Pavel", "Bekker", 26));
    personList.push(new Person("Konstantin", "Rogov", 25));

    // Посчитать средний возраст всех людей
    var count = 0;
    var sum = 0;
    _.each(personList, function (element, index) {
        sum += element.age;
        count++;
    });

    var averageAge = sum / count;
    console.log("Средний возраст");
    console.log(averageAge);

    //То же самое, но через reduce и list.length
    var average = _.reduce(personList, function (memo, element) {
        return memo + element.age;
    }, 0) / personList.length;

    console.log("Средний возраст");
    console.log(average);

    // Получить список людей с возрастом от 20 до 30 включительно,
    // отсортировать их по возрастанию возраста

    var filteredPersonList = _.chain(personList)
        .filter(function (element) {
            return element.age >= 20 && element.age <= 30;
        })
        .sortBy("age").value();
    console.log("Список людей с возрастом от 20 до 30 включительно, отсортированный по возрастанию возраста");
    console.log(filteredPersonList);

    //Добавить всем людям поле fullName, которое состоит из фамилии и имени через пробел

    var newPersonList = _.chain(personList)
        .map(function (el) { // Эта функция вызовется для каждого элемента и рез-ом общим будет её применение к каждому элементу
            el.fullName = el.name + " " + el.lastName; // Добавление полей налету
            return el;
        })
        .value();
    console.log("Всем добавил поле FullName");
    console.log(newPersonList);
// ТО же самое, но через each
     _.each(personList, function (element) {
            element.fullName = element.name + " " + element.lastName // Добавление полей налету
        });
    console.log(personList);

});