// console.log("hi");

// var arr = [1, 2, "qwerty", null, {data: "data"}];

// console.log(arr);

// var lastElement = arr[arr.length - 1];

// console.log(lastElement.data);

// var obj = {
//     name: "Joe",
//     count: 100,
//     data: {
//         name: "John",
//         title: "John Smith",
//     },
    // results: [1, 2, 3, 4, 5, {name: "Name"}],
// };

// var lastElement = obj.results.length - 1;

// console.log(obj.results[obj.results.length - 1].name);

// console.log(obj['count']);
// console.log(obj['results']);


// var name = "Name " + obj.name;
// var name = `Name ${obj.name}`;

// console.log(name);

// var num = 10;

// console.log(num)

// num = 15;

// console.log(num)


///Циклы

//While

// var count = 0;

// while (count < 10) {
    // count = count + 1;
    // console.log(count);
// }


//for

// for (var i = 0; i <= 10; i++) {
//     console.log(i)
// }

// for (var i = 10; i <= 0; i--) {
//     console.log(i)
// }


// var arr = [234, "55", null, true];

// for (var i = 0; i < arr.length -1; i++) {
    // console.log(arr[i]);
// }

//for of

// var arr = [234, "55", null, true];

// for (var el of arr) {
    // console.log(el);
// }

// var title = "Title";

// for (var i of "qwerty") {
//     console.log(i);
// }

// console.log(title.length);


///for in

// var obj = {
//     name: 'Aliya',
//     age: 25,
//     data: {
//         name: "qwerty",
//         title: 1000,
//     },
// };

// for (var key in obj) {
//     console.log(`Ключ объекта: ${key}, Значение: ${obj[key].name || obj[key]}`);
// }



// var str = "Geeks";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// console.log(str.split("").reverse().join(""));


// var arr = ["a", "b", "c", "d"];

// arr.push("e", 12, null);
// arr.pop();
// arr.unshift({data: null}, 12);
// arr.shift();

// var reversed = arr.reverse();

// console.log(reversed.join(""));
// console.log(arr.includes("N"));

var arr = [10, 20, 30, 50, 235, 3000];

var newArr =[];

for (var num of arr) {
    var str = String(num)[0];
    if (str === "1" || str === "2" || str === "5") {
        newArr.push(num);
    }
}
console.log(newArr);


for (var i = 20; i >= 0; i--) {
    console.log(i);
}


var colors = prompt("Введите цвет светофора").toLowerCase().trim();
console.log(colors);

switch (colors) {
    case "красный":
        alert("Стоп");
        break;
    case "желтый":
        alert("Приготовьтесь");
        break;
    case "зеленый":
        alert("Идите");
        break;
    default:
        alert("Error");
}
