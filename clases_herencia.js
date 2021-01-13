class Person {
    constructor(name, last_name, height) {
        this.name = name;
        this.last_name = last_name;
        this.height = height
    }

    hello() {
        return `Hello, I'm ${this.name} ${this.last_name}`
    }
    is_tall() {
        var response = this.height >= 1.70 ? `${this.name} is tall` : `${this.name} isn't`;
        return response;
    }
}

class Developer extends Person {
    constructor(name, last_name, height, age) {
        super(name, last_name, height)
        this.age = age;
    }
    hello() {
        return `Hello, my name is ${this.name} ${this.last_name}, and I'm developer`

    }
}
var joseph = new Person('Joseph', 'Morales', 1.71);
var sacha = new Developer('Sacha', 'Lifszyc', 1.80);
console.log(joseph.hello());
console.log(joseph.is_tall());
console.log(sacha.hello());
console.log(sacha.is_tall());
