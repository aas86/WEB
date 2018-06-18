var list = [5, 6, 1, 3, 2, 4, 10, 15, 100];
console.log(list);
list.sort(function (e1, e2) {
    return e2 - e1;
});
console.log("Список, отсортированный по убыванию");
console.log(list);
console.log("Подсписок из первых 5 элементов");
console.log(list.slice(0, 5));
console.log("Подсписок из последних 5 элементов");
console.log(list.slice(list.length - 5));
var sum = 0;
for (var i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
        sum += list[i];
    }
}
console.log("Сумма чётных элементов списка");
console.log(sum);

// Сумма чётных элементов через reduce
var sumReduce = list.reduce(function (sum, current) {
    if (current % 2 === 0) {
        return sum + current;
    } else{
        return sum;
    }
}, 0);
console.log("Сумма чётных через reduce");
console.log(sumReduce);

var list2 = [];
for (i = 1; i <= 100; i++) {
    list2.push(i);
}
console.log("Массив чисел от 1 до 100 list2:");
console.log(list2);

var evenElements = function (value) {
    return value % 2 === 0;
};
var evenElementsList = list2.filter(evenElements);
console.log("Только чётные элементы списка");
console.log(evenElementsList);


var resultList = evenElementsList.map(function (element) {
    return Math.pow(element, 2);
});

console.log("Список квадратов четных чисел массива list2");
console.log(resultList);
// То же самое, но без filter и map
/*for (var j = 0; j < list2.length; j++) {
    if (list2[j] % 2 === 0) {
        list2[j] = Math.pow(list2[j], 2);
    } else {
        list2.splice(j, 1);
        j--;
    }
}*/
