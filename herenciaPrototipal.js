//Forma antigua de hacer la herencia
//todas las funciones tiene el atributo prototype
function inherited_from(child_prototype, parend_prototype) {
    var fn = function () { };
    fn.prototype = parend_prototype.prototype;
    child_prototype.prototype = new fn;
    child_prototype.prototype.constructor = child_prototype;

}
function Person(name, last_name, height) {
    this.name = name;
    this.last_name = last_name;
    this.height = height
}
Person.prototype.hello = function () {
    return `Hello, I'm ${this.name} ${this.last_name}`
};
// Persona.prototype.is_tall = function () {
//     var response = this.height >= 1.70 ? `${this.name} is tall` : `${this.name} isn't`;
//     console.log(response);
//     return response;
// }
function Developer(name, last_name, height) {
    this.name = name;
    this.last_name = last_name;
    this.height = height

}
//Herencia
inherited_from(Developer, Person);

Developer.prototype.hello = function () {
    return `Hello, my name is ${this.name} ${this.last_name}, and I'm developer`
};

var joseph = new Developer('Joseph', 'Morales', 1.71);
console.log(joseph.hello());