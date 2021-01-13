class Person {
    constructor(name, last_name, height) {
        this.name = name;
        this.last_name = last_name;
        this.height = height
    }

    hello(fn) {
        var{name,last_name}=this;
        console.log(`Hello, I'm ${name} ${last_name}`) ;
        if (fn) {
            fn(name,last_name,false)   
        }
    
    }
    is_tall() {
        var response = this.height >= 1.70 ? `${this.name} is tall` : `${this.name} isn't`;
        return response;
    }
}

class Developer extends Person {
    constructor(name, last_name, height) {
        super(name, last_name, height)
    }
    hello(fn) {
        var{name,last_name}=this;
        console.log(`Hello, my name is ${name} ${last_name}, and I'm developer`);
        if (fn) {
            fn(name,last_name,true) ;  
        }
    }
}
function answer_greeting(name, last_name, is_dev) {
    console.log(`Good day, ${name} ${last_name}`);
    if (is_dev) {
        console.log("ah look, i didn't know you were a developer");
    }

}
var joseph = new Person('Joseph', 'Morales', 1.71);
var sacha = new Developer('Sacha', 'Lifszyc', 1.80);

joseph.hello(answer_greeting);
sacha.hello(answer_greeting);