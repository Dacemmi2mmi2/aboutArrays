// bigInt


// BigInt.asIntN(width, bigint)
// это статический метод, который позволяет перенести BigInt-значение в целое число со знаком между  -2 ** ширина-1 and 2 ** (ширина-1) -1. Вщзрващает значение bigint по модулю 2 ** width как целое число со знаком.
console.log('1) ===== BigInt.asIntN() ======');
const max64 = 2n ** (64n -1n) - 1n;
console.log(max64); // 9223372036854775807n
console.log(BigInt.asIntN(64, max64)); // 9223372036854775807n
console.log(BigInt.asIntN(64, max64 + 1n)); // -9223372036854775808n отрицательное число из-за переполнения

const max128 = 2n ** (128n -1n) - 1n; // 170141183460469231731687303715884105727n
console.log(BigInt.asIntN(128, max128)); // 170141183460469231731687303715884105727n
console.log(BigInt.asIntN(128, max128 + 1n)); // -170141183460469231731687303715884105728
console.log(BigInt.asIntN(128, max64 + 1n)); // 9223372036854775808n
console.log('\n');


// BigInt.asUintN(width, bigint)
// статический метод используется для преобразования значения BigInt в целое число без знака от 0 до 2width-1.
console.log('2) ===== BigInt.asUintN() ======')
const max = 2n ** 64n - 1n;
console.log(max); // 18446744073709551615n
console.log(BigInt.asUintN(64, max)); // 18446744073709551615n
console.log(BigInt.asUintN(64, max + 1n)); // 0n из-за переполнения
console.log(BigInt.asUintN(128, max + 1n)); // 18446744073709551616n
console.log('\n');


// BigInt.prototype.toLocaleString( locales, options)
// Метод возвращает строку с зависящим от языка представлением этого BigInt
console.log('3) ===== BigInt.prototype.toLocaleString() =====');
const bigint = 123456789123456789n;
console.log(bigint.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })); // 123.456.789.123.456.789,00 €
console.log(bigint.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })); // 123 456 789 123 456 789,00 ₽
console.log('\n');


// BigInt.prototype.toString( radix)
// Метод возвращает строку, представляющую указанный объект BigInt. Завершающее «n» не является частью строки.
console.log('4) ===== BigInt.prototype.toString() =====');
console.log((17n).toString()); // '17'
console.log((66n).toString(2)); // '1000010'
console.log((254n).toString(16)); // 'fe'
console.log((-10n).toString(2)); // '-1010'
console.log((-0xffn).toString(2)); // '-11111111'
console.log('\n');


// BigInt.prototype.valueOf()
// Метод возвращает обернутое примитивное значение объекта BigInt.
console.log('5) ===== BigInt.prototype.valueOf() =======');
console.log((3n).valueOf()); // 3n
console.log(typeof (3n).valueOf()); // bigint
console.log('\n\n');