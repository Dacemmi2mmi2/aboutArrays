// Boolean

// Boolean.prototype.toSourse()
// Метод toSource() возвращает строку, представляющую исходный код объекта. Этот метод обычно вызывается внутри движка JavaScript, а не явно в коде.
// Эта возможность не является стандартной и стандартизировать её пока никто не собирается. Не используйте её на сайтах, смотрящих во внешний мир: она будет работать не у всех пользователей. Также могут присутствовать большие несовместимости между реализациями и её поведение может в будущем измениться.
console.log('1) ==== Boolean.prototype.toSpurse() ======');
console.log(' --- ');
console.log('\n');


// Boolean.prototype.toString()
// Метод toString() возвращает строковое представление указанного объекта Boolean.
console.log('2) ==== Boolean.prototype.toString() ======');
let flag = new Boolean(true);
console.log(flag.toString()); // true
console.log(typeof flag.toString()); // string
console.log('\n');


// Boolean.prototype.valueOf()
// Метод valueOf() объекта Boolean возвращает примитивное значение объекта или литерала логического типа. Этот метод обычно вызывается внутри движка JavaScript, а не явно в коде.
console.log('3) ==== Boolean.prototype.valueOf() ======');
let a = new Boolean();
let b = new Boolean(true);
console.log(a.valueOf()); // false
console.log(b.valueOf()); // true
console.log('\n');