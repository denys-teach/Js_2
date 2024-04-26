console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i

let i = 0;
i++
i--
--i
++i
console.log(i);


/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
let myNum = 10
// myTest
let myTest = 20
// +=
myTest += myNum
// –=
myTest -= i
// *=
myTest *= myNum
// /=

myTest /= 5
// %= 
myTest %= 22


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
let myPi = Math.PI
// округлене значення числа 89.279 → myRound
let myRound = Math.round(89.279)
// випадкове число між 0..10 → myRandom
let myRandom = Math.random()*10
// 3 у 5 степені → myPow
let myPow = Math.pow(3,5)


/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj

let strObj = {
  str: "Мама мыла раму, рама мыла маму",
}
strObj.length = strObj.str.length,
console.log(strObj.length)




/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
let isRamaPos = strObj.str.indexOf('рама')
console.log(isRamaPos);
// isRama
let isRama = strObj.str.includes('рама')
console.log(isRama);


/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace
const strReplace = strObj.str.replace('мыла', 'моет')

strReplace = strReplace.replace('рама', 'Рама')
strReplace = strReplace.replace('мыла', 'держит')
console.log('strReplace:', strReplace)


/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

var someStr = 'some STRING'
var upperStr = someStr.toUpperCase()
var lowerStr = someStr.toLowerCase()
