function Persona(name, last_name, height) {
    this.name = name;
    this.last_name = last_name;
    this.height = height
}
//Esta es una manera en la que se puede agregar metodos al prototipo
// en caso de querer hacer estas funciones como funciones flecha, a la hota de referirnos a this, este va a apuntar a la window y no a la propiedad del objeto   
Persona.prototype.hello = function () {
    return `Hello, I'm ${this.name} ${this.last_name}`
};
Persona.prototype.is_tall = function () {
    var response= this.height >= 1.70 ? `${this.name} is tall` : `${this.name} isn't`;
    console.log(response);
    return response;
}
var joseph = new Persona('Joseph', 'Morales',1.71);

console.log(joseph);
console.log(joseph.hello());
console.log(joseph.is_tall());