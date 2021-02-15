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
console.log('\n');


// Math.clz32(x)
// Метод Math.clz32() возвращает количество ведущих нулевых битов в 32-битном двоичном представлении числа. Если значение x не является числом, оно будет сначала преобразовано в число, а потом в 32-битное беззнаковое целое число. Если преобразованое 32-битное беззнаковое целое число равно 0, метод вернёт 32, поскольку все биты в числе равны 0.
console.log('19) ===== Math.clz32() ======');
console.log(Math.clz32(1)); // 31
console.log(Math.clz32(1000)); // 22
console.log(Math.clz32()); // 32
console.log(Math.clz32(true)); // 31
console.log(Math.clz32(3.5)); // 30
console.log('\n');


// Math.cos(x)
// Метод Math.cos() возвращает косинус числа.
console.log('20) ===== Math.cos() ======');
console.log(Math.cos(1)); // 0.5403023058681398
console.log(Math.cos(1000)); // 0.562379076290703
console.log(Math.cos(0)); // 1
console.log(Math.cos()); // NaN
console.log(Math.cos(true)); // 0.5403023058681398
console.log(Math.cos(3.5)); // -0.9364566872907963
console.log('\n');


// Math.cosh(x)
// Метод Math.cosh() возвращает гиперболический косинус числа
console.log('21) ===== Math.cosh() ======');
console.log(Math.cosh(-2)); // 3.7621956910836314
console.log(Math.cosh(-1)); // 1.5430806348152437
console.log(Math.cosh(-0.5)); // 1.1276259652063807
console.log(Math.cosh(0)); // 1
console.log(Math.cosh(0.5)); // 1.1276259652063807
console.log(Math.cosh(1)); // 1.5430806348152437
console.log(Math.cosh(1.01)); // 1.5549099972942197
console.log(Math.cosh(2)); // 3.7621956910836314
console.log('\n');


// Math.exp(x)
// Метод Math.exp() возвращает значение выражения e ** x, где x — аргумент метода, а e — число Эйлера, основание натурального логарифма.
console.log('22) ===== Math.exp() ======');
console.log(Math.exp(-1)); // 0.36787944117144233
console.log(Math.exp(0)); // 1
console.log(Math.exp(1)); // 2.718281828459045
console.log('\n');


// Math.expm1(x)
// Метод Math.expm1() возвращает значение выражения (e ** x) - 1, где x — аргумент метода, а e — число Эйлера, основание натурального логарифма.
console.log('23) ===== Math.expm1() ======');
console.log(Math.expm1(-1)); // -0.6321205588285577
console.log(Math.expm1(0)); // 0
console.log(Math.expm1(1)); // 1.718281828459045
console.log('\n');


// Math.floor(x)
// Метод Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
console.log('24) ===== Math.floor() ======');
console.log(Math.floor(.95)); // 0
console.log(Math.floor(4)); // 4
console.log(Math.floor(7.004)); // 7
console.log(Math.floor(-0.95)); // -1
console.log(Math.floor(-4)); // -4
console.log(Math.floor(-7.004)); // -8
console.log('\n');


// Math.fround(x)
// Метод Math.fround() возвращает ближайшее число с плавающей запятой одинарной точности, представляющее указанное число.
console.log('25) ===== Math.fround() ======');
console.log(Math.fround(-1.5)); // -1.5
console.log(Math.fround(0)); // 0
console.log(Math.fround(1.1)); // 1.100000023841858
console.log(Math.fround(1)); // 1
console.log(Math.fround(1.337)); // 1.3370000123977661
console.log(Math.fround(1.5)); // 1.5
console.log(Math.fround(NaN)); // NaN
console.log('\n');


// Math.hypot(value1, value2, ...)
// Метод Math.hypot() возвращает квадратный корень суммы квадратов своих аргументов
console.log('26) ===== Math.hypot() ======');
console.log(Math.hypot(3, 4));  // 5
console.log(Math.hypot(3, 4, 5)); // 7.0710678118654755
console.log(Math.hypot());  // 0
console.log(Math.hypot(NaN)); // NaN
console.log(Math.hypot(3, 4, 'foo')); // NaN
console.log(Math.hypot(3, 4, '5')); // 7.0710678118654755
console.log(Math.hypot(-3)); // 3
console.log('\n');


// Math.imul(a, b)
// Метод Math.imul() возвращает результат перемножения в стиле C двух 32-битных чисел.
console.log('27) ===== Math.inul() ======');
console.log(Math.imul(2, 4)); // 8
console.log(Math.imul(-1, 8)); // -8
console.log(Math.imul(-2, -2)); // 4
console.log(Math.imul(0xffffffff, 5)); // -5
console.log(Math.imul(0xfffffffe, 5)); // -10
console.log('\n');


// Math.log(x)
// Метод Math.log() возвращает натуральный (по основанию e) логарифм числа,
console.log('28) ===== Math.log() ======');
console.log(Math.log(-1)); // NaN, выход за пределы диапазона
console.log(Math.log(0)); // -Infinity
console.log(Math.log(1)); // 0
console.log(Math.log(10)); // 2.302585092994046
console.log('\n');


// Math.log10(x)
// Метод Math.log10() возвращает десятичный (по основанию 10) логарифм числа,
console.log('29) ===== Math.log10() ======');
console.log(Math.log10(-1)); // NaN
console.log(Math.log10(0)); // -Infinity
console.log(Math.log10(1)); // 0
console.log(Math.log10(2)); // 0.3010299956639812
console.log(Math.log10(10)); // 1
console.log(Math.log10(1000)); // 3
console.log('\n');


// Math.log1p(x)
// Метод Math.log1p() возвращает натуральный (по основанию e) логарифм 1 + числа
console.log('30) ===== Math.log1p() ======');
console.log(Math.log1p(1)); // 0.6931471805599453
console.log(Math.log1p(0)); // 0
console.log(Math.log1p(-1)); // -Infinity
console.log(Math.log1p(-2)); // NaN
console.log('\n');


// Math.log2(x)
// Метод Math.log2() возвращает двоичный (по основанию 2) логарифм числа
console.log('31) ===== Math.log2() ======');
console.log(Math.log2(3)); // 1.584962500721156
console.log(Math.log2(2)); // 1
console.log(Math.log2(1)); // 0
console.log(Math.log2(0)); // -Infinity
console.log(Math.log2(-2)); // NaN
console.log(Math.log2(1024)); // 10
console.log('\n');


// Math.max(value1, value2, ...)
// Метод Math.max() возвращает наибольшее из нуля или более чисел.
console.log('32) ===== Math.max() ======');
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max(-1, -2, -3)); // -1
console.log('\n');


// Math.min(value1, value2, ...)
// Метод Math.min() возвращает наименьшее из нуля или более чисел.
console.log('33) ===== Math.min() ======');
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.min(-1, -2, -3)); // -3
console.log('\n');


// Math.pow(base, exponent)
// Метод Math.pow() возвращает основание, возведённое в степень показатель, то есть, значение выражения основание ** показатель.
console.log('34) ===== Math.pow() ======');
console.log(Math.pow(2, 4)); // 16
console.log(Math.pow(5, 2)); // 25
console.log(Math.pow(5, -2)); // 0.04
console.log(Math.pow(2, 0))
console.log('\n');


// Math.random()
// Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем
console.log('35) ===== Math.random() ======');
for (let i = 0; i < 6; i++) {
    console.log(Math.random());
}
console.log('\n');
// выведет 6 раз рандомные числа от 0 до 0.9999999, при каждом вызове for будут разные числа
// 0.8902417017916495
// 0.21563974086214976
// 0.501614371655571
// 0.8752863813705931
// 0.4317619870358562
// 0.9837344238830144


// Math.round(x)
// Метод Math.round() возвращает число, округлённое к ближайшему целому. Если дробная часть числа больше, либо равна 0,5, аргумент будет округлён до ближайшего большего целого. Если дробная часть числа меньше 0,5, аргумент будет округлён до ближайшего меньшего целого.
console.log('36) ===== Math.round() =======');
console.log(Math.round(20.49)); // 20
console.log(Math.round(20.5)); // 21
console.log(Math.round(-20.5)); // -20
console.log(Math.round(-20.51)); // -21
console.log('\n');


// Math.sign(x)
// Метод Math.sign() возвращает знак числа, указывающий на то, является ли число отрицательным, положительным или нулём. Метод может вернуть одно из пяти значений: 1, -1, 0, -0 и NaN, которые представляют, соответственно «положительное число», «отрицательное число», «положительный ноль», «отрицательный ноль» и NaN.
console.log('37) ===== Math.sign() =======');
console.log(Math.sign(3)); // 1
console.log(Math.sign(-3)); // -1
console.log(Math.sign('-3')); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0
console.log(Math.sign(NaN)); // NaN
console.log(Math.sign('foo')); // NaN
console.log(Math.sign()); // NaN
console.log('\n');


// Math.sin(x)
// Метод Math.sin() возвращает синус числа. Метод Math.sin() возвращает числовое значение от -1 до 1, которое представляет синус переданного (в радианах) угла.
console.log('38) ===== Math.sin() =======');
console.log(Math.sin(0)); // 0
console.log(Math.sin(1)); // 0.8414709848078965
console.log(Math.sin(-12)); // 0.5365729180004349
console.log(Math.sin(12)); // -0.5365729180004349
console.log('\n');


// Math.sinh(x)
// Метод Math.sinh() возвращает гиперболический синус числа
console.log('39) ===== Math.sinh() =======');
console.log(Math.sinh(0)); // 0
console.log(Math.sinh(1)); // 1.1752011936438014
console.log(Math.sinh(-12)); // -81377.39570642984
console.log(Math.sinh(12)); // 81377.39570642984
console.log('\n');


// Math.sqrt(x)
// Метод Math.sqrt() возвращает квадратный корень числа. Если число отрицательное, то вернется NaN.
console.log('40) ===== Math.sqrt() =======');
console.log(Math.sqrt(0)); // 0
console.log(Math.sqrt(1)); // 1
console.log(Math.sqrt(-12)); // NaN
console.log(Math.sqrt(16)); // 4


// Math.tan(x)
// Метод Math.tan() возвращает тангенс числа.
console.log('41) ===== Math.tan() =======');
console.log(Math.tan(0)); // 0
console.log(Math.tan(1)); // 1.5574077246549023
console.log(Math.tan(-12)); // 0.6358599286615808
console.log(Math.tan(16)); // 0.3006322420239034
console.log(Math.tan(Infinity)); // NaN
console.log('\n');


// Math.tanh(x)
// Метод Math.tanh() возвращает гиперболический тангенс числа
console.log('42) ===== Math.tanh() =======');
console.log(Math.tanh(0)); // 0
console.log(Math.tanh(Infinity)); // 1
console.log(Math.tanh(1)); // 0.7615941559557649
console.log(Math.tanh(12)); // 0.9999999999244973
console.log(Math.tanh(-12)); // -0.9999999999244973
console.log('\n');


// Math.trunc(x)
// Функция Math.trunc() возвращает целую часть числа путём удаления всех дробных знаков.
console.log('43) ===== Math.trunc() =======');
console.log(Math.trunc(13.37)); // 13
console.log(Math.trunc(42.84)); // 42
console.log(Math.trunc(0.123)); //  0
console.log(Math.trunc(-0.123)); // -0
console.log(Math.trunc('-1.123')); // -1
console.log(Math.trunc(NaN)); // NaN
console.log(Math.trunc('foo')); // NaN
console.log(Math.trunc()); // NaN
console.log('\n');