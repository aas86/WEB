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
console.log(list.slice(list.length - 5, list.length));
var sum = 0;
for (var i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
        sum += list[i];
    }
}
console.log("Сумма чётных элементов списка");
console.log(sum);

var list2 = [];
for (i = 1; i <= 100; i++) {
    list2.push(i);
}

console.log("Массив чисел от 1 до 100 list2:");
console.log(list2);

for (var j = 0; j < list2.length; j++) {
    if (list2[j] % 2 === 0) {
        list2[j] = Math.pow(list2[j], 2);
    } else {
        list2.splice(j, 1);
        j--;
    }
}
console.log("Список квадратов четных чисел массива list2");
console.log(list2);