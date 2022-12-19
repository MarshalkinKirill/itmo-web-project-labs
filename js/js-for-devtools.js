/**
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 * @description Сложение двух чисел
 */
function add(a, b) {
    return a + b;
}

/**
 * Сложение двух чисел
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 * @returns {number} Сумма чисел a и b
 */
function add(a, b) {
    return a + b;
}

/** @module MyModule */

/** Переменная модуля MyModule */
const variable = "Переменная модуля";

/** Функция модуля MyModule */
function foo() {
    console.log("Функция модуля");
}

/**
 * Конструктор MyClass
 * @constructor
 */
function MyClass() {
    /** Метод экземпляра класса MyClass */
    this.foo = function () {
        console.log("Метод экземпляра");
    };
}

/** Статический метод класса MyClass */
MyClass.foo = function () {
    console.log("Статический метод");
};