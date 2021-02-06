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


// Number.toPrecision( precision)
// озвращает строку, представляющую объект Number с указанной точностью.
console.log('19) ===== Number.toPrecision() ======');
console.log( 5.123.toPrecision()); // 5.123
console.log( 5.123.toPrecision(2)); // 5.1
console.log( 5.123.toPrecision(1)); // 5
console.log( 0.00123.toPrecision(1)); // 0.001
console.log( 0.00123.toPrecision(2)); // 0.0012
console.log( 1234.5.toPrecision(1)); // 1e+3
console.log('\n');


// Number.toSource()
// возвращает строку, представляющую исходный код объекта.
// Эта возможность не является стандартной и стандартизировать её пока никто не собирается. Не используйте её на сайтах, смотрящих во внешний мир: она будет работать не у всех пользователей. Также могут присутствовать большие несовместимости между реализациями и её поведение может в будущем измениться.
console.log('20) ===== Number.toSource() =====');
// console.log( Number.toSource()); // TypeError : toSource is not a function
console.log('\n');


// Number.toString( radix)
// возвращает строковое представление указанного объекта Number. Метод toString() разбирает свой первый аргумент и пытается вернуть строковое представление в системе счисления с указанным основанием. Для оснований, больших 10, при обозначении цифр, больших 9, используются буквы латинского алфавита. Например, для шестнадцатеричных чисел (основание 16), используются буквы с a по f.
console.log('21) ====== Number.toString() =====');
console.log( (2345).toString()); // 2345
console.log( (2345).toString(2)); // 100100101001
console.log( (2345).toString(8)); // 4451
console.log( (2345).toString(16)); // 929
console.log('\n\n');


// Number.valueOf()
// возвращает примитивное значение объекта Number. Этот метод обычно вызывается внутренними механизмами движка JavaScript, а не явно в коде.
console.log('22) ===== Number.valueOf() ======');
console.log( (123).valueOf()); // 123
