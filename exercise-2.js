// Задача 2.
// Да се дефинира класа Rectangle со следните атрибути и методи:

// color
// width - приватна променлива
// height - приватна променлива
// Статичен метод getShapeType() кој што ќе враќа “Rectangle”
// Гетери и сетери за атрибутите width и height
// Метод getArea() кој што ќе ја пресметува плоштината
// Метод describe() koj што ќе ги принта бојата, ширината и висината на правоаголникот.
// Да се направат неколку инстанци од оваа класа и да се употребат соодветните методи.

class Rectangle {
    #width;
    #height;

    constructor(color, width, height) {
        this.color = color;
        this.#width = width;
        this.#height = height;
    }

    static getShapeType() {
        return "Rectangle";
    }

    get width() {
        return this.#width;
    }

    set width(value) {
        if (value > 0) {
            this.#width = value;
        } else {
            console.error("Width must be a positive number!");
        }
    }

    get height() {
        return this.#height;
    }

    set height(value) {
        if (value > 0) {
            this.#height = value;
        } else {
            console.error("Height must be a positive number!");
        }
    }

    getArea() {
        return this.#width * this.#height;
    }

    describe() {
        console.log(`Color: ${this.color}, Width: ${this.#width}, Height: ${this.#height}`);
    }
}
