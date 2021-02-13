// Math.E
// Свойство Math.E представляет основание натурального логарифма, e, приблизительно равное 2,718.
console.log('1) ==== Math.E =======');
console.log(Math.E); // 2.718281828459045
console.log('\n');


// Math.LN10
// Свойство Math.LN10 представляет натуральный логарифм из 10, приблизительно равный 2,302
console.log('2) ==== Math.LN10 =======');
console.log(Math.LN10); // 2.302585092994046
console.log('\n');


// Math.LN10
// Свойство Math.LN2 представляет натуральный логарифм из 2, приблизительно равный 0,693
console.log('3) ==== Math.LN2 =======');
console.log(Math.LN2); // 0.6931471805599453
console.log('\n');


// Math.LOG10E
// Свойство Math.LOG10E представляет десятичный логарифм из e, приблизительно равный 0,434
console.log('4) ==== Math.LOG10E =======');
console.log(Math.LOG10E); // 0.4342944819032518
console.log('\n');


// Math.LOG2E
// Свойство Math.LOG10E представляет двоичный логарифм из e, приблизительно равный 1,442
console.log('5) ==== Math.LOG2E =======');
console.log(Math.LOG2E); // 1.4426950408889634
console.log('\n');


// Math.PI
// Свойство Math.PI представляет отношение длины окружности круга к его диаметру, приблизительно равное 3,14159
console.log('6) ==== Math.PI =======');
console.log(Math.PI); // 3.141592653589793
console.log('\n');


// Math.SQRT1_2
// Свойство Math.SQRT1_2 представляет квадратный корень из 1/2, приблизительно равный 0,707
console.log('7) ==== Math.SQRT1_2 =======');
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log('\n');


// Math.SQRT2
// Свойство Math.SQRT2 представляет квадратный корень из 2, приблизительно равный 1,414
console.log('8) ==== Math.SQRT2 =======');
console.log(Math.SQRT2); // 1.4142135623730951
console.log('\n');


// Math.abs(x)
// Метод Math.abs() возвращает абсолютное значение числа.
console.log('9) ==== Math.abs(x) =======');
console.log(Math.abs('-1')); // 1
console.log(Math.abs(-2)); // 2
console.log(Math.abs(null)); // 0
console.log(Math.abs('')); // 0
console.log(Math.abs([])); // 0
console.log(Math.abs([2])); // 2
console.log(Math.abs([1,2])); // NaN
console.log(Math.abs({})); // NaN
console.log(Math.abs('string')); // NaN
console.log(Math.abs()); // NaN  
console.log('\n');


// Math.acos(x)
// Метод Math.acos() возвращает арккосинус числа (в радианах)
console.log('10) ==== Math.acos(x) =======');
console.log(Math.acos(-2)); // NaN
console.log(Math.acos(-1)); // 3.141592653589793
console.log(Math.acos(0)); // 1.5707963267948966
console.log(Math.acos(0.5)); // 1.0471975511965979
console.log(Math.acos(1)); // 0
console.log(Math.acos(2)); // NaN
console.log('\n');


// Math.acosh(x)
// Метод Math.acosh() возвращает гиперболический арккосинус числа
console.log('11) ==== Math.acosh(x) =======');
console.log(Math.acosh(-2)); // NaN
console.log(Math.acosh(-1)); // NaN
console.log(Math.acosh(0)); // NaN
console.log(Math.acosh(0.5)); // NaN
console.log(Math.acosh(1)); // 0
console.log(Math.acosh(2)); // 1.3169578969248166
console.log(Math.acosh(99)); // 5.288241522117258
console.log('\n');


// Math.asin(x)
// Метод Math.asin() возвращает арксинус числа (в радианах)
console.log('12) ==== Math.asin(x) =======');
console.log(Math.asin(-2)); // NaN
console.log(Math.asin(-1)); // -1.5707963267948966 (-pi/2)
console.log(Math.asin(0)); // 0
console.log(Math.asin(0.5)); // 0.5235987755982989
console.log(Math.asin(1)); // 1.5707963267948966 (pi/2)
console.log(Math.asin(2)); // NaN
console.log('\n');


// Math.asinh(x)
// Метод Math.asinh() возвращает гиперболический арксинус числа
console.log('13) ==== Math.asinh(x) =======');
console.log(Math.asinh(-99)); // -5.288292537319899
console.log(Math.asinh(-2)); // -1.4436354751788103
console.log(Math.asinh(-1)); // -0.881373587019543
console.log(Math.asinh(0)); // 0
console.log(Math.asinh(0.5)); // 0.48121182505960347
console.log(Math.asinh(1)); // 0.881373587019543
console.log(Math.asinh(2)); // 1.4436354751788103
console.log(Math.asinh(99)); // 5.288292537319899
console.log('\n');


// Math.atan(x)
// Метод Math.atan() возвращает арктангенс числа (в радианах)
console.log('14) ===== Math.atan() ======')
console.log(Math.atan(3)); // 1.2490457723982544
console.log(Math.atan(2)); // 1.1071487177940904
console.log(Math.atan(1)); // 0.7853981633974483
console.log(Math.atan(0)); // 0
console.log(Math.atan(-1)); // -0.7853981633974483
console.log('\n');


// Math.atan2(y, x)
// Метод Math.atan2() возвращает числовое значение от -π до π, представляющее угол тета точки (x, y). Это выраженный в радианах угол, отсчитываемый против часовой стрелки от положительного направления оси X до точки (x, y). Обратите внимание, что первым в метод передаётся координата y, а только вторым — координата x. В метод Math.atan2() аргументы x и y передаются по отдельности, в то время, как в метод Math.atan() передаётся отношение этих двух аргументов.
console.log('15) ===== Math.atan2() ======');
console.log(Math.atan2(0, 0)); // 0
console.log(Math.atan2(90, 0)); // 1.5707963267948966
console.log(Math.atan2(0, 90)); // 0
console.log(Math.atan2(90, 15)); // 1.4056476493802699
console.log(Math.atan2(15, 90)); // 0.16514867741462683
console.log('\n');


// Math.atanh(x)
// Метод Math.atanh() возвращает гиперболический арктангенс числа
console.log('16) ===== Math.atanh() ======');
console.log(Math.atanh(-2)); // NaN
console.log(Math.atanh(-1)); // -Infinity
console.log(Math.atanh(-0.5)); // -0.5493061443340548
console.log(Math.atanh(0)); // 0
console.log(Math.atanh(0.5)); // 0.5493061443340548
console.log(Math.atanh(1)); // Infinity
console.log(Math.atanh(1.01)); // NaN
console.log(Math.atanh(2)); // NaN
console.log('\n');


// Math.cbrt(x)
// Метод Math.cbrt() возвращает кубический корень числа
console.log('17) ===== Math.cbrt() ======');
console.log(Math.cbrt(-1)); // -1
console.log(Math.cbrt(0)); // 0
console.log(Math.cbrt(1)); // 1
console.log(Math.cbrt(2)); // 1.2599210498948734
console.log(Math.cbrt(125)); // 5
console.log('\n');


// Math.ceil(x)
// Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.
console.log('18) ===== Math.ceil() ======');
console.log(Math.ceil(.95)); // 1
console.log(Math.ceil(4)); // 4
console.log(Math.ceil(7.004)); // 8
console.log(Math.ceil(-0.95)); // -0
console.log(Math.ceil(-4)); // -4
console.log(Math.ceil(-7.004)); // -7
console.log('\n')


// Math.clz32(x)
// Метод Math.clz32() возвращает количество ведущих нулевых битов в 32-битном двоичном представлении числа. Если значение x не является числом, оно будет сначала преобразовано в число, а потом в 32-битное беззнаковое целое число. Если преобразованое 32-битное беззнаковое целое число равно 0, метод вернёт 32, поскольку все биты в числе равны 0.
console.log('19) ===== Math.clz32() ======');
console.log(Math.clz32(1)); // 31
console.log(Math.clz32(1000)); // 22
console.log(Math.clz32()); // 32
console.log(Math.clz32(true)); // 31
console.log(Math.clz32(3.5)); // 30
console.log('\n');

