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
console.log('29) ==== Array.prototype.sprt() =========');
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








// функции строк


// String.fromCharCode()
// возвращает строку, созданную из указанной последовательности значений единиц кода UTF-16.
console.log('1) ===== String.fromCharCode() =======');
console.log(String.fromCharCode(42, 64, 65, 66, 67)); // @ABC
console.log(String.fromCharCode(194564)); // 
console.log(String.fromCharCode(0x2F804)); // 
console.log('\n');


// String.fromCodePoint()
// возвращает строку, созданную из указанной последовательности кодовых точек. Метод String.fromCharCode() не может вернуть символ по такой большой кодовой точке. Следующий же метод может вернуть 4-байтный символ так же, как и обычный 2-байтный (то есть, он может вернуть один символ, который на самом деле имеет длину 2, а не 1!)
console.log('2) ===== String.fromCodePoint() =======');
console.log(String.fromCodePoint(42, 65)) // *A
console.log(String.fromCodePoint(194564)); // 你
console.log(String.fromCodePoint(0x2F804)); // 你
console.log('\n');


// String.prototype.anchor()
// создаёт якорный HTML-элемент <a>, используемый в качестве цели гиперссылки.
// Эта возможность была удалена из веб-стандартов. Хотя некоторые браузеры по-прежнему могут поддерживать её, она находится в процессе удаления. Не используйте её ни в старых, ни в новых проектах. Страницы или веб-приложения, использующие её, могут в любой момент сломаться.
console.log('3) ===== String.protoype.anchor() ======');
console.log('str'.anchor('title')); // <a name="title">str</a>
console.log('\n');


// String.prototype.big()
// создаёт HTML-элемент <big>, заставляющий строку отображаться большим шрифтом
// Эта возможность была удалена из веб-стандартов. Хотя некоторые браузеры по-прежнему могут поддерживать её, она находится в процессе удаления. Не используйте её ни в старых, ни в новых проектах. Страницы или веб-приложения, использующие её, могут в любой момент сломаться.
console.log('4) ===== String.prototype.big() =========');
console.log('string'.big()); // <big>string</big>
console.log('\n');


// String.prototype.blink()
// создаёт HTML-элемент <blink>, заставляющий строку мерцать.
// Эта возможность была удалена из веб-стандартов. Хотя некоторые браузеры по-прежнему могут поддерживать её, она находится в процессе удаления. Не используйте её ни в старых, ни в новых проектах. Страницы или веб-приложения, использующие её, могут в любой момент сломаться.
// мерцающий текст осуждается некоторыми стандартами доступности. Сам элемент <blink> является нестандартным и устаревшим!
console.log('5) ===== String.prototype.blink() ========');
console.log('string'.blink()); // <blink>string</blink>
console.log('\n');


// String.prototype.bold()
// создаёт HTML-элемент <b>, заставляющий строку отображаться полужирным шрифтом.
// Эта возможность была удалена из веб-стандартов. Хотя некоторые браузеры по-прежнему могут поддерживать её, она находится в процессе удаления. Не используйте её ни в старых, ни в новых проектах. Страницы или веб-приложения, использующие её, могут в любой момент сломаться.
console.log('6) ===== String.prototype.bpld() ========');
console.log('string'.bold()) // <b>string</b>
console.log('\n');


// String.prototype.chatAt( index )
// возвращает указанный символ из строки.
console.log('7) ===== String.prototype.chatAt() =========');
console.log('string'.charAt()); // s
console.log('string'.charAt(3)); // i
console.log('string'.charAt(23)); // 
console.log('\n');


// String.prototype.charCodeAt( index )
// возвращает числовое значение Юникода для символа по указанному индексу (за исключением кодовых точек Юникода, больших 0x10000).
console.log('8) ===== String.prototype.chatCodeAt() =========');
console.log('ABC'.charCodeAt()); // 65
console.log('ABC'.charCodeAt(1)); // 66
console.log('ABC'.charCodeAt(10)); // NaN
console.log('\uD800\uDC00'.charCodeAt(0)); // 55296
console.log('\n');


// String.prototype.codePointAt( position )
// возвращает неотрицательное целое число, являющееся закодированным в UTF-16 значением кодовой точки
console.log('9) ====== String.prototype.codePointAt() =========');
console.log('ABC'.codePointAt()); // 65
console.log('ABC'.codePointAt(1)); // 66
console.log('ABC'.codePointAt(23)); // undefined
console.log('\uD800\uDC00'.codePointAt(0)); 65536
console.log('\n');


// String.prototype.concat()
// объединяет текст из двух или более строк и возвращает новую строку.
console.log('10) ===== String.prototype.concat() =========');
console.log('Hello'.concat(' World')); // Hello World
console.log('\n');


// String.prototype.endsWith( searchStr, length )
// позволяет определить, заканчивается ли строка символами указанными в скобках, возвращая, соотвественно, true или false.
console.log('11) ===== String.prototype.endsWith =========');
console.log('test string'.endsWith('string')); // true
console.log('test string'.endsWith('str')); // false
console.log('test string'.endsWith('str', 8)); // true
console.log('\n');


// String.prototype.fixed()
// создаёт HTML-элемент <tt>, заставляющий строку отображаться моноширинным шрифтом.
// Эта возможность была удалена из веб-стандартов. Хотя некоторые браузеры по-прежнему могут поддерживать её, она находится в процессе удаления. Не используйте её ни в старых, ни в новых проектах. Страницы или веб-приложения, использующие её, могут в любой момент сломаться.
console.log('12) ===== String.prototype.fixed() =======');
console.log('str'.fixed()); // <tt>str</tt>
console.log('\n');


// String.prototype.fontcolor( color )
// создаёт HTML-элемент <font>, заставляющий строку отображаться шрифтом указанного цвета.
// Эта возможность была удалена из веб-стандартов. Хотя некоторые браузеры по-прежнему могут поддерживать её, она находится в процессе удаления. Не используйте её ни в старых, ни в новых проектах. Страницы или веб-приложения, использующие её, могут в любой момент сломаться.
// элемент <font> был удалён из HTML5 и больше не должен использоваться. Вместо него веб-разработчикам следует использовать свойства CSS.
console.log('13) ===== String.prototype.fontcolor() =======');
console.log('ab'.fontcolor('green')); // <font color="green">ab</font>
console.log('\n');


// String.prototype.fontsize( size )
// создаёт HTML-элемент <font>, заставляющий строку отображаться шрифтом указанного размера.
// Эта возможность была удалена из веб-стандартов. Хотя некоторые браузеры по-прежнему могут поддерживать её, она находится в процессе удаления. Не используйте её ни в старых, ни в новых проектах. Страницы или веб-приложения, использующие её, могут в любой момент сломаться.
// элемент <font> был удалён из HTML5 и больше не должен использоваться. Вместо него веб-разработчикам следует использовать свойства CSS.
console.log('14) ===== String.prototype.fontsize() =======');
console.log('ab'.fontsize(7)); // <font size="7">ab</font>
console.log('\n');


// String.prototype.includes( searchStr, position)
// проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно true или false.
console.log('15) ===== String.prototype.includes() =======');
console.log('str ab'.includes('ab')); // true
console.log('str ab'.includes('AB')); // false
console.log('str ab'.includes('str', 0)); // true
console.log('str ab'.includes('str', 1)); // false
console.log('\n');


// String.prototype.indexOf( searchValue, fromIndex)
// возвращает индекс первого вхождения указанного значения в строковый объект String, на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено.
console.log('16) ===== String.prototype.indexOf() =======');
console.log('str ab'.indexOf('ab')); // 4
console.log('str ab'.indexOf('AB')); // -1
console.log('str ab'.indexOf('str', 0)); // 0
console.log('str ab'.indexOf('str', 1)); // -1
console.log('\n');


// String.prototype.italics()
// создаёт HTML-элемент <i>, заставляющий строку отображаться курсивом.
// Эта возможность была удалена из веб-стандартов. Хотя некоторые браузеры по-прежнему могут поддерживать её, она находится в процессе удаления. Не используйте её ни в старых, ни в новых проектах. Страницы или веб-приложения, использующие её, могут в любой момент сломаться.
console.log('17) ===== String.prototype.italics() =========');
console.log('new str'.italics()); // <i>new str</i>
console.log('\n');


// String.prototype.lastIndexOf( searchValue, fromIndex)
// возвращает индекс последнего вхождения указанного значения в строковый объект String, на котором он был вызван, или -1, если ничего не было найдено. Поиск по строке ведётся от конца к началу, начиная с индекса fromIndex.
console.log('18) ===== String.prototype.lastIndexOf() ========');
console.log('str ab ab'.lastIndexOf('ab')); // 7
console.log('str ab ab'.lastIndexOf('AB')); // -1
console.log('str ab ab'.lastIndexOf('str', 0)); // 0
console.log('str ab ab'.lastIndexOf('str', 1)); // 0
console.log('\n');


// String.prototype.link()
// создаёт HTML-элемент <a>, заставляющий строку отображаться в виде ссылки на другой URL.
// Эта возможность была удалена из веб-стандартов. Хотя некоторые браузеры по-прежнему могут поддерживать её, она находится в процессе удаления. Не используйте её ни в старых, ни в новых проектах. Страницы или веб-приложения, использующие её, могут в любой момент сломаться.
console.log('19) ===== String.prototype.link() =======');
console.log('str'.link('link')); // <a href="link">str</a>
console.log('\n');


// String.prototype.localeCompare( compareString, locales, options)
// Возвращает число, указывающее, должна данная строка находится до, после или в том же самом месте, что и строка, переданная через параметр, при сортировке этих строк. Если данная строка предшествует строке compareString, возвращает отрицательное число, если она следует за строкой compareString, возвращает положительное значение и возвращает 0, если строки находятся на одном уровне.
console.log('20) ===== String.prototype.localeCompare() =======');
console.log('a'.localeCompare('b', 'cd')); // -1
console.log('e'.localeCompare('b', 'cd')); // 1
console.log('a'.localeCompare('a', 'cd')); // 0
console.log('\n');


// String.prototype.match( regexp)
// возвращает массив получившичся совпадений при сопоставлении строки с регулярным выражением.
console.log('21) ===== String.prototype.match() ======');
let alpf = 'ABCDEabcde';
let reg = /[a-c]/gi;
console.log(alpf.match(reg)); // ['A', 'B', 'C', 'a', 'b', 'c']
console.log('\n');


// String.prototype.matchAll( regexp)
// возвращает итератор по всем результатам при сопоставлении строки с регулярным выражением.
console.log('22) ===== String.prototype.matchAll() ======');
let arrMatch = [...alpf.matchAll(reg)];
console.log(arrMatch); // [["A", index: 0, input: "ABCDEabcde", groups: undefined], ["B", index: 1, input: "ABCDEabcde", groups: undefined], ["C", index: 2, input: "ABCDEabcde", groups: undefined], ["a", index: 5, input: "ABCDEabcde", groups: undefined], ["b", index: 6, input: "ABCDEabcde", groups: undefined], ["c", index: 7, input: "ABCDEabcde", groups: undefined]]
console.log(arrMatch[0].input); // ABCDEabcde
console.log('\n');


// String.prototype.normalize( form)
// возвращает форму нормализации Юникода данной строки (если значение не является строкой, сначала оно будет в неё преобразовано). Он не изменяет значение самой строки.
console.log('23) ===== String.prototype.normalize() ========.');
let valueStr = ['h', 'ĥ', 'æ', 'ae', 'g', 'ġ'];
let valueForm = ['NFC', 'NFD', 'NFKC', 'NFKD'];

for (let i = 0; i < valueForm.length; i++){
    sort(valueStr.map(item => item.normalize(valueForm[i])));
}

function sort(text){
    text.sort((a, b) => {
        if (a < b){ return -1 };
        if (a === b){ return 0 };
        if (a > b){ return 1 };
    });
    console.log(text);
}
// ["ae", "g", "h", "æ", "ġ", "ĥ"]
// ["ae", "g", "ġ", "h", "ĥ", "æ"]
// ["ae", "g", "h", "æ", "ġ", "ĥ"]
// ["ae", "g", "ġ", "h", "ĥ", "æ"]
console.log('\n');


// String.prototype.padEnd( targetLength, padString)
// дополняет текущую строку с помощью заданной строки (в конечном счете повторяя), так чтобы результирующая строка достигла заданной длины. Дополнение применяется в конце (справа) текущей строки.
// Так как спецификация этой технологии ещё не стабилизировалась, смотрите таблицу совместимости по поводу использования в различных браузерах. Также заметьте, что синтаксис и поведение экспериментальной технологии может измениться в будущих версиях браузеров, вслед за изменениями спецификации.
console.log('24) ===== String.prototype.padEnd ========');
console.log('str'.padEnd('abc')); // str
console.log('str'.padEnd(10)); // str
console.log('srr'.padEnd(9, 'abc')); // strabcabc
console.log('\n');


// String.prototype.padStart( targetLength, padString)
// заполняет текущую строку другой строкой (несколько раз, если нужно) так, что итоговая строка достигает заданной длины. Заполнение осуществляется в начале (слева) текущей строки.
// Так как спецификация этой технологии ещё не стабилизировалась, смотрите таблицу совместимости по поводу использования в различных браузерах. Также заметьте, что синтаксис и поведение экспериментальной технологии может измениться в будущих версиях браузеров, вслед за изменениями спецификации.
console.log('25) ===== Srting.prototype.padStart ========');
console.log('str'.padStart(0)); // str
console.log('str'.padStart(9, 'abc')); // abcabcstr
console.log('str'.padStart(10)); //        str
console.log('str'.padStart('abc')); // str
console.log('\n');


// String.prototype.repeat( count)
// конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки, на которой он был вызван.
console.log('26) ===== String.prototype.repeat() ======');
console.log('abc'.repeat(1)); // abc
console.log('abc'.repeat(2)); // abcabc
console.log('abc'.repeat(2.5)); // abcabc
console.log('abc'.repeat(0)); // ''
console.log('\n');


// String.prototype.replace( regExp, string)
// возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель. Шаблон может быть строкой или регулярным выражением, а заменитель может быть строкой или функцией, вызываемой при каждом сопоставлении.
console.log('27) ===== String.prototype.replace() ========');
console.log('Strstr'.replace( /s/gi, 'a')); // atratr
let re = /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+)/;
let text = 'Джон Смит';
console.log(text.replace(re, '$2, $1')); // 'Смит Джон'
console.log('\n');


// String.prototype.replaceAll( regExp, string)
// возвращает новую строку со всеми совпадениями pattern(regExp) , который меняется на replacement(string). pattern может быть строкой или регулярным выражением, и replacement может быть строкой или функция возвращающая каждое совпадение.
console.log('28) ===== String.prototype.replaceAll ========');
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replaceAll('dog', 'monkey')); // 'The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?'
console.log(p.replaceAll(/Dog/gi, 'ferret')); // 'The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?'
// console.log(p.replaceAll(/Dog/i, 'ferret')); // TypeError : String.replaceAll called with a not global RegExp argument
console.log('\n');


// String.protoype.search( regExp)
// выполняет поиск сопоставления между регулярным выражением и этим объектом String, возвращает индекс первого сопоставления с регулярным выражением внутри строки. В противном случае метод вернёт -1.
console.log('29) ===== String.prototype.search() =========');
console.log('str'.search(/s/)); // 0
console.log('abc'.search(/s/)); // -1
console.log('\n');


// String.prototype.slice( startIndex, endIndex)
// извлекает часть строки и возвращает новую строку без изменения оригинальной строки.
console.log('30) ===== String.prototype.slice() ========');
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31)); // "the lazy dog."
console.log(str.slice(4, 19)); // "quick brown fox"
console.log(str.slice(-4)); // "dog."
console.log(str.slice(-9, -5)); // "lazy"
console.log('\n');


// String.prototype.small()
// создаёт HTML-элемент <small>, заставляющий строку отображаться маленьким шрифтом.
// Эта возможность была удалена из веб-стандартов. Хотя некоторые браузеры по-прежнему могут поддерживать её, она находится в процессе удаления. Не используйте её ни в старых, ни в новых проектах. Страницы или веб-приложения, использующие её, могут в любой момент сломаться.
console.log('31) ==== String.prototype.small() =======')
console.log('str'.small()); // <small>str</small>
console.log('\n');


// String.prototype.split( separator, limit)
// разбивает объект String на массив строк путём разделения строки указанной подстрокой. Метод split() возвращает новый массив.
console.log('32) ===== String.prototype.split() =======');
console.log('Привет, мир. Как дела?'.split(' ')); // ['Привет,', 'мир.', 'Как', 'дела?']
console.log('Привет, мир. Как дела?'.split(' ', 3)); // ['Привет,', 'мир.', 'Как']
console.log(''.split(' ')); // ['']
console.log('\n');


// String.prototype.startsWith( searchItem, position)
// помогает определить, начинается ли строка с символов указаных в скобках, возвращая, соответственно, true или false.
console.log('33) ===== String,prototype.startsWith() ======');
const t = 'Быть или не быть, вот в чём вопрос.';
console.log(t.startsWith('Быть')); // true
console.log(t.startsWith('не быть')); // false
console.log(t.startsWith('не быть', 9));  // true
console.log('\n');


// String.prototype.strike()
// создаёт HTML-элемент <strike>, заставляющий строку отображаться зачёркнутым текстом.
// Эта возможность была удалена из веб-стандартов. Хотя некоторые браузеры по-прежнему могут поддерживать её, она находится в процессе удаления. Не используйте её ни в старых, ни в новых проектах. Страницы или веб-приложения, использующие её, могут в любой момент сломаться.
console.log('34) ===== String.prototype.strike() ======');
console.log('abc'.strike()); // <strike>abc</strike>
console.log('\n');


// String.prototype.sub()
// создаёт HTML-элемент <sub>, заставляющий строку отображаться подстрочным текстом (нижним индексом).
// Эта возможность была удалена из веб-стандартов. Хотя некоторые браузеры по-прежнему могут поддерживать её, она находится в процессе удаления. Не используйте её ни в старых, ни в новых проектах. Страницы или веб-приложения, использующие её, могут в любой момент сломаться.
console.log('35) ===== String.prototype.sub() ======');
console.log('abc'.sub()); // <sub>abc</sub>
console.log('\n');


// String.prototype.substr()
// возвращает указанное количество символов из строки, начиная с указанной позиции.
// Внимание: так как String.prototype.substr(…) не полностью упразднена (а лишь "удалена из стандартов по вебу"), она считается унаследованной функцией, использование которой лучше избегать там, где это возможно. Она не является частью ядра языка JavaScript и может быть удалена в будущем. Если есть возможность, используйте метод substring().
console.log('36) ===== String.prototype.substr() =======');
const m = 'Mozilla';
console.log(m.substr(1, 2)); // oz
console.log(m.substr(2)); // zilla
console.log('\n');


// String.prototype.substring( indexA, indexB)
// возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
console.log('37) ===== String.prototype.substring() ======');
const z = 'Mozilla';
console.log(z.substring(1, 2)); // oz
console.log(z.substring(2)); // zilla
console.log('\n');


// String.prototype.sup()
// создаёт HTML-элемент <sup>, заставляющий строку отображаться надстрочным текстом (верхним индексом).
// Эта возможность была удалена из веб-стандартов. Хотя некоторые браузеры по-прежнему могут поддерживать её, она находится в процессе удаления. Не используйте её ни в старых, ни в новых проектах. Страницы или веб-приложения, использующие её, могут в любой момент сломаться.
console.log('38) ===== String.prototype.sup() =======');
console.log('abc'.sup()); // <sup>abc</sup>
console.log('\n');


// String.prototype.toLocaleLowerCase()
// возвращает значение строки, преобразованное в нижний регистр согласно правилам преобразования регистра локали. Метод toLocaleLowerCase() не изменяет значение самой строки. В большинстве случаев он возвращает тот же результат, что и метод toLowerCase(), но для некоторых локалей, например, турецкой, в которой правила преобразования регистра отличаются от правил по умолчанию, принятых в Юникоде, он может вернуть другой результат.
console.log('39) ===== String.prototype.toLocaleLowerCase() =====');
console.log( 'АЛФАВИТ'.toLocaleLowerCase()); // алфавит
console.log('\n');


// String.prototype.toLocaleUpperCase()
// Метод toLocaleUpperCase() возвращает значение строки, преобразованное в верхний регистр согласно правилам преобразования регистра локали. Метод toLocaleUpperCase() не изменяет значение самой строки. В большинстве случаев он возвращает тот же результат, что и метод toUpperCase(), но для некоторых локалей, например, турецкой, в которой правила преобразования регистра отличаются от правил по умолчанию, принятых в Юникоде, он может вернуть другой результат.
console.log('40) ===== String.prototype.toLocaleUpperCase() =====');
console.log( 'алфавит'.toLocaleUpperCase()); // АЛФАВИТ
console.log('\n');


// String.prototype.toLowerCase()
// возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр. Метод toLowerCase() не изменяет значение самой строки.
console.log('41) ===== String.prototype.toLowerCase() ======');
console.log( 'АЛФАВИТ'.toLowerCase()); // 'алфавит'
console.log('\n');


// String.prototype.toSource()
// Метод toSource() возвращает строковое представление исходного кода объекта.
// Эта возможность не является стандартной и стандартизировать её пока никто не собирается. Не используйте её на сайтах, смотрящих во внешний мир: она будет работать не у всех пользователей. Также могут присутствовать большие несовместимости между реализациями и её поведение может в будущем измениться.
console.log('42) ===== String.prototype.toSource() =======');
// console.log('str'.toSource()); // TypeError : toSource is not a function
console.log('\n');


// String.prototype.toString()
// возвращает строку, представляющую указанный объект. Объект String переопределяет метод toString(), унаследованный из объекта Object; он не наследует метод Object.prototype.toString(). Для объектов String метод toString() возвращает строку, представляющую объект и делает тоже самое, что и метод String.prototype.valueOf().
console.log('43) ===== String.prototype.toString() ========');
console.log('str'.toString()); // str
console.log('\n');


// String.prototype.toUpperCase()
// возвращает значение строки, преобразованное в верхний регистр. Метод toUpperCase() не изменяет значение самой строки.
console.log('44) ===== String.prototype.toUpperCase() =======');
console.log('алфавит'.toUpperCase()); // АЛФАВИТ
console.log('\n');


// String.prototype.trim()
// возвращает строку с вырезанными пробельными символами с её концов. Метод trim() не изменяет значение самой строки.
console.log('45) ===== String.prototype.trim() =======');
console.log('abc '.trim()); // 'abc'
console.log(' str '.trim()); // 'str'
console.log('\n');


// String.prototype.trimRight()
// удаляет пробельные символы с правого конца строки.
// Эта возможность не является стандартной и стандартизировать её пока никто не собирается. Не используйте её на сайтах, смотрящих во внешний мир: она будет работать не у всех пользователей. Также могут присутствовать большие несовместимости между реализациями и её поведение может в будущем измениться.
console.log('46) ==== String.prototype.trimRight() ========')
console.log(' str '.trimRight()); // ' str'
console.log('\n');


// String.prototype.trimLeft()
// удаляет пробельные символы с левого конца строки.
// Эта возможность не является стандартной и стандартизировать её пока никто не собирается. Не используйте её на сайтах, смотрящих во внешний мир: она будет работать не у всех пользователей. Также могут присутствовать большие несовместимости между реализациями и её поведение может в будущем измениться.
console.log('47) ==== String.prototype.trimLeft() ========')
console.log(' str '.trimLeft()); // 'str '
console.log('\n');


// String.prototype.valueOf()
// Метод valueOf() возвращает примитивное значение объекта String в виде строкового типа данных. Это значение эквивалентно значению вызова метода String.prototype.toString().
console.log('48) ===== String.prototype.valueOf() ======');
console.log('str'.valueOf()); // str
console.log('\n\n');








// Number


// Number.EPSILON
// Свойство Number.EPSILON представляет собой разницу между единицей и наименьшим значением, большим единицы, которое может быть представлено типом Number. Свойство EPSILON имеет значение, приблизительно равное 2.2204460492503130808472633361816E-16 или 2 ** -52.
console.log('1) ==== Number.EPSILON =======');
console.log(Number.EPSILON); // 2.220446049250313e-16
const testNumbers = {
    x : 0.1,
    y : 0.3,
    z : 0.2,
}
console.log(testNumbers.x - testNumbers.y + testNumbers.z); // 2.7755575615628914e-17
console.log((testNumbers.x - testNumbers.y + testNumbers.z) > Number.EPSILON); // false
console.log('\n');


// Number.MAX_SAFE_INTEGER
// Константа Number.MAX_SAFE_INTEGER представляет максимальное безопасное целочисленное значение в JavaScript (2 ** 53 - 1).
console.log('2) ====== Number.MAX_SAFE_INTEGER =====');
console.log( Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log('\n');


// Number.MAX_VALUE
// Свойство Number.MAX_VALUE представляет максимальное числовое значение, представимое в JavaScript. Свойство MAX_VALUE имеет значение, приблизительно равное 1.79E+308. Значения, большие MAX_VALUE представляются как «бесконечность».
console.log('3) ===== Number.MAX_VALUE ======');
console.log( Number.MAX_VALUE); // 1.7976931348623157e+308
console.log('\n');


// Number.MIN_SAFE_INTEGER
// Константа Number.MIN_SAFE_INTEGER представляет минимальное безопасное целочисленное значение в JavaScript -(2 ** 53 - 1).
console.log('4) ====== Number.MAX_SAFE_INTEGER =====');
console.log( Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log('\n');


// Number.MIN_VALUE
// Свойство Number.MIN_VALUE представляет минимальное положительное числовое значение, представимое в JavaScript. Свойство MIN_VALUE является положительным ближайшим к нулю числом, которое может быть представлено в JavaScript. MIN_VALUE имеет значение, приблизительно равное 5e-324. Значения, меньшие MIN_VALUE, преобразуются в 0 (так называемое «исчезновение порядка» или «антипереполнение»).
console.log('5) ===== Number.MIN_VALUE ======');
console.log( Number.MIN_VALUE); // 5e-324
console.log('\n');


// Number.NEGATIVE_INFINITY
// Свойство Number.NEGATIVE_INFINITY представляет значение отрицательной бесконечности.
console.log('6) ===== Number.NEGATIVE_INFINITY =====');
console.log( Number.NEGATIVE_INFINITY); // -Infinity
console.log( 1 * Number.NEGATIVE_INFINITY); // -Infinity
console.log( -1 * Number.NEGATIVE_INFINITY); // Infinity
console.log( 0 * Number.NEGATIVE_INFINITY); // NaN
console.log( NaN * Number.NEGATIVE_INFINITY); // NaN
console.log( Number.NEGATIVE_INFINITY / -1); // Infinity
console.log( Number.NEGATIVE_INFINITY / 1); // -Infinity
console.log( Number.NEGATIVE_INFINITY / Number.NEGATIVE_INFINITY); // NaN
console.log(2 / Number.NEGATIVE_INFINITY); // -0
console.log('\n');


// Number.NaN
// Свойство Number.NaN представляет «не число». Эквивалентно глобальному объекту NaN.
console.log('7) ===== Number.NaN ======');
console.log( Number.NaN); // NaN
console.log('\n');


// Number.POSITIVE_INFINITY
// Свойство Number.POSITIVE_INFINITY представляет значение положительной бесконечности.
console.log('8) ===== Number.POSITIVE_INFINITY =====');
console.log( Number.POSITIVE_INFINITY); // Infinity
console.log( 1 * Number.POSITIVE_INFINITY); // Infinity
console.log( -1 * Number.POSITIVE_INFINITY); // -Infinity
console.log( 0 * Number.POSITIVE_INFINITY); // NaN
console.log( NaN * Number.POSITIVE_INFINITY); // NaN
console.log( Number.POSITIVE_INFINITY / -1); // -Infinity
console.log( Number.POSITIVE_INFINITY / 1); // Infinity
console.log( Number.POSITIVE_INFINITY / Number.POSITIVE_INFINITY); // NaN
console.log(2 / Number.POSITIVE_INFINITY); // 0
console.log('\n');


// Nubmer.prototype
// Свойство Number.prototype представляет прототип конструктора Number. Все экземпляры Number наследуются от Number.prototype. Объект прототипа конструктора Number может быть изменён для затрагивания всех экземпляров объекта Number.
console.log('9) ===== Number.prototype ======')
console.log(Number.prototype); // Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}


// Number.isFinite( testValue)
// Метод Number.isFinite() определяет, является ли переданное значение конечным числом. В отличии от глобальной функции isFinite(), этот метод принудительно не преобразует параметр в число. Это означает, что он возвращает true только для конечных значений числового типа.
console.log('10) ===== Number.isFinite() ======');
console.log( Number.isFinite(Infinity)); // false
console.log( Number.isFinite(NaN));  // false
console.log( Number.isFinite(-Infinity)); // false
console.log( Number.isFinite(0)); // true
console.log( Number.isFinite(2e64)); // true
console.log( Number.isFinite('0')); // false
console.log('\n');


// Number.isInteger( testValue)
// Метод Number.isInteger() определяет, является ли переданное значение целым числом. Если целевое значение является целым числом, возвращает true. Если значение NaN или Infinity, то возвращает false. Метод также возвращает true, если это вещественное число с точкой, которое может быть представлено в целочисленном виде.
console.log('11) ===== Number.isInteger() ======');
console.log( Number.isInteger(Infinity)); // false
console.log( Number.isInteger(NaN));  // false
console.log( Number.isInteger(5.2)); // false
console.log( Number.isInteger(0)); // true
console.log( Number.isInteger(2e64)); // true
console.log( Number.isInteger('0')); // false
console.log('\n');


// Number.isNaN( value)
// определяет, является ли переданное значение NaN. Это более надёжная версия оригинальной глобальной функции isNaN(). В отличие от глобальной функции isNaN(), Number.isNaN() не имеет проблемы принудительного преобразования параметра в число. Это значит, что в него безопасно передавать значения, которые обычно превращаются в NaN, но на самом деле NaN не являются. Также это значит, что метод возвращает true только для числовых значений, имеющих значение NaN.
console.log('12) ===== Number.isNaN() ========');
console.log( Number.isNaN(NaN)); // true
console.log( Number.isNaN(Number.NaN)); // true
console.log( Number.isNaN(0 / 0)); // true
console.log( Number.isNaN('NaN')); // false
console.log( Number.isNaN(undefined)); // false
console.log( Number.isNaN({})); // false
console.log( Number.isNaN('blabla')); // false
console.log( isNaN('NaN')); // true
console.log( isNaN(undefined)); // true
console.log( isNaN({})); // true
console.log( isNaN('blabla')); // true
console.log('\n');


// Number.isSafeInteger()
// определяет, является ли переданное значение безопасным целым числом. Безопасное целое число это такое число, которое: может быть точно представлено числом IEEE-754 двойной точности и чьё представление IEEE-754 не может быть результатом округления любого другого целого числа, соответствующего представлению IEEE-754.
console.log('13) ===== Number.isSafeInteger() ======');
console.log( Number.isSafeInteger(3)); // true
console.log( Number.isSafeInteger(Math.pow(2, 53))); // false
console.log( Number.isSafeInteger(Math.pow(2, 53) - 1)); // true
console.log( Number.isSafeInteger(NaN)); // false
console.log( Number.isSafeInteger(Infinity)); // false
console.log( Number.isSafeInteger('3')); // false
console.log( Number.isSafeInteger(3.1)); // false
console.log( Number.isSafeInteger(3.0)); // true
console.log('\n');


// Number.parseFloat( string)
// разбирает строковый аргумент и возвращает число с плавающей запятой. Этот метод ведёт себя идентично глобальной функции parseFloat() и является частью ECMAScript 6 (его целью является модуляризация глобальных сущностей).
console.log('14) ===== Number.parseFloat() =======');
console.log( Number.parseFloat('str')); // NaN
console.log( Number.parseFloat('234')); // 234 (type Number)
console.log( Number.parseFloat('234.4')); // 234.4
console.log('\n');


// Number.parseInt( string, radix)
// разбирает строковый аргумент и возвращает целое число. Этот метод ведёт себя идентично глобальной функции parseInt() и является частью ECMAScript 6 (его целью является модуляризация глобальных сущностей).
console.log('15) ===== Number.parseInt() ======');
console.log( Number.parseInt('str')); // NaN
console.log( Number.parseInt('345')); // 345
console.log( Number.parseInt('345.4')); // 345
console.log( Number.parseInt('345.4', 10)); // 345
console.log( Number.parseInt('345.4', 16)); // 837
console.log( Number.parseInt('345.4', 8)); // 229
console.log('\n');


// Number.toExponential( fractionDigits)
// возвращает строку, представляющую объект Number в экспоненциальной записи.
console.log('16) ===== Number.toExponential() =======');
console.log( 77.123.toExponential()); // 7.7123e+1
console.log( 77.123.toExponential(2)); // 7.71e+1
console.log('\n');


// Number.toExponential( digits)
// форматирует число, используя запись с фиксированной запятой.
console.log('17) ===== Number.toFixed() =======');
console.log( 77.1278.toFixed()); // 77 (type String)
console.log( 77.1278.toFixed(2)); // 77.13
console.log('\n');


// Number.toLocaleString( locale, options)
// возвращает строку с языко-зависимым представлением числа. Aргументы locales и options позволяют приложениям определять язык, чьё поведение и соглашения по форматированию которого оно хочет использовать. В старых реализациях, игнорирующих аргументы locales и options, используемая локаль и форма возвращённой строки целиком зависит от реализации.
console.log('18) ===== Number.toLocaleString() ======');
console.log( 123456.789.toLocaleString('de-De', {style : 'currency', currency : 'EUR'})); // 123.456,79 €
console.log( 123456.789.toLocaleString('ru-RU', {style : 'currency', currency : 'RUB'})); // 123 456,79 ₽
console.log('\n');