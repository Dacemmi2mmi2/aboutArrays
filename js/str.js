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
