// функции массивов

// array.from(arrayLike, mapFn)
// разбивает массиво подобные аргументы на массив
console.log('1) ==== Array.from() ========');
console.log(Array.from('string')); // ["s","t","r","i","n","g"]
console.log(Array.from(142)); // []
console.log(Array.from([1, 2, 3, 4], a => a ** a)); // [1, 4, 27, 256]
function f(){
    return console.log(Array.from(arguments)); // [1, 3, 4]
}
f(1,3,4)
console.log(Array.from(String(BigInt(2 ** 80)))); //["1", "2", "0", "8", "9", "2", "5", "8", "1", "9", "6", "1", "4", "6", "2", "9", "1", "7", "4", "7", "0", "6", "1", "7", "6"]
console.log(Array.from({length : 5}, (item, index) => [item, index])); // [[undefined, 0], [undefined, 1], [undefined, 2], [undefined, 3], [undefined, 4]]
console.log(Array.from({length : 5}, (_, i) => i)); // [0, 1, 2, 3, 4]
console.log('\n');


// Array.isArray(obj)
// возвращает ture если обьект массив или false если обьект не массив
console.log('2) ==== Array.isArray(obj) ========');
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
console.log(Array.isArray(Array.prototype)); // true
console.log("\n");


// Array.of()
// создает новйый экземпляр массива Array из произвольного числа аргументов, вне зависимости от числа и типа аргумента
console.log('3) ==== Array.of() ========');
console.log(Array.of(7)); // [7]
console.log(Array(7)); // (7) [empty * 7]
console.log(Array.of(Boolean)); // [f]
console.log(Array.of(undefined)); // [undefined]
console.log("\n");


// Array.prototype.concat()
// обьеденяет массив с другим массивом либо с передаваемыми аргументами
console.log("==== 4) Array.prototype.concat() =======");
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];
let arrRes = [...arr1, ...arr2, ...arr3];
console.log(arr1.concat(arr2)); // [1,2,3,4,5,6]
console.log(arrRes); // [1,2,3,4,5,6]
console.log(Array([...arr1, ...arr2])); // [Array(6)]
console.log(Array.of([...arr1, ...arr2])); // [Array(6)]
console.log("\n");


// Array.prototype.copyWithin(target, start, end)
// коприрует эелементы массива внутри него, начинающихся по индексу target. Начало копии берется по аргументу start, конец копии по аргументу end. Аргумент end по умолчанию равен длинне массива end = this.length
console.log("==== 5) Array.prototype.copyWithin() =======")
console.log([1,2,3,4,5,6].copyWithin(0, 3)); // [4,5,6,4,5,6]
console.log([1,2,3,4,5,6].copyWithin(0, 3, 5)); // [4,5,3,4,5,6]
console.log([1,3,4,5,6,7].copyWithin(0, -2, -1)); // [6,3,4,5,6,7]
console.log([].copyWithin.call({length : 9, 6 : 10,}, 0, 6)); // пока не понятно как работает
console.log("\n");


// Array.prototype.entries()
// возвращает новый обьект итератора массива Array.Iterator содержащий пары ключ/значение для каждого индекса в массиве
console.log("==== 6) Array.prototype.entries() =======");
let arr = ['a', 'b', 'c'];
let eArr = arr.entries();
for (let i = 0; i < arr.length; i++){
    console.log(eArr.next().value);
}
// console.log(eArr.next().value)
// если вызвать next() > arr.length раз, то в дальнейшем вместо значений ключ/значение получим undefined
console.log("\n");


// Array.prototype.every(callback(item, index, array), thisArg)
// проверяет, удовлетворяют ли все эедементы массива условию, заданному в передаваемой функции
console.log("==== 7) Array.prototype.every() =======");
console.log([12, 3, 7, 10].every((item) => {item >= 10})); // false
console.log([100, 115, 145, 200].every(item => item >= 10)); // true
console.log([244, 'abc', 1, 'string'].every(item => typeof item === 'string')); // false
console.log([1, 2, 3, 4, 5].every(item => typeof item === 'number')); // true
console.log("\n");


// Array.prototype.fill(value, start, end)
// заполняет все элементы массива от начального (start) до конечного (end) индексов одним значением (value)
console.log("==== 8) Array.prototype.fill() =======");
console.log([1, 2, 3, 4, 5].fill(34, 1, 3)); // [1, 34, 34, 4, 5]
console.log([1, 2, 3, 4, 5].fill(21, 2)); // [1, 2, 21, 21, 21]
console.log([1, 2, 3, 4, 5].fill(9)); // [9, 9, 9, 9, 9]
console.log([1, 2, 3, 4, 5].fill(4, -3, -2)); // [1, 2, 4, 4, 5] 
console.log("\n");


// Array.prototype.filter(callback(item, index, arr))
// создает новый массив со всмеи элементами, прошедшими проверку функции
console.log('==== 9) Array.prototype.filter() ========');
console.log(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].filter(item => item.length > 6)); // ['exuberant', 'destruction', 'present']
let arrObjs = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];
console.log(arrObjs.filter(item => typeof item.id === 'number' && !isNaN(item.id) && item.id !== 0)); // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
console.log('\n');


// Array.prototype.find(callback(item, index, arr))
// возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback фукции. В противном слуучае вернет undefined
console.log('==== 10) Array.prototype.find() =========');
console.log([1, 2, 3, 4, 5, 6].find(item => item > 1)); // 2
console.log(['string', 'number', 'boolean', 'null', 'undefined', 'BigInt'].find(item => item.length > 5)); // string
console.log([1, 2, 3, 4, 5, 6].find(item => item > 10)); // undefined
console.log('\n');


// Array.prototype.findIndex(callback(item, index, arr))
// возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
console.log('==== 11) Array.prototype.findindex() =========');
console.log([1, 2, 3, 4, 5, 6].findIndex(item => item > 1)); // 1
console.log([1, 2, 3, 4, 5, 6].findIndex(item => item > 10)); // -1
console.log(['string', 'number', 'boolean', 'null', 'undefined', 'BigInt'].findIndex(item => item.length > 5)); // 0
console.log('\n');


// Array.prototype.flat(depth)
// возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
console.log('==== 12) Array.prototype.flat() ===========');
console.log([1, 2, [3, 4, [5, 6]]].flat()); // [1, 2, 3, 4, Array(2)]
console.log([1, 2, [3, 4, [5, 6]]].flat(2)); // [1, 2, 3, 4, 5 ,6]
console.log([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('\n');


// Array.prototype.flatMap(callback(item, index, arr))
// сначала применяет функцию к каждому элементу, а затем преобразует полученый результат в плоскую структуру и помещает в новый массив.
console.log('==== 13) Array.prototype.flatMap() ==========');
console.log([1, 2, 3, 4, 5].flatMap(item => item ** 2)); // [1, 4, 9, 16, 25]
console.log([1, 2, 3, 4, 5].flatMap(item => [item ** 2])); // [1, 4, 9, 16, 25]
console.log([1, 2, 3, 4, 5].flatMap(item => [[item ** 2]])); // [[1], [4], [9], [16], [25]]
console.log('\n');


// Array.prototype.forEach(callback(item, index, arr))
// выполняет указанную функцию один раз для каждого элемента в массиве.
console.log('==== 14) Array.protoype.forEach() =========');
let array = [1, 2, 3, 4, 5];
array.forEach(item => console.log(item));
// 1
// 2
// 3
// 4
// 5
array.forEach(element => {
    console.log(element ** 3);    
});
// 1
// 8
// 27
// 64
// 125
console.log('\n');


// Array.prototype.includes(item, index)
// определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
console.log('==== 15) Array.prototype.includes() =========');
console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, 3].includes(4)); // false
console.log([1, 2, 3].includes(3, 3)); // false
console.log([1, 2, 3].includes(3, -1)); // true
console.log('\n');


// Array.prptotype.indexOf(item, index)
// возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
console.log('==== 16) Array.prototype.indexOf() =========');
console.log([2, 5, 9].indexOf(2)); // 0
console.log([2, 5, 9].indexOf(7)); // -1
console.log([2, 5, 9].indexOf(9, 2)); // 2
console.log([2, 5, 9].indexOf(2, -3)); // 0
console.log('\n');


// Array.prptotype.join()
// объединяет все элементы массива (или массивоподобного объекта) в строку.
console.log('==== 17) Array.prototype.join() ===========');
let a = ['Wind', 'Water', 'Fire'];
console.log(a.join()); // Wind,Water,Fire
console.log(a.join(', ')); // Wind, Water, Fire
console.log(a.join(' + ')); // Wind + Water + Fire
console.log(a.join('')); // WindWaterFire
console.log('\n');


// Array.prptotype.keys()
// возвращает новый итератор массива Array Iterator, содержащий ключи каждого индекса в массиве.
console.log('==== 18) Array.prototype.keys() ===========');
let array1 = ['a', 'b', 'c'];
let arr1Iter = array1.keys();
console.log(arr1Iter); // Array Iterator {}
// for (let key of arr1Iter){
//     console.log(key); // выведет поочередности 0, 1, 2
// }
console.log(arr1Iter.next()); // {value : 0, done : false}
console.log(arr1Iter.next()); // {value : 1, done : false}
console.log(arr1Iter.next()); // {value : 2, done : false}
console.log(arr1Iter.next()); // {value : undefined, done : true}
console.log('\n');


// Array.prototype.lastIndexOf()
// возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
console.log('19) ==== Array.prototype.lastIndexOf() =========');
console.log([2, 5, 9, 2].lastIndexOf(2)); // 3
console.log([2, 5, 9, 2].lastIndexOf(7)); // -1
console.log([2, 5, 9, 2].lastIndexOf(2, 2)); // 0
console.log([2, 5, 9, 2].lastIndexOf(2, -3)); // 0
console.log('\n');

// Array.prototype.map(callback(item, index, array))
// создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
console.log('20) ===== Array.prototype.map() ============');
console.log([1, 2, 3, 4, 5].map(item => item ** 2)); // [1, 4, 9, 16, 25]
console.log([1, 2, 3, 4, 5].map(item => [item ** 2])); // [[1], [4], [9], [16], [25]]
console.log([1, 2, 3, 4, 5].map(item => [[item ** 2]])); // [[[1]], [[4]], [[9]], [[16]], [[25]]]
console.log('\n');


// Array.prototype.pop()
// удаляет последний элемент из массива и возвращает его значение.
console.log('21) ==== Arary.prototype.pop() ==============');
let b = [1, 2, 3, 4, 5];
console.log(b.pop()); // 5
console.log(b);
console.log('\n');


// Array.prototype.push()
// добавляет один или более элементов в конец массива и возвращает новую длину массива.
console.log('22) ==== Array.prototype.push() ===========');
let sports = ['футбол', 'бейсбол'];
let total = sports.push('американский футбол', 'плаванье');
console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плаванье']
console.log(total); // 4
console.log('\n');


// Array.prototype.reduce(callback(item, index, array), accumulator)
// выполняет функцию callback один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего вызова callback), значение текущего элемента, текущий индекс и массив, по которому происходит итерация.
console.log('23) Array.prototype.reduce() =======');
let c = [1, 2, 3, 4, 5];
let d = [1, 2, 32, 4, 5];
console.log(c.reduce((acum, item) => item + acum, 0)); // 15
console.log(c.reduce((acum, item) => item + acum)); // 15
// в данном примере 0 - это начальное значение параметра accumulator, если его не зададавать, то по умолчанию он будет рааным значению первого элемента в массиве (c[0])
console.log(d.reduce((acum, item) => item > acum ? item : acum, 0)); // 32 (самое большое число в массиве)
console.log(d.reduce(acum => acum)); // 1
console.log(d.reduce(acum => acum, 0)); // 0
console.log('\n');


// Array.prototype.reduceRight(callback(item, index, array), accumulator)
// применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению. Метод reduceRight() выполняет функцию callback один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего вызова callback), значение текущего элемента, текущий индекс и массив, по которому происходит итерация.
console.log('24) ==== Array.prototype.reduceRight() =========');
let arrC = [1, 2, 3, 4, 5];
let arrD = [1, 2, 32, 4, 5];
console.log(arrC.reduceRight((acum, item) => item + acum, 0)); // 15
console.log(arrC.reduceRight((acum, item) => item + acum)); // 15
console.log(arrD.reduceRight((acum, item) => item > acum ? item : acum, 0)); // 32 (самое большое число в массиве)
console.log(arrD.reduceRight(acum => acum)); // 5
console.log(arrD.reduceRight(acum => acum, 0)); // 0
console.log('\n');



// Array.prototype.reverse()
// на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
console.log('25) ==== Array.prototype.reverse() =========');
console.log(['a', 'b', 'c'].reverse()); // ['c', 'b', 'a']
console.log([1, 2, 3, 4].reverse()); // [4, 3, 2, 1]
console.log('\n');


// Array.prototype.shift()
// удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
console.log('26) ==== Array.prototype.shift() =========');
let newArray = [1, 2, 3, 4];
console.log(newArray.shift()); // 1
console.log(newArray); // [2, 3, 4]
console.log('\n');


// Array.prototype.slice(begin, end)
// возвращает новый массив, содержащий копию части исходного массива.
console.log('27) ===== Array.prptotype.slice() ==========');
let strArr = ['first', 'second', 'third', 'fourth', 'fifth'];
console.log(strArr.slice()); // ['first', 'second', 'third', 'fourth', 'fifth']
console.log(strArr.slice(2)); // [third', 'fourth', 'fifth']
console.log(strArr.slice(2, 4)); // [third', 'fourth']
console.log(strArr); // ['first', 'second', 'third', 'fourth', 'fifth']
console.log('\n');


// Array.prototype.some( callback(item, index, array), thisArg)
// проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
console.log("==== 28) Array.prototype.some() =======");
console.log([12, 3, 7, 10].some(item => item >= 10)); // true
console.log([2, 3, 7, 1].some(item => item >= 10)); // false
console.log([244, 'abc', 1, 'string'].some(item => typeof item === 'string')); // true
console.log([1, 2, 3, 4, 'abc'].some(item => typeof item === 'number')); // true
console.log("\n");


// Array.prototype.sort(fn)
// на месте сортирует элементы массива и возвращает отсортированный массив.
console.log('29) ==== Array.prototype.sort() =========');
console.log(['арбузы', 'бананы', 'Вишня'].sort()); // ['Вишня', 'арбузы', 'бананы']
console.log([21, 2, 10, 1].sort()); // [1, 10, 2, 21]
console.log(['слово', 'Слово', '1 Слово', '2 Слова'].sort()); // ['1 Слово', '2 Слова', 'Слово', 'слово']
// В Unicode, числа находятся перед буквами в верхнем регистре, а те, в свою очередь, перед буквами в нижнем регистре.
console.log([21, 2, 10, 1].sort((a, b) => a - b)); // [1, 2, 10, 21]
// сортировка чисел по возростанию
console.log('\n');


// Array.prototype.splice(start, deleteCount, item)
// изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
console.log('30) ==== Array.prototype.splice() =========');
let numbers = [9, 12, 43, 23, 65];
console.log(numbers.splice()); // []
console.log(numbers.slice(1, 0, 12)); // []
console.log(numbers.splice(1, 2)); // [12, 43]
console.log(numbers); // [9, 23, 65]
console.log('\n');


// Array.prototype.toLocaleString()
// возвращает строковое представление элементов массива. Элементы преобразуются в строки с использованием своих собственных методов toLocaleString и эти строки разделяются локале-зависимой строкой (например, запятой «,»).
console.log('31) ==== Array.prototype.toLocaleString() =========');
console.log([21245, new Date, 'string'].toLocaleString()); // '21 245,21.01.2021, 09:00:00,string'
console.log([undefined, null, new Object, new Function, new Number, true].toLocaleString()); // ',,[object Object], function anonymous() { },0,true'
console.log('\n');


// Array.toSource()
// Эта возможность не является стандартной и стандартизировать её пока никто не собирается. Не используйте её на сайтах, смотрящих во внешний мир: она будет работать не у всех пользователей. Также могут присутствовать большие несовместимости между реализациями и её поведение может в будущем измениться. Метод toSource() возвращает строковое представление исходного кода массива
console.log('32) ==== Array.prototype.toSource ==========');
// console.log(Array.of(1,2,4).toSource()); // TypeError: toSource is not a function
console.log('\n');


// Array.prototype.toString()
// возвращает строковое представление указанного массива и его элементов.
console.log('33) ==== Array.prototype.toString() =========');
console.log(['Jan', 'Feb', 'Mar', 'Apr'].toString()); // 'Jan,Feb,Mar,Apr'
console.log([undefined, null, new Object, new Function, new Number, true].toString()); // ',,[object Object], function anonymous() { },0,true'
console.log([2, 3, 4, 5, 6].toString()); // '2,3,4,5,6'
console.log('\n');


// Array,protoype.unshift(element)
// добавляет один или более элементов в начало массива и возвращает новую длину массива.
console.log('34) ==== Array.prototype.unshift() ========');
let myArr = [1, 2, 3, 5, 6];
console.log(myArr.unshift(0, -4)); // 7
console.log(myArr); // [0, -4, 1, 2, 3, 5, 6]
console.log('\n');


// Array.prototype.values()
// возвращает новый объект итератора массива Array Iterator, содержащий значения для каждого индекса в массиве.
console.log('35) ===== Array.prototype.values() =======');
let data = ['string', undefined, null, 543];
let vData = data.values();
// for (let value of vData) {
//     console.log(value);
// }
// без цикла
console.log(vData.next().value); // string
console.log(vData.next().value); // undefined
console.log(vData.next().value); // null
console.log(vData.next().value); // 543
console.log(vData.next().value); // undefined
// если вызвать next() > arr.length раз, то в дальнейшем вместо значений массива получим undefined
console.log('\n\n')